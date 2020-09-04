import React from 'react'
 
export default React.createContext({
    results: [],
    filter:'',
    searchTerm:'',
    search: ()=>{},
    handleFilter: ()=>{},
    queryApi: ()=>{}
})