import React from 'react';
import NavBar from './route/NavBar';
import AppRouter from './route/RouterComponent';

import Container from '@material-ui/core/Container';

function App(){
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;