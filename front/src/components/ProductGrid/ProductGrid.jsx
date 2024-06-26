import React, { useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Icon,
  Box,
  Typography
} from '@mui/material';
import mailIcon from '../../images/mail-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import { persons } from '../config/consts';

export default function ProductGrid(props) {
  const [buttonDiv, setButtonDiv] = React.useState(null);

  useEffect(() => {
    const element = document.getElementById('infoButton');
    setButtonDiv(element);
  }, []);

  const handleClick = (e, person) => {
    e.preventDefault();
    props.handleOpenClosePopup(person);
  };

  // Симуляция клика по событию Enter с клавиатуры
  const handleKeyDown = (e, person) => {
    if (e.key === 'Enter') {
      buttonDiv.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    }
  };

  return (
    <Grid
      container
      sx={{
        p: '32px 0 0',
        justifyContent: 'center',
        gap: '25px'
      }}
      width='100%'
    >
      {persons.map((person) => (
        <Grid
          role='button'
          aria-label={`Подробнее о ${person.name}`}
          onClick={(e) => handleClick(e, person)}
          onKeyDown={(e) => handleKeyDown(e, person)}
          item
          tabIndex='0'
          key={person.id}
          id='infoButton'
          sx={{
            cursor: 'pointer',
            maxWidth: 357,
            minWidth: 300,
            minHeight: 314,
            flex: 1,
            borderRadius: '16px',
            '&:focus': {
              border: '#BCC3D0 1px solid',
            },
          }}
        >
          <Card
            elevation={0}
            key={person.id}
            sx={{
              boxShadow: '0 0 20px rgba(0, 0, 0, .2)', /* TODO theme colors */
              borderRadius: '16px',
              boxSizing: 'border-box',
              height: '100%',
              transition: 'background-color .2s linear',
              '&:active': {
                backgroundColor: 'primary.lightGrey',
                transition: 'background-color .2s linear',
              },
            }}>
            <CardContent
              sx={{ p: '24px' }}
            >
              <Typography variant='h2'
                sx={{
                  color: 'primary.darkGrey',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '24px',
                  maxWidth: '309px',
                  maxHeight: '30px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  mb: '30px'
                }}
              >
                {person.name}
              </Typography>

              <Box display='flex' gap='14px' sx={{ mb: '12px' }}>
                <Icon> {/*TODO добавить alt */}
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      backgroundImage: `url(${phoneIcon})`,

                    }}>
                  </Box>
                </Icon>

                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    maxWidth: '226px',
                    maxHeight: '20px',
                  }}
                >
                  {person.telephone}
                </Typography>
              </Box>

              <Box display='flex' gap='14px'>
                <Icon> {/*TODO добавить alt */}
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      backgroundImage: `url(${mailIcon})`,
                    }}>
                  </Box>
                </Icon>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    maxWidth: '226px',
                    maxHeight: '20px',
                    /* Далее три свойства для многоточия в конце строки */
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {person.mail}
                </Typography>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};