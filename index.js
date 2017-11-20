/**
*@author oni stephen (steveoni)
*cvstoJson synchronous parser
*for simple csv file;
**/


var fs = require("fs");

/**
 * @param file :csv file to be converted;
 * @param delimeter: specify the csv delimeter but default is semicolon";"
 * @returns data
 */
module.exports= function(file,delimeter=";"){

    var del = delimeter;
    var check = fs.existsSync(file);

    if(check===false) throw new "file not seen";

    var csv = fs.readFileSync(file).toString();

    var csv_split = csv.split("\n");
    var header = csv_split[0].split(del);

    //remove the first elment which is the header
    csv_split.shift();

    var data = [];//store the data

    for(var key in csv_split){
        var line = csv_split[key].split(del);

        var entry = {};//store the data and use the headr as property

        for(var i in line){
            entry[header[i].trim()] = line[i].trim();
        }
        data.push(entry);
    }
    return data;
};

