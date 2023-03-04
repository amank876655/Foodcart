import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import CardDetails from './Components/CardDetails';
import {Routes,Route} from 'react-router-dom';
import Cards from './Components/Cards';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Cards/>} />
      <Route path = '/carts/:id' element = {<CardDetails/>} />
    </Routes>
    </>
  );
}

export default App;
