import { Routes, Route } from 'react-router-dom';

import Introduction from './routes/introduction/introduction.component'

function App() {
  return (
    <Routes>
      <Route path='/' element = { < Introduction/>}/>
    </Routes>
  );
}

export default App;
