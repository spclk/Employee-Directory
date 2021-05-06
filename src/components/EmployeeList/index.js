function EmployeeList(props) {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        {props.employees[0].name.first}  
        </tbody>
      </table>
    </>
  );
}

export default EmployeeList;
