import React from 'react';
import AddPage from './pages/AddPage/AddPage';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DetailPage from './pages/DetailPage/DetailPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:title">
          <DetailPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>

        <Route path="/user">
          <ProfilePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
