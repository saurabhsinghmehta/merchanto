import './App.css';


import AllRoutes from './pages/AllRoutes';
import Footer from './Component/footer';
import Footerabout from './Component/footerabout';

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
