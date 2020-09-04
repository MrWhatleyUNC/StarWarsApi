import React from 'react'
import ApiContext from './ApiContext'

export default class ResultsList extends React.Component{
    static contextType= ApiContext

    render(){
        if(this.context.loading){
            return (
                <section className='results container'>
                    <strong>Searching the Star Wars Universe</strong>
                </section> 
            )
        }else{
            const results= this.context.results
            console.log(results)
            return(
                <section className='results container'>
                    <ul>
                        {results.map((result)=>(
                            <li>
                                {result.name}
                            </li>
                        ))}
                    </ul>
                </section>
            )
        }
    }
}