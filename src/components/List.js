import React,{useState} from 'react';
import styles from './List.module.css';
function List(props) {
  const [checked,setChecked]=useState(false);
  const checkStatus=()=>setChecked(!checked)
  const checkedStyle=checked?styles.checked:null;
  return (
  <li className={checkedStyle}><span onClick={checkStatus} className={styles.element1}>{props.children}</span><span className={styles.element2} onClick={props.click}>X</span></li>
  );
}

export default List;
