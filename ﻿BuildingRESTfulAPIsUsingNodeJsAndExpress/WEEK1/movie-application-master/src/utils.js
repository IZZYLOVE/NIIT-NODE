getRequestData = (req) => {
  return new Promise((resolve, reject) => {
    let requestData = '';
    req.on('data', (chunk) => {
      requestData += chunk.toString();
    });
    req.on('end', () => {
      resolve(requestData);
    });
  });
};

module.exports = getRequestData;
