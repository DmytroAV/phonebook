import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./hoc/RestrictedRoute";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { Loader } from "./components/Loader/Loader";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";

const Layout = lazy(() => import('./Layout/Layout'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser());


  }, [dispatch]);

  return (
    isRefreshing ? <Loader />
      : <Suspense fallback={<Loader />}>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>

  )
}

export default App;
