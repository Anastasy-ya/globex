import React from "react";
import usePopupClose from "../hooks/usePopupClose";
import closeIcon from "../../images/close-icon.svg";
import {
  Paper,
  Box,
  IconButton
} from '@mui/material';

/* Не было времени разобраться с Popover, TODO: переделать в элемент mui*/
function Popup({ isOpen, handleOpenClosePopup, id, children }) {

  usePopupClose({ isOpen, handleOpenClosePopup });

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "primary.overlay",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "visibility .5s linear, opacity .5s linear",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          zIndex: 3,
        }}
        /* Доп класс для управления открытием/закрытием попапа */
        className={`${isOpen ? "popup popup_opened" : "popup"
          }`}
      >

        <Paper elevation={0}
          sx={{
            p: "24px",
            zIndex: 4,
            position: "relative",
            width: "500px",
            minHeight: "468px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxSizing: "border-box"
          }}
        >

          <IconButton
            type="button"
            aria-label="Закрыть"
            onClick={handleOpenClosePopup}
            sx={{
              width: "25px",
              height: "25px",
              backgroundImage: `url(${closeIcon})`,
              backgroundPosition: "center",
              backgroundSize: "76%",
              position: "fixed",
              right: { xs: "50%", sm: "calc(50% - 225px)" },
              backgroundRepeat: "no-repeat",
            }}
          >
          </IconButton>

          {children}

        </Paper>


      </Box>
    </>
  );
}

export default Popup;