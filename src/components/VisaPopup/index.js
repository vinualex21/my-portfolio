import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './index.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VisaPopup = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" className='dialog-button' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <input type='button' className="dialog-button" value='See Visa Requirements' onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Visa Status and Requirements"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <section>
              <p><b>Nationality:</b> Indian</p>
              <p><b>Current visa:</b> UK Graduate visa</p>
              <p><b>Expiry:</b> February 2024</p>
            </section>
            <section>
              <p>* Please check Right to Work requirements in the country of interest.</p>
              <p>* Please contact only if you are eligible and willing to provide visa sponsorship.</p>
            </section>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default VisaPopup;