import {
  // BallTriangle,
  Oval,
} from 'react-loader-spinner';
import { ContainerLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <ContainerLoader>
      <Oval
        height={100}
        width={100}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      {/* <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      /> */}
    </ContainerLoader>
  );
};
