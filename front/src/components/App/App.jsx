import React, { useState, useEffect } from 'react';
import '../styles/Global.css';
import CustomizedInput from '../SearchInput/SearchInput';
import ProductGrid from '../ProductGrid/ProductGrid';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupContent/PopupContent';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import * as Api from '../Api/Api';

// Initial state for selectedCard
const initialSelectedCard = {
  id: '',
  name: '',
  telephone: '',
  mail: '',
  visitDate: '',
  jobTitle: '',
  department: '',
  additionalInformation: '',
};

// Custom hook for handling popup state
const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const togglePopup = (card = initialSelectedCard) => {
    setIsOpen(!isOpen);
    setSelectedCard(card);

      document.body.style.position = isOpen ? '' : 'fixed';
  };

  return { isOpen, selectedCard, togglePopup };
};

const fetchCards = (setCards) => {
  Api.getCards().then(cards => {
    setCards(cards);
    try {
      localStorage.setItem('cards', JSON.stringify(cards));
    } catch (storageError) {
      console.error('Error saving cards to localStorage:', storageError);
    }
  })
  .catch(apiError => {
    console.error('Error fetching cards:', apiError);
  });
};

function App() {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const { isOpen, selectedCard, togglePopup } = usePopup();

  console.log(cards)

  useEffect(() => {
    if (cards.length === 0) {
      fetchCards(setCards);
    }
  }, [cards]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        overflow: 'hidden',
      }}>
        <Box
          component='section'
          sx={{
            maxWidth: '1280px',
            minWidth: '300px',
            margin: '0 auto',
            width: '100%',
            padding: { xs: '64px 10px', sm: '64px 80px' },
            boxSizing: 'border-box',
          }}
        >
          <Popup isOpen={isOpen} handleOpenClosePopup={togglePopup}>
            <PopupContent selectedCard={selectedCard} />
          </Popup>
          <CustomizedInput />
          <ProductGrid handleOpenClosePopup={togglePopup} isOpen={isOpen} cards={cards} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
