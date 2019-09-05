const jayson = require('jayson');


// create a client
const client = jayson.client.http('http://server:3000');

// invoke "add"
client.request('getStudents', [], function(err, response) {
    if(err) throw err;

    console.log("Students:")
    for(let student of response.result){
        console.log(`${student.name.padEnd(25)} ${student.age}   id: ${student.id}`)
    }
});