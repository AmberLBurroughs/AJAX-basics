var employeesRequest = new XMLHttpRequest();
employeesRequest.onreadystatechange = function () {
  if(employeesRequest.readyState === 4) {
    var employees = Json.parse(employeesRequest.responseText);
    var statusHTML = '<ul class="bulleted">';
    for(var obj = 0; obj < employees.length; obj++) {
      if(employees[obj].inoffice === true) {
        statusHTML += '<li class="in">';
      }else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[obj].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

employeesRequest.open('GET', 'data/employees.json');
employeesRequest.send();
