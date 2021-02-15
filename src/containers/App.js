import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tachyons';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ cats: users }) })
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { cats, searchField } = this.state
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (!cats.length) ?
      <h1>Loading</h1> :
      (
        <div className="tc" >
          <h1 className='f1'>Catfriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList cats={filteredCats} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
