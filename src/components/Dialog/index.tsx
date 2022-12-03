import React from 'react';
import { Dialog as DialogMui, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@mui/material';

interface IDialogProps {
  open: boolean;
  text: string;
  dialogResponse: (confirm: boolean) => void;
}

function Dialog({ open, text, dialogResponse }: IDialogProps) {
  /* TODO: Complete Dialog */
  return (
    <DialogMui open={open}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="warning" variant="contained" onClick={() => dialogResponse(true)}>Confirm</Button>
        <Button color="info" variant="outlined" onClick={() => dialogResponse(false)}>Cancel</Button>
      </DialogActions>
    </DialogMui>
  );
}

export default Dialog;
