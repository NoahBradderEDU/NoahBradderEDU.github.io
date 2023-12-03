// Problem 1: Create JSON for each employee
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

// Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

// Problem 3: A new employee has joined the company
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

// Display the updated company JSON
console.log("Updated Company JSON:", company);

// Problem 4: Calculate the total salary for all company employees
const totalSalary = company.employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log("Total Salary for all employees:", totalSalary);

// Problem 5: Raise time - Update salary for raise-eligible employees and set eligibility to false
function giveRaiseAndUpdateEligibility(employee) {
    if (employee.raiseEligible) {
        employee.salary *= 1.1; // Increase salary by 10%
        employee.raiseEligible = false; // Set eligibility to false
    }
}

// Apply raise to each employee in the company
company.employees.forEach(giveRaiseAndUpdateEligibility);

// Display the updated company JSON after the raise
console.log("Company JSON after the raise:", company);