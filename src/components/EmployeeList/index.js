import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
    <button className = "btn btn-primary"onClick={props.sortResults}>Sort by Last Name</button>
      <span className="table table-striped">
          {props.employees.map(item=> (
            <EmployeeListItem employee={item} key={item.phone}/>
          ))}
      </span>
    </>
  );
}

export default EmployeeList;
