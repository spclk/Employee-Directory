import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
      <table class="table table-striped">
        <thead>
        </thead>
        <tbody>
          {props.employees.map(item=> (
            <EmployeeListItem employee={item} key={item.phone}/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeList;
