const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body><h1>Home Page</h1> <p>Welcome to my Home Page</p> <form action='/create-user' method='POST'><input name='username' placeholder='Enter username...'/> <button type='submit'>Enter</button> </form> <a href='/users'>users page</a></body>")
        res.write("</html>");
        return res.end();
    }
    if(url === "/users"){
         res.write("<html>");
        res.write("<head><title>Users</title></head>");
        res.write("<body><h1>Users Page</h1> <p>Welcome to my Users Page</p> <ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>")
        res.write("</html>");
        return res.end();
    }

    if(url === "/create-user" && method === "POST"){
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedData = Buffer.concat(body).toString();
            const data = parsedData.split("=")[1];
            console.log(data)

            res.write("<html>");
            res.write("<head><title>Create User</title></head>");
            res.write("<body><h1>Create User Page</h1></body>")
            res.write("</html>");
            return res.end();
        })

    }

});

server.listen(3000);