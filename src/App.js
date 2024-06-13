import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Users from './routes/users';
import Home from './routes/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Beams from './routes/beams';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column vh-100'>
        <Navbar/>
        <main className='flex-grow-1'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="users/*" element={<Users />}/>
            <Route path="beams/*" element={<Beams />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
