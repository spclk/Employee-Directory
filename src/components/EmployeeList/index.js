import EmployeeListItem from '../EmployeeListItem'

function EmployeeList(props) {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
          </tr>
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
