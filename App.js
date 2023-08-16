import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './Components/Content/ErrorPage';
import HomePage from './Components/Content/HomePage';
import Header from './Components/Header/Header';
import Capsules from './Components/Content/Capsules';
import Core from './Components/Content/Core';
import Dragon from './Components/Content/Dragon';





function App() {
  return (
    <Router>
      <Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='*' element={<ErrorPage/>}/>
  <Route path='/capsule' element={<Capsules/>}/>
  <Route path='/core' element={<Core/>}/>
  <Route path='/dragon' element={<Dragon/>}/>
  </Routes>        
    </Router>
  );
}

export default App;
