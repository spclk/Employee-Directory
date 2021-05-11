import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
      <span class="table table-striped">
          {props.employees.map(item=> (
            <EmployeeListItem employee={item} key={item.phone}/>
          ))}
      </span>
    </>
  );
}

export default EmployeeList;
