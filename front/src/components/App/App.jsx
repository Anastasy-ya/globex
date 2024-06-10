import React, { useState, useEffect } from "react";
import './App.css';
import CustomizedInput from '../SearchInput/SearchInput';
import ProductGrid from '../ProductGrid/ProductGrid';
import Popup from '../Popup/Popup';
import PopupContent from "../PopupContent/PopupContent";
import { theme } from "../../theme";
import { ThemeProvider } from '@mui/material/styles';
import {
  Box,
} from '@mui/material';

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [cards, setCards] = React.useState([]);

  useEffect(() => { //заготовка для отправки запроса на серсер за карточками
    if (cards.length === 0) {
      // console.log('карточек нема')
      // MainApi
      //   .getPersons()
      //   .then((persons) => {
      //     
      //     setCards(persons);
      //     localStorage.setItem("persons", JSON.stringify(persons))
      // })
      // .catch(console.error)
    }
  }, [cards])

  function handleOpenClosePopup() {
    setIsOpenPopup(!isOpenPopup);

    document.querySelector(".popup").classList.toggle("popup_opened");

    // fix background
    if (!isOpenPopup) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      // default value
      document.body.style.width = 'auto';
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <div className="page">
          <Box
            component="section"
            sx={{
              maxWidth: "1280px",
              minWidth: "300px",
              margin: "0 auto",
              width: "100%",
              padding: { xs: "64px 10px", sm: "64px 80px" },
              boxSizing: "border-box",
            }}
          >
            <Popup
              isOpen={isOpenPopup}
              handleOpenClosePopup={handleOpenClosePopup}
            >
              <PopupContent/>
            </Popup>
            <CustomizedInput></CustomizedInput>
            <ProductGrid
              handleOpenClosePopup={handleOpenClosePopup}
              isOpen={isOpenPopup}
            ></ProductGrid>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
