import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <main>Add</main>
        </Route>
        <Route path="/user">
          <main>Add</main>
        </Route>
        <Route path="/detail">
          <main>detail</main>
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
