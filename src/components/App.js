  //import React from 'react';
  import React from 'react'
  import {BrowserRouter, Route} from 'react-router-dom'
  import Menu from './Menu';
  import Header from './Header';
  import Devices from './Devices';
  import Record from './records/Record';
  import Dashboard from './dashboards/Dashboard';
  import Home from './dashboards/Home';
  const App = () =>(
    <BrowserRouter>
      <Header/>
      <Menu/>
      <Route exact path='/log' component={Record} />
      <Route exact path='/charts' component={Dashboard} />
      <Route exact path='/' component={Home} />
      <Route exact path='/devices' component={Devices} />
    </BrowserRouter>
  )

  export default App;
