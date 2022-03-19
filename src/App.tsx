import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main >
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="*" element={<NotFound/>}/>
           <Route path="/info/:countryname" element={<Details/>}/>
         </Routes>
        </Main>
      </BrowserRouter>
    </>
  )
}

export default App;
