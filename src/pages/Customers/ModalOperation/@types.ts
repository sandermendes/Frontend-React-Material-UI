import React from 'react';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IModalOperationProps {
  operation: 'add' | 'edit'
  open: boolean;
  data: { user: IUser },
  handleClose: (click: React.MouseEvent) => void;
  handleFormData: (id: number, formData: IUser) => void;
}
