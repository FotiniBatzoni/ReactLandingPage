import { Routes, Route } from 'react-router-dom';

import Introduction from './routes/introduction/introduction.component'

function App() {
  return (
    <Routes>
      <Route path='/' element = { < Introduction/>}/>
      {/* <Route path='/'  element={<Navigation/>}>
        <Route index element= { <Home />}/>
        <Route path='/sign-up/volunteers' element = { <SignUpV/>}/>
        <Route path='/sign-up/ngo' element = { <SignUpN/>}/>
      </Route> */}
    </Routes>
  );
}

export default App;
