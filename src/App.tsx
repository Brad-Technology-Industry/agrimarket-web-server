/* eslint-disable prettier/prettier */
import './App.css';
import Footer from './component/footer/footer';
import HeroSection from './component/hero/hero';
import Navbar from './component/navbar/navbar';

function App() {
   return (
      <>
         <Navbar />

         <HeroSection />

         <Footer />
         <div className="App">
            <header className="App-header">
               {/* <img src={logo} className="App-logo" alt="logo" /> */}
               <p>
                  Edit <code>src/App.tsx</code> and save to reload.
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </header>
         </div>
      </>
   );
}

export default App;
