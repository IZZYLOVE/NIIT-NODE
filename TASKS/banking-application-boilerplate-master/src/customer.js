var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      let isUser = false
      for (let i = 0; i <= (customerList.length - 1); i++) { 
            if(customerList[i][0] === CustomerId || customerList[i][1] === CustomerName){ 
                  isUser = true
                  break;
            }
      }

      if(isUser === false){
            // const newCustomer = { "Id": CustomerId, "Name": CustomerName, "Age": CustomerAge, "Address": CustomerAddress, "Contact No.": CustomerContactNumber, "Category": Category };    
            // customerList.push(newCustomer); 

            const newCustomer = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category ];    
            customerList.push(newCustomer); 

      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      for (let i = 0; i <= (customerList.length - 1); i++) { 
            if(customerList[i][0] === CustomerId){ 
            customerList[i] = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category ];
            }
      
      }
}



const getAllCustomers=()=>{
  // Write the Logic here
  return (customerList)
}

module.exports={addCustomer,updateCustomer,getAllCustomers}