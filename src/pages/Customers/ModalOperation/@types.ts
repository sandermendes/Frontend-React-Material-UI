import React from 'react';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IModalOperationProps {
  operation: 'add' | 'edit'
  open: boolean;
  data?: { user?: IUser },
  handleClose: (click: React.MouseEvent) => void;
  handleFormData: (formData: IUser) => void;
}
