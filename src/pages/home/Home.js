import styles from './home.module.css';
import { useEffect,useState } from 'react'
import searchIcon from './search.svg'

//components
import Table from '../../components/table/Table'
import MyForm from '../../components/myForm/MyForm'

//this is to get data from the api
import nexgen from '../../Api/nexgenApi';

function Home() {
	const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
	const [searchData, setSearchData] = useState(JSON.parse(localStorage.getItem("data")))

	useEffect(() => {
		if(!JSON.parse(localStorage.getItem("data"))){
				nexgen.get("/deb1fcca441912d3541c").then((res) =>{
		 	    setData(res.data.data)
		 	    setSearchData(res.data.data)
		 	})
			}
	}, [])

	const searchFunc = (event) =>{
	     let obj = searchData.filter((o) => o.employee_name.toLowerCase().includes(event.target.value));
	     if(obj){ setData(obj) }
	}

  return (
    <div className={styles.wrapper}>
    	<MyForm setData={setData} data={data} />
    	<div>
	    	<input  onChange={(e)=> searchFunc(e)} className={styles.search} placeholder="Search for employee_name in here"/>
	    	<Table data={data} />
	    </div>
    </div>
  );
}

export default Home;
