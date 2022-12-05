import React from 'react';

export interface IHeaderProps {
  multiplesSelected: boolean;
  handleAdd: (element: React.MouseEvent<HTMLElement>) => void;
  handleDelete: (element: React.MouseEvent<HTMLElement>) => void;
}
