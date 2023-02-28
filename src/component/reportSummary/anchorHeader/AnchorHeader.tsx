import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function AnchorHeader() {
  return <Div style={{marginTop: '1.6rem', fontWeight: 'bolder'}}>{"Statement of Outstanding Invoices"}</Div>;
}