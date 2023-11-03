import React from 'react'

const Data = () => {
    const[data, setData] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [filteredData, setFilteredData] = React.useState([]);
    // PAGINATION===================================================================================================
    const [page, setPage] = React.useState(1);
  
    const fetchData= async ()=>{
      const datac = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      const json = await datac.json();
      setData(json.data);
      // console.log(data);
    }

    const handleSearch = (e)=>{
       setSearch(e.target.value);

       const newArr =  data.filter((dataP)=>{
           return dataP.employee_name.toLowerCase().includes(e.target.value.toLowerCase());
       })

       setFilteredData(newArr);
    }
    
    React.useEffect(()=>{
      fetchData();
    },[])
    
    return <div>
    <input onClick={handleSearch} /> <label>Search</label>
    {search === '' && data?.slice(page*5-5,page*5).map((item)=>{
         return <div key={item?.id}>
            <h1>{item?.employee_name}</h1>
          </div>
        })
    }
    {search !== '' && filteredData?.map((item)=>{
         return <div key={item?.id}>
            <h1>{item?.employee_name}</h1>
          </div>
        })
    }
    <div></div>
    </div>;
}

export default Data