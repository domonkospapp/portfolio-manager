import { Container } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <Container maxWidth="md">
      <App />
    </Container>
  </StrictMode>
,document.getElementById('root'));
