import React from 'react';
import usePopupClose from '../hooks/usePopupClose';
import CloseButton from '../CloseButton/CloseButton';
import {
  Box,
  Card
} from '@mui/material';

function Popup({ isOpen, handleOpenClosePopup, children }) {

  usePopupClose({ isOpen, handleOpenClosePopup });

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'primary.overlay',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'visibility .5s linear, opacity .5s linear',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 3,
          '@media (max-width: 600px)': {
            alignItems: 'flex-start',
          }
        }}
        /* Доп класс для управления открытием/закрытием попапа */
        className={`${isOpen ? 'popup popup_opened' : 'popup'
          }`}
      >

        <Card elevation={0}
          sx={{
            p: '24px',
            zIndex: 4,
            position: 'relative',
            width: '100%',
            maxWidth: '500px', //
            minHeight: '468px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxSizing: 'border-box',
            boxShadow: '0 0 20px rgba(0, 0, 0, .2)',
            '@media (max-width: 600px)': {
              mt: 1,
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 32px)',
            }
          }}
        >
          <CloseButton
            handleOpenClosePopup={handleOpenClosePopup}></CloseButton>
          {children}
        </Card>
      </Box>
    </>
  );
}

export default Popup;