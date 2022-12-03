import React from 'react';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IModalOperationProps {
  operation: 'add' | 'edit'
  open: boolean;
  data?: { user?: IUser | null },
  handleClose: (click: React.MouseEvent) => void;
  handleFormData: (formData: IUser) => void;
}
