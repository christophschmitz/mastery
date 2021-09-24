import React from 'react';
import AddPage from './pages/AddPage/AddPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <AddPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
