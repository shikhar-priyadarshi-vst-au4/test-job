import React, {useState} from 'react';
import Form from './components/Form/index';
function App() {
  const [state, setstate] = useState('register')
  return (
    <div >
      <header style={{display : 'flex', margin : "2em"}}>
        <div onClick={()=>setstate('register')} style={{margin : "0em 2em", cursor : "pointer"}}>Register User</div>
        <div onClick={()=>setstate('login')} style={{cursor : "pointer"}}>Login</div>
      </header>
      <div style={{display : 'flex', justifyContent : 'center'}}>
      <Form state={state}/>
      </div>
    </div>
  );
}

export default App;
