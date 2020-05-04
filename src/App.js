import React from 'react';
import Push from './push';
import Analytics from './analytics';
import Account from './account';
import { AppContext } from './AppContext';

const App = () => {
  return (
    <AppContext>
      <Push />
      <Analytics />
      <Account />
    </AppContext>
  );
};

export default App;
