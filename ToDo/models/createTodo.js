const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class ToDo {
  constructor(title) {
    this.title = title;
  }

  save() {
    console.log(this.title)
    fs.writeFile(p, JSON.stringify(this), err => {
        console.log(err);
    });
  }
}
