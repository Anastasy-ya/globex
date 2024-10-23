import { IconButton } from '@mui/material';
import closeIcon from '../../images/close-icon.svg';

const closeButtonStyles = {
  width: '25px',
  height: '25px',
  backgroundImage: `url(${closeIcon})`,
  backgroundPosition: 'center',
  backgroundSize: '76%',
  position: 'fixed',
  right: { xs: '50%', sm: 'calc(50% - 225px)' },
  backgroundRepeat: 'no-repeat',
};

function CloseButton({ handleOpenClosePopup }) {
  return (
    <IconButton
      type='button'
      aria-label='Закрыть'
      onClick={handleOpenClosePopup}
      sx={closeButtonStyles}
    />
  )
};

export default CloseButton;

