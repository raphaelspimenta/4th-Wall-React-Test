import Box from '@mui/material/Box';
import MaterialModal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import './modal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Modal({ open, handleClose, title, children }) {
  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" className="modal-title">
          {title}
        </Typography>
        {children}
      </Box>
    </MaterialModal>
  );
}

export default Modal;
