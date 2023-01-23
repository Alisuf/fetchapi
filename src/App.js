import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [data, setData]= useState(null);
useEffect(()=>{  
fetch("https://reqres.in/api/users/2")
.then((resp)=>resp.json())
.then((resp)=>{
  setData(resp)
})
},[])
console.log(data)
  return (
    <>
    <div style={{marginTop:'2em', fontWeight:'bold'}}>
    Api Call:
    </div>
    <div>Id:{data.data.id}</div>
    <div>Email:{data.data.email}</div>
    <div>First Name:{data.data.first_name}</div>
    </>
  );
}

export default App;
