import React, { useRef } from 'react';
import { Grid, Card, CardContent, Icon, Box, Typography } from '@mui/material';
import mailIcon from '../../images/mail-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';

export default function ProductGrid(props) {
  const buttonDivRef = useRef(null);

  const handleClick = (e, card) => {
    e.preventDefault();
    props.handleOpenClosePopup(card);
  };

  const handleKeyDown = (e, card) => {
    if (e.key === 'Enter') {
      handleClick(e, card);
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
      {props.cards.map((card, index) => (
        <Grid
          role='button'
          aria-label={`Подробнее о ${card.name}`}
          onClick={(e) => handleClick(e, card)}
          onKeyDown={(e) => handleKeyDown(e, card)}
          item
          tabIndex='0'
          key={card.id || index} // Используйте индекс как запасной ключ, если id отсутствует
          ref={buttonDivRef}
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
            }}
          >
            <CardContent sx={{ p: '24px' }}>
              <Typography
                variant='h2'
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
                  mb: '30px',
                }}
              >
                {card.name}
              </Typography>

              <Box display='flex' gap='14px' sx={{ mb: '12px' }}>
                <Icon>
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      backgroundImage: `url(${phoneIcon})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    aria-label="Phone icon"
                  ></Box>
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
                  {card.phone}
                </Typography>
              </Box>

              <Box display='flex' gap='14px'>
                <Icon>
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      backgroundImage: `url(${mailIcon})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    aria-label="Mail icon"
                  ></Box>
                </Icon>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    maxWidth: '226px',
                    maxHeight: '20px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {card.email}
                </Typography>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
