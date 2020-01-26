import React,{useState} from 'react';
import List from '../components/List';


function Lists() {
  const [items,setItems]=useState([]);
  const [value,setValue]=useState('');
  let arr=[...items];
  const submitHandler=event=>{
    event.preventDefault();
    arr.push(value);
    setItems(arr);
    setValue('');
  }
  const checkValue=val=>{
    arr=arr.filter(i=>i!==val);
    setItems(arr);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
      <input type='text' name='input' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <input type='submit' value='Add' style={{cursor:'pointer'}}/>
      </form>
      <section className='Lists'>
      {arr.length>0?arr.map((val,i)=><List key={i} click={()=>checkValue(val)}>{val}</List>):null}
      </section>
    </div>
  );
}

export default Lists;
