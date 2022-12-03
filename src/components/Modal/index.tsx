import React from 'react';
import { Modal as MuiModal } from '@mui/material';

import { IModalProps } from './@types';
import * as S from './styles';

function Modal(props: IModalProps) {
  return (
    <MuiModal open={props.open} aria-labelledby={`${props.name}-title`} aria-describedby={`${props.name}-description`}>
      <S.ModalPaper>
        {props.children}
      </S.ModalPaper>
    </MuiModal>
  );
}

export default Modal;