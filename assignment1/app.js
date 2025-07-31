const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Index</title></head>");
    res.write(
      "<body><h1>Home Page</h1> <p>This is my first node.js page</p> <form method='POST' action='/message'><input name='username' placeholder='Enter username...'/> <button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(
      "<body><h1>Users Page</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if(url === "message" && method === "POST"){
        
  }

});

server.listen(3000);
