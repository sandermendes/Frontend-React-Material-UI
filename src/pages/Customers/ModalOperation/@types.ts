import React from 'react';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IModalOperationProps {
  open: boolean;
  handleClose: (click: React.MouseEvent) => void;
  handleFormData: (formData: IUser) => void;
}
