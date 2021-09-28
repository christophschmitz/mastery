import React from 'react';
import AddPage from './pages/AddPage/AddPage';
import DetailPage from './pages/DetailPage/DetailPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
