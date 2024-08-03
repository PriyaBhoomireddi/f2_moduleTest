let employees = [];
let nextId = 1;

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const messageElement = document.getElementById('message');
    
    if (!name || !profession || !age) {
        messageElement.textContent = 'Error: Please make sure all fields are filled before adding an employee!';
        messageElement.className = 'error';
        return;
    }

    const employee = {
        id: nextId++,
        name: name,
        profession: profession,
        age: parseInt(age, 10)
    };

    employees.push(employee);
    displayEmployees();
    
    messageElement.textContent = 'Success: Employee added!';
    messageElement.className = 'success';
    document.getElementById('employeeForm').reset();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    if (employees.length === 0) {
        employeeList.innerHTML = 'You have 0 employees.';
        return;
    }
    let employeeNumber = 1;
    employeeList.innerHTML = employees.map(employee => {
        const html = `<div class="detailsBox">
            <div class="employee-box" id="employee-${employee.id}">
                <span>${employeeNumber}. </span>
                <div class="employee-details">
                    <span>Name: ${employee.name}</span>
                    <span>Profession: ${employee.profession}</span>
                    <span>Age: ${employee.age}</span>
                </div>
            </div>
            <div class="deleteButton">
                <button onclick="deleteEmployee(${employee.id})">Delete User</button>
            </div>
        </div>`;
        employeeNumber++;
        return html;
    }).join('');
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
