import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar'
import EmployeeList from './components/EmployeeList'
import EmployeeListItem from './components/EmployeeListItem'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
    .then(response => {
      console.log(response);
      this.setState({employees: response.data.results})
    })
  }

  // componentDidUpdate() 

  render(){
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <EmployeeList employees = {this.state.employees}/>
      <EmployeeListItem />
    </div>
  );
}
}

export default App;
