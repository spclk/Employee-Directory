import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar'
import EmployeeList from './components/EmployeeList'

import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    employees: [],
    filtered: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
      console.log(response);
      this.setState({employees: response.data.results, filtered: response.data.results})
    })
  }
  
  sortResults=()=>{
    const sortedEmployees = this.state.filtered
    sortedEmployees.sort(function(a, b){
      if(a.name.last < b.name.last) { return -1; }
      if(a.name.last > b.name.last) { return 1; }
      return 0;
  })
  this.setState({filtered: sortedEmployees})
  }

  // componentDidUpdate() 

  render(){
  return (
    <div className="App">
      <Header />
      <button onClick={this.sortResults}>Search by Name</button>
      <SearchBar />
      <EmployeeList employees = {this.state.filtered}/>
    </div>
  );
}
}

export default App;
