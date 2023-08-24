// const { v4: uuidv4 } = require("uuid");

// /* 
//   saveOrder should be a function that calls the save() function on Orders Model 
//   to persist order data in MongoDB Orders collection of shoppingcartDB
// */
// const saveOrder = null;


// /* 
//   findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
//   to fetch all documents from Orders collection of shoppingcartDB,
//   containing data of Orders for a given UserId
// */
// const findOrdersPlacedByUser = null;


// module.exports = {
//   saveOrder,
//   findOrdersPlacedByUser
// }

const OrdersModel = require('./orders.entity');

const saveOrder = async (orderData) => {
  const order = new OrdersModel(orderData);
  return order.save();
};

const findOrdersPlacedByUser = (userId) => {
  return OrdersModel.find({ userId }).exec();
};

module.exports = {
  saveOrder,
  findOrdersPlacedByUser
};

