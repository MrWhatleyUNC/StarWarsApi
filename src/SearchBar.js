import React from 'react'
import Filter from './Filter'
import ApiContext from './ApiContext'

export default class SearchBar extends React.Component{
    static contextType = ApiContext;
    
    render(){
        return (
            <form 
                className='searchbar'
                onSubmit={(e)=> this.context.queryApi(e)}
            >
                <Filter handleFilter={this.context.handleFilter}/>
                <label htmlFor='searchbar'>Search the Star Wars Universe:</label><br/>
                <input type='text' id='searchbar'placeholder='Enter a name from Star Wars'onChange={(e)=> this.context.handleSearchTerm(e)}/><br/>
                <button type="submit">Search</button>
            </form>
        )
    }
}