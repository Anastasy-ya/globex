import React from "react";
// import usePopupClose from "./hooks/usePopupClose";
import { Grid, Typography } from '@mui/material';

export default function PopupContent({ selectedCard }) {

  return (
    <>
      <Typography variant="h2">{selectedCard.name}</Typography>
      <Grid container sx={{
        flexGrow: 1,
        maxWidth: '452px',
        minWidth: '300px',
        margin: '0 auto',
        justifyContent: "space-between",
        gridRowGap: '14px',
        '& > .MuiGrid-item': {
          alignItems: 'center',
          display: 'flex',
          height: 'auto',
        }
      }}>

        <Grid item xs={12} sm={5}>
          <Typography variant="body1" sx={{ width: '137px' }}>Телефон:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body2" sx={{ width: '275px' }}>{selectedCard.telephone}</Typography>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant="body1" sx={{ width: '137px' }}>Почта:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          {/* перенос длинных неразрывных слов без тире*/}
          <Typography variant="body2" sx={{ wordBreak: 'break-all', width: '275px' }}>{selectedCard.mail}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" sx={{ width: '137px' }}>Дата приёма:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body2" sx={{ width: '275px' }}>{selectedCard.visitDate}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" sx={{ width: '137px' }}>Должность:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body2" sx={{ width: '275px' }}>{selectedCard.jobTitle}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" sx={{ width: '137px' }}>Подразделение:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body2" sx={{ width: '275px' }}>{selectedCard.department}</Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} sx={{ gap: "12px", mb: '56px' }}>
        <Grid item>
          <Typography variant="body1">Дополнительная информация:</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{selectedCard.additionalInformation}</Typography>
        </Grid>
      </Grid>

    </>
  );
}

// почистить мусор, добавить ариа и прочие альты, проверить верстку, начать связывать с бэком


