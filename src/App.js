import { useEffect, useState} from 'react';
import './App.css';

function App() {
const [data, setData]= useState(null);
const [number,setNumber] = useState();
useEffect(()=>{  
fetch(`https://reqres.in/api/users/${number}`)
.then((resp)=>resp.json())
.then((resp)=>{
  setData(resp)
})
setNumber(number)
},[number])

useEffect(()=>{
setData(data)
},[data])
console.log(data)
console.log(number)
  return (
    <>
    <div style={{marginTop:'2em', fontWeight:'bold'}}>
    Api Call:
    </div>
     <div>
    <input  placeholder={"Search By Id"} onChange={(e)=>{setNumber(e.target.value)}}  type={'number'} value={number} id="id" required={true}/>
    {/* <button type={"submit"} onClick={(()=>setNumber(number))}>Search</button> */}
    </div>
   {data ? <div>Id:{data?.data?.id}</div>:null}
    <div>Email:{data?.data?.email}</div>
    <div>First Name:{data?.data?.first_name}</div>
    <div>last Name:{data?.data?.last_name}</div>

    </>
  );
}

export default App;
