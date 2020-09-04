import React from 'react'
import ApiContext from './ApiContext'

export default class Result extends React.Component{
    static contextType= ApiContext

    render(){
        const results= this.context.results
        return(
           <ul>
               {results.map}
           </ul>
        )
    }
}