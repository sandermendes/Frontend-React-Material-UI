import React from 'react';
import { CircularProgress } from '@mui/material';

function Loading() {
  return (
    <div style={{ position: 'absolute', top: '55%', left: '47%' }}>
      <CircularProgress />
    </div>
  );
}

export default Loading;