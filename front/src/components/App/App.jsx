import React, { useState, useEffect } from 'react';
import '../styles/Global.css';
import CustomizedInput from '../SearchInput/SearchInput';
import ProductGrid from '../ProductGrid/ProductGrid';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupContent/PopupContent';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

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

  const togglePopup = (person = initialSelectedCard) => {
    setIsOpen(!isOpen);
    setSelectedCard(person);
    // document.querySelector('.popup').classList.toggle('popup_opened');

    // if (window.innerWidth < 500) {
      document.body.style.position = isOpen ? '' : 'fixed';
      document.body.style.width = isOpen ? 'auto' : '100%';
    // }
  };

  return { isOpen, selectedCard, togglePopup };
};

const fetchCards = (setCards) => {
  // Fetch cards from server
  // MainApi.getPersons().then(persons => {
  //   setCards(persons);
  //   localStorage.setItem('persons', JSON.stringify(persons));
  // }).catch(console.error);
};

function App() {
  const [cards, setCards] = useState([]);
  const { isOpen, selectedCard, togglePopup } = usePopup();

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
          <ProductGrid handleOpenClosePopup={togglePopup} isOpen={isOpen} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
