import React from 'react';
import { Provider } from 'react-redux';
import store, {history} from './store';
import { Router, Route, Switch } from 'react-router-dom';

import './sass/main.scss';

import Events from './components/Events';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import createEventForm from './components/CreateEventForm';

function App() {
  return (
    <Provider store={ store }>
       
       <Router history={history}>
       <div className="App">
         <Header />
           <div className="Content">
             <Switch>
               <Route exact path="/" component= { Events } />
               <Route exact path="/signup" component= { Signup } />
               <Route exact path="/login" component= {Login} />
               <Route exact path="/createEvent" component= {createEventForm} />
               <Route render={() => (<div className='pageNotFound'>Oops, the page you were looking for could not be found.</div>)} />
             </Switch>
           </div>
         </div>
      </Router>
    </Provider>
  );
}

export default App;
