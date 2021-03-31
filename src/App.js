import React from 'react';
import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
    <Router>
      <Switch>
        <Route path="/chat/:animal">
          <Header backButton='/chat'/>
          <ChatScreen/>
        </Route>
        <Route path="/chat">
          <Header backButton='/'/>
          <Chats/>
        </Route>
        <Route path="/">
          <Header backButton='/'/>
          {/* mew card */}
          <TinderCards />
          {/* button */}
          <SwipeButton />
        </Route>
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
