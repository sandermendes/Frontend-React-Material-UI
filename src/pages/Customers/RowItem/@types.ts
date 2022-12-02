import React from 'react';

export interface IRowItemProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  divider: boolean;
  handleChange: (element: React.ChangeEvent<HTMLInputElement>) => void;
}
