const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds

// getAllTodos = () => {
//     return new Promise((resolve,reject)=>{
        
//         }) 
    
// }


getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (todolist && Array.isArray(todolist)) {
              resolve(todolist); // Resolve the promise with the todolist array
            } else {
              reject('Todolist is not available'); // Reject the promise if todolist is not available or not an array
            }
        }, 2000); // Simulate a delay of 2 seconds 
    }) 
    
}

// Define a function to add a todo to the todolist array
createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        if (todo) {
          // Assuming you have a global or accessible todolist array
          todolist.push(todo); // Add the new todo to the todolist array
          resolve(todolist); // Resolve the promise with the updated todolist
        } else {
          reject('No data to be added'); // Reject the promise if no todo data is provided
        }
    });
};
module.exports ={
    createTodo,getAllTodos
}