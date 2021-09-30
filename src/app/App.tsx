import React from 'react';
import AddPage from './pages/AddPage/AddPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

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
        <Route path="/user">
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
