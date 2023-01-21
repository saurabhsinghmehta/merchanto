import './App.css';


import AllRoutes from './pages/AllRoutes';
import Footer from './Components/footer';
import Footerabout from './Components/footerabout';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Footerabout/>
      <Footer/>
    </div>
  );
}

export default App;
