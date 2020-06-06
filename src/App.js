import React from 'react';
import { Route, Switch } from 'react-router-dom'
import StreamList from './components/stream-list/stream-list'
import StreamDelete from './components/stream-delete/stream-delete'
import StreamShow from './components/stream-show/stream-show'
import StreamEdit from './components/stream-edit/stream-edit'
import StreamCreate from './components/stream-create/stream-create'
import Header from './components/header/header'
import './App.css';

function App() {
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/show" component={StreamShow} />
        <Route exact path="/streams/delete" component={StreamDelete} />
      </Switch>
    </div>
  );
}

export default App;
