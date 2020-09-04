import React from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import ApiContext from './ApiContext';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  state={
    results: [],
    loading: false,
    searchTerm: '',
    filter:'people'
  }

  handleSearchTerm = (e)=>{
    console.log(e.target.value)
    let searchTerm= e.target.value
    this.setState({searchTerm: searchTerm})
  }

  handleFilter = (e)=>{
    let filter =  e.target.value
    this.setState({filter})
  }

  queryApi =(e)=>{
    e.preventDefault()
    let baseURL=`https://swapi-thinkful.herokuapp.com/api/${this.state.filter}/?search=${this.state.searchTerm}`
    let options = {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    }
    console.log('url queried:',baseURL)
    this.setState({loading:true,
                   results:[]
    })
    fetch(baseURL,options)
    .then((res) => {
      if (!res.ok) {
        return res.json().then((r) => Promise.reject(r));
      }
      return res.json();
    })
    .then((searchResults)=>{
      if(searchResults.count>0){
        this.setState({
          results: searchResults.results,
          loading: false
        })
      }else {
        this.setState({
          results: 'No results were found.',
          loading: false
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    const value = {
      results: this.state.results,
      filter: this.state.filter,
      searchTerm: this.state.searchTerm,
      handleSearchTerm: this.handleSearchTerm,
      handleFilter: this.handleFilter,
      queryApi: this.queryApi
    }

    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
          <Header/>
          <ErrorBoundary>
            <SearchBar />
          </ErrorBoundary>
          <ResultsList/>
        </main>
      </ApiContext.Provider>
    );
  }
}

export default App;
