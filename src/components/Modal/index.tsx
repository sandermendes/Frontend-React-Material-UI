import React from 'react';
import {Modal as MuiModal, Paper} from '@mui/material';

import {IModalProps} from './@types';
import * as S from './styles';

function Modal(props: IModalProps) {
  return (
    <MuiModal open={props.open} aria-labelledby={`${props.name}-title`} aria-describedby={`${props.name}-description`}>
      <Paper sx={{ ...S.style }}>
        {props.children}
      </Paper>
    </MuiModal>
  );
}

export default Modal;