import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
    <br/>
    <button className = "btn btn-dark"onClick={props.sortResults}>Sort by Last Name</button>
      <div className="table">
          {props.employees.map(item=> (
            <EmployeeListItem employee={item} key={item.phone}/>
          ))}
      </div>
    </>
  );
}

export default EmployeeList;
