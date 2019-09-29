import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login'
import NavBar from './components/NavBar'
// import Notification from './components/Notification';
import Registration from './components/Registration';
// import SeatAllocation from './components/SeatAllocation';
// import 'bootstrap/dist/css/bootstrap';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <NavBar/>
    <div className='rowjustify-content-center'>
      <div className='col-10'>
        <Route path='/' exact component={App} />       
        <Route path='/registration' exact component={Registration} />
        <Route path='/login' exact component={Login} />
      </div>
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
