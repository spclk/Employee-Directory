import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
    <br/>
    <button className = "btn btn-warning"onClick={props.sortResults}>Sort by Last Name</button>
      <span className="table table-striped">
          {props.employees.map(item=> (
            <EmployeeListItem employee={item} key={item.phone}/>
          ))}
      </span>
    </>
  );
}

export default EmployeeList;
