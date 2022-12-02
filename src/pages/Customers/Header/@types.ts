import React from 'react';

export interface IHeaderProps {
  multiplesSelected: boolean;
  handleChange: (element: React.MouseEvent<HTMLElement>) => void;
}
