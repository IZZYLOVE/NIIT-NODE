 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
//    getEmployee = (employees,callback)=> {
//        setTimeout(() => {        
//            // Write code here to display the name of the employee and return a callback        
//            return callback();           
//        });
//    }

    getEmployee =  (employees,callback)=> {
        let index = 0;
        const employeeNames = [];

        function displayNextEmployee() {
        if (index < employees.length) {
            const employee = employees[index];
            employeeNames.push(employee.name);
            // console.log(employee.name);
            index++;
            setTimeout(displayNextEmployee, 1000); // Display the next employee after 1 second
        } else {
            callback(null, employeeNames); // Call the provided callback with the employee names array
        }
        }

        displayNextEmployee(); // Start displaying employees
    }
   
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.

    //    createEmployee = (employees,employee, callback) => {   
    //        setTimeout(()=>
    //        {
    //            // write your code here to push new employee to employees list and return a callback.           
    //            return callback();
    //        })
    //    }  


    createEmployee = (employees,employee, callback) => {   
        setTimeout(() => {
            employees.push(employee); // Push the new employee to the employees list
            callback(null, employees); // Call the provided callback with the updated employees list
        }, 2000); // Wait for 2 seconds before adding the employee
    }

   module.exports = {getEmployee,createEmployee}
  


