## csvtoJsonsync

Convert a simple csv file to json synchronously. it require two parameter: the csv filename and the delimeter for the file the default is ";"
```
var csvtoJsonSync = require("csvtoJsonSync");

var csv = csvtoJsonSync("file.csv");// default 2nd parameter ";"

console.log(csv);//[{...}]
```