import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ''
    }
  }
  onDismiss = (id) => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }
  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  render() {
    const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return (
      <div className="App">
        <form>
          <input type='text' onChange={this.onSearchChange}/>
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.autor}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <button onClick={() => this.onDismiss(item.objectID)} type='button'>
              Отбросить
            </button>
          </span>
        </div>)}
      </div>
    );
  }
}

export default App;
