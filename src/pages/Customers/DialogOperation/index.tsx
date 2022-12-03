import React from 'react';

import Dialog from '../../../components/Dialog';

interface IDialogOperationProps {
  open: boolean;
  text: string;
  dialogResponse: (confirm: boolean) => void;
}

function DialogOperation(props: IDialogOperationProps) {
  return <Dialog {...props} />;
}

export { DialogOperation };
