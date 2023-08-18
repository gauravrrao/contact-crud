import './App.css';
import Contact from './component/Contact';
import { Routes,Route } from 'react-router-dom';
import ContactModel from './component/ContactModel';
import Edit from './component/Edit';
import Charts from './Charts';


function App() {
  return (
    <>
   
    <div className="maincontainer">
    <Routes>
      <Route path='/' element={<Contact/>}/>
      <Route path='/contactmodal' element={<ContactModel/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/charts' element={<Charts/>}/>

    </Routes>
    </div>
   
    </>
  );
}

export default App;
