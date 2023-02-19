
import './App.css';
import { Cources } from './templates/cources/Cources';
import { Cources2 } from './templates/cources2/Cources2';
import { Footer } from './templates/Footer/Footer';

import { Navbar1 } from './templates/Vediobackgound/vido';
function App() {
  return (
    <div className="App">
       
        <Navbar1/>
        <Cources/>
        <Cources2/>
        <Footer/>
        
      
        
      
    </div>
  );
}

export default App;
