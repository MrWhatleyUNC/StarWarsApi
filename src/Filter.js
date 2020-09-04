import React from 'react'
import ApiContext from './ApiContext'

export default class Filter extends React.Component{
    static contextType= ApiContext
    
    render(){
        return(
            <fieldset>
                <legend>Search For</legend>
                <label htmlFor='people'>Characters:
                    <input type='radio' id='people' value='people' name='filter' onChange={(e)=>this.context.handleFilter(e)} required/>
                </label>
                <label htmlFor='films'>Films:
                    <input type='radio' id='films' value='films' name='filter' onChange={(e)=>this.context.handleFilter(e)}/>
                </label>
                <label htmlFor='species'>Species:
                    <input type='radio' id='species' value='species' name='filter' onChange={(e)=>this.context.handleFilter(e)}/>
                </label>
                <label htmlFor='planets'>Planets:
                    <input type='radio' id='planets' value='planets' name='filter' onChange={(e)=>this.context.handleFilter(e)}/>
                </label>
                <label htmlFor='starships'>Starships:
                    <input type='radio' id='starships' value='starships' name='filter' onChange={(e)=>this.context.handleFilter(e)}/>
                </label>
                <label htmlFor='vehicles'>Vehicles:
                    <input type='radio' id='vehicles' value='vehicles' name='filter' onChange={(e)=>this.context.handleFilter(e)}/>
                </label>
            </fieldset>
        )
    }
}