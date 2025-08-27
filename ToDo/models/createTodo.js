const db = require("../util/database");

module.exports = class ToDo {
  constructor(id, title, desc) {
    this.id = id;
    this.title = title;
    this.desc = desc;
  }

  save() {
    // fs.readFile(p, (err, fileContent) => {
    //     let todos = [];
    //     if(!err){
    //         todos = JSON.parse(fileContent);
    //     }
    //     todos.push(this);

    //     fs.writeFile(p, JSON.stringify(todos), err => {
    //         if(err) console.log(err)
    //     })
    // });
    return db.execute(
      "INSERT INTO todo (title, description) VALUES (?, ?)",
      [this.title, this.desc]
    );
  }

  static readTodos(cb) {
    // fs.readFile(p, (err, fileContent) => {
    //     if(err){
    //         return cb([]);
    //     }
    //     return cb(JSON.parse(fileContent));
    // });
    return db.execute("SELECT * FROM ToDo.todo");
  }
};
