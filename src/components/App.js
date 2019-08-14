  //import React from 'react';
  import React from 'react'
  import {BrowserRouter, Route} from 'react-router-dom'
  import Menu from './Menu';
  import Record from './records/Record';
  const App = () =>(
    <BrowserRouter>
      <Menu/>
      <Route exact path='/log' component={Record} />
    </BrowserRouter>
  )

  export default App;
