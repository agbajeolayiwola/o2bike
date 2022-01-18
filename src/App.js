import './App.css';
import { Bottom, BottomSect, Footer, Main, Midsect, MidSectI, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div  className='bod'>
      <Navbar/>
      <Main/>
      </div>
      <Midsect/>
      <MidSectI/>
      <BottomSect/>
      <Bottom/>
      
      <Footer/>
    </div>
  );
}

export default App;
