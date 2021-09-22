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
        <Route path="/user"></Route>
        <Route path="/detail"></Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
