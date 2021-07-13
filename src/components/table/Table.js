import nexgen from '../../Api/nexgenApi';
import { useEffect,useState } from 'react'
import { DATAA } from '../../data'
import styles from './table.module.css'
function Table({data}) {
  return (
  	data &&(
	    <div className={styles.table}>
	    	<table>
			  <tr>
			    <th>Employee name</th>
			    <th>Employee salary</th>
			    <th>Employee age</th>
			  </tr>
			  {
			  data.map((el) =>{
			  		return(
			  			<tr>
						  <td>{el.employee_name}</td>
						  <td>{el.employee_salary}</td>
						  <td>{el.employee_age}</td>
						</tr>
			  			)
			  })
			}
			</table>
	    </div>
	    )
  );
}

export default Table;
