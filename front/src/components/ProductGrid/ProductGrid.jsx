import React, { useEffect } from "react";
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
import { persons } from '../consts';

export default function ProductGrid(props) {
  const [buttonDiv, setButtonDiv] = React.useState(null);

  useEffect(() => {
    const element = document.getElementById('infoButton');
    setButtonDiv(element);
  }, []);

  const handleClick = (e) => {

    e.preventDefault();
    props.handleOpenClosePopup();

  };

  // Симуляция клика по событию Enter с клавиатуры
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {

      props.handleOpenClosePopup();
      buttonDiv.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));

    }
  };

  return (
    <Grid
      container
      sx={{
        p: "32px 0 0",
        justifyContent: "center",
        gap: "25px"
      }}
      width="100%"
    >
      {persons.map((person) => (
        <Grid
          role="button"
          aria-label="Подробнее"
          onClick={(e) => handleClick(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          item
          tabIndex="0"
          key={person.id}
          id="infoButton"
          sx={{
            cursor: "pointer",
            maxWidth: 357,
            minWidth: 300,
            minHeight: 314,
            flex: 1,
            borderRadius: "16px",
            transition: "background-color .5s linear",
            '&:focus': {
              border: "#BCC3D0 1px solid",
              borderRadius: "16px",
              backgroundColor: 'primary.darkGrey',
              transition: "background-color .5s linear",
            },
          }}
        >
          <Card
            elevation={0}
            key={person.id}
            sx={{
              boxShadow: "0 0 20px rgba(0, 0, 0, .2)", /* TODO theme colors */
              borderRadius: "16px",
              boxSizing: "border-box",
              height: "100%",
              transition: "background-color .5s linear",
              '&:active': {
                backgroundColor: 'primary.darkGrey',
                transition: "background-color .5s linear",
              },
            }}>
            <CardContent
              sx={{ p: "24px" }}
            >
              <Typography variant="h2"
                sx={{
                  color: "primary.darkGrey",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  maxWidth: "309px",
                  maxHeight: "30px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  mb: "30px"
                }}
              >
                {person.name}
              </Typography>

              <Box display="flex" gap="14px" sx={{ mb: "12px" }}>
                <Icon>
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url(${phoneIcon})`,

                    }}>
                  </Box>
                </Icon>

                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    maxWidth: "226px",
                    maxHeight: "20px",
                  }}
                >
                  {person.telephone}
                </Typography>
              </Box>

              <Box display="flex" gap="14px">
                <Icon>
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url(${mailIcon})`,
                    }}>
                  </Box>
                </Icon>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    maxWidth: "226px",
                    maxHeight: "20px",
                    /* Далее три свойства для многоточия в конце строки */
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
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