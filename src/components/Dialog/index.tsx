import React from 'react';
import {Dialog as DialogMui, DialogTitle, DialogContent, DialogActions, Button, DialogContentText} from '@mui/material';

interface IDialogProps {
  text: string;
}

function Dialog({ text }: IDialogProps) {
  /* TODO: Complete Dialog */
  return (
    <DialogMui open={true}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="warning" variant="contained">Yes</Button>
        <Button color="info" variant="outlined">No</Button>
      </DialogActions>
    </DialogMui>
  );
}

export default Dialog;
