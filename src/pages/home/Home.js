import styles from './home.module.css';
import nexgen from '../../Api/nexgenApi';
import { useEffect,useState } from 'react'
import { DATAA } from '../../data'
import Table from '../../components/table/Table'
import MyForm from '../../components/myForm/MyForm'
import searchIcon from './search.svg'

function Home() {
	const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
	useEffect(() => {
	
	if(JSON.parse(localStorage.getItem("data"))){
		setData(JSON.parse(localStorage.getItem("data")))
	}
	else{
		nexgen.get("/deb1fcca441912d3541c").then((res) =>{
 	    setData(res.data.data)})
		// setData(DATAA)
	}
	}, [])

	const searchFunc = (value) =>{
	     let obj = data.filter((o) => o.employee_name.toLowerCase().includes(value));
	     if(obj){ setData(obj) }
	     if(value === ""){ setData(DATAA) }
	}

  return (
    <div className={styles.wrapper}>
    	<MyForm setData={setData} data={data} />
    	<div>
	    	<input  onChange={(e)=> searchFunc(e.target.value)} className={styles.search} placeholder="Search for employee_name in here"/>
	    	<Table data={data} />
	    </div>
    </div>
  );
}

export default Home;
