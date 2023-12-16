import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [data,setData] = useState([])
    const [records,setRecords] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
            setRecords(res.data)
        })
        .catch(err=>console.log(err))
    },[])

     const Filter = (e)=>{
        setRecords(data.filter(f=>f.name.toLowerCase().includes(e.target.value)))   
    }
  return (
    <div className='pt-20'>
<div className='w-full text-center'>
        <input type="text" className='outline-none w-1/2  p-3 border-2 border-blue-600 rounded-lg' placeholder='Search...' onChange={Filter} />

</div>
      <div className='shadow-lg border border-blue-600'>
    <table className='min-w-full text-left text-sm font-light'>
        <thead className='border-b font-medium dark:border-neutral-500'>
            <tr>
                <th scope='col' className='px-6 py-4'>ID</th>
                <th scope='col' className='px-6 py-4'>Name</th>
                <th scope='col' className='px-6 py-4'>Email</th>
                <th scope='col' className='px-6 py-4'>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                records.map((val,key)=>(
                    <tr key={key} className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>{val.id}</td>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>{val.name}</td>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>{val.email}</td>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>{val.phone}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
      </div>
    </div>
  )
}

export default SearchFilter
