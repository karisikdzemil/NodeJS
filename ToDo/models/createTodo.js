const { error } = require("console");
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class ToDo {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
        let todos = [];
        if(!err){
            todos = JSON.parse(fileContent);
        }
        todos.push(this);

        fs.writeFile(p, JSON.stringify(todos), err => {
            if(err) console.log(err)
        })
    });
  }

  static readTodos(cb) {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        }
        return cb(JSON.parse(fileContent));
    })
  }
}
