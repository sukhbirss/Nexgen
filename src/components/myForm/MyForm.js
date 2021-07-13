import styles from './myform.module.css';
import { useEffect,useState } from 'react'

function MyForm(props) {
	const [employee_name, setEmployee_name] = useState('');
	const [employee_salary, setEmployee_salary] = useState('');
	const [employee_age, setEmployee_age] = useState('');
	const [profile_image, setProfile_image] = useState('');

	const addThisWord = (name,salary,age,image) => {
      if(employee_name && employee_salary && employee_age){
        const newfields = {employee_name:name,employee_salary:salary,employee_age:age,profile_image:""}
        const newData = [...props.data,newfields]
        localStorage.setItem('data', JSON.stringify(newData));
        props.setData(newData)
      }
	}


  return (
    <div className={styles.wrapper}>
      <h1 style={{margin:'0px'}}>welcome</h1>
      <p>sukhbir's assignemt for Nexgen</p>
      <div className={styles.container}>
        	<input placeholder="  employee_name" value={employee_name} onChange={(e)=>setEmployee_name(e.target.value)} required/>
      		<input placeholder="  employee_salary" value={employee_salary} onChange={(e)=>setEmployee_salary(e.target.value)} required/>
      		<input placeholder="  employee_age " value={employee_age} onChange={(e)=>setEmployee_age(e.target.value)} required/>
      		<input placeholder="  profile_image URl" value={profile_image} onChange={(e)=>setProfile_image(e.target.value)}/>
    	  	<button type="submit" onClick={()=>addThisWord(employee_name,employee_salary,employee_age,profile_image)}>Add</button>
      </div>
    </div>
  );
}

export default MyForm;
