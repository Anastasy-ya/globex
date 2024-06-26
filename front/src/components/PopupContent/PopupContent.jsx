import React from 'react';
import { Grid, Typography, CardContent } from '@mui/material';

export default function PopupContent({ selectedCard }) {

  return (
    <CardContent sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      p: 0,
    }}>
      <Typography 
        variant='h2'
        sx={{
          '@media (max-width: 600px)': {
            mt: '40px',
          }
        }}
        >{selectedCard.name}</Typography>
      <Grid container sx={{
        flexGrow: 1,
        maxWidth: '452px',
        minWidth: '300px',
        margin: '0 auto',
        justifyContent: 'space-between',
        gridRowGap: '14px',
        '& > .MuiGrid-item': {
          alignItems: 'center',
          display: 'flex',
          height: 'auto',
        }
      }}>

        <Grid item xs={12} sm={5}>
          <Typography variant='body1' sx={{ width: '137px' }}>Телефон:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant='body2' sx={{ width: '275px' }}>{selectedCard.telephone || 'Номер телефона'}</Typography>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant='body1' sx={{ width: '137px' }}>Почта:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          {/* перенос длинных неразрывных слов без тире*/}
          <Typography variant='body2' sx={{ wordBreak: 'break-all', width: '275px' }}>{selectedCard.mail || 'E-mail адрес'}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant='body1' sx={{ width: '137px' }}>Дата приёма:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant='body2' sx={{ width: '275px' }}>{selectedCard.visitDate || 'Дата визита'}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant='body1' sx={{ width: '137px' }}>Должность:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant='body2' sx={{ width: '275px' }}>{selectedCard.jobTitle || 'Название должности'}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant='body1' sx={{ width: '137px' }}>Подразделение:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant='body2' sx={{ width: '275px' }}>{selectedCard.department || 'Подразделение'}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ gap: '12px', pb: '8px' }}>
        <Grid item>
          <Typography variant='body1'>Дополнительная информация:</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2'>{selectedCard.additionalInformation}</Typography>
        </Grid>
      </Grid>

    </CardContent>
  );
}

// добавить ариа и прочие альты, проверить верстку, начать связывать с бэком


