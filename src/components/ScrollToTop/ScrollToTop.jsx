import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { BoxStyled } from './ScrollToTopStyled';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      {isVisible && (
        <BoxStyled onClick={scrollToTop}>
          <Fab
            sx={{
              width: '50px',
              height: '50px',
            }}
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon sx={{ fontSize: '1.8rem' }} />
          </Fab>
        </BoxStyled>
      )}
    </>
  );
}
