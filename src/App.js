import './App.css';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    employees: [],
    filtered: [],
    search: ""
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=15')
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

  searchEmployees = name => {
    const employees = this.state.filtered.filter(oneEmployee => oneEmployee.name);
    this.setState({ employees });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
  });
}
  handleFormSubmit = event => {
    event.preventDefault();
    const employees = this.state.employees.filter(oneEmployee => {
      return oneEmployee.name.last.toUpperCase() === this.state.search.toUpperCase()
      || oneEmployee.name.first.toUpperCase() === this.state.search.toUpperCase()
    });
    this.setState({ filtered: employees });
  };

  render(){
  return (
    <div className="App">
      <Navbar employees = {this.state.filtered} searchEmployees = {this.searchEmployees} 
      handleInputChange ={this.handleInputChange} handleFormSubmit = {this.handleFormSubmit}/>
      <EmployeeList employees = {this.state.filtered} sortResults = {this.sortResults}/>
    </div>
    );
  };
}

export default App;
