import './App.css';
import { Bottom, BottomSect, Footer, Main, Midsect, MidSectI, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div  className='bod'>
      <Navbar/>
      <Main/>
      <Midsect/>
      <MidSectI/>
      <BottomSect/>
      <Bottom/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
