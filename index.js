const { createServer } = require("http");

createServer((req, res) => {
  res.write("hi");
  res.end();
}).listen(3000);
