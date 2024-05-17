import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'
import Cheesa from './Pages/Cheesa';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Cheesa/>}/>
    </Routes>
  );
}

export default App;
