import { Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import Introduction from './pages/Introduction';
import Members from './pages/Members';
import Documents from './pages/Documents';
import Activities from './pages/Activities';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Top />}></Route>
        <Route path='/introduction' element={<Introduction />}></Route>
        <Route path='/members' element={<Members />}></Route>
        <Route path='/documents' element={<Documents />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
      </Routes>
    </>
  );
}

export default App;
