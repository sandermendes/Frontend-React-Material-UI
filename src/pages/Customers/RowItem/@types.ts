import React from 'react';
import {IUser} from '../ModalOperation/@types';

export interface IRowItemProps {
  data: { user: IUser };
  divider: boolean;
  handleChange: (element: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormData: (formData: IUser) => void;
}
