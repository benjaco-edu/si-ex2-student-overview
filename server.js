const jayson = require('jayson');
const Sqllite = require('./Sqlite');
const fs = require('fs');

(async ()=>{
    const db = new Sqllite(); // memory is the default in my
    await db.createDatabase();

    await db.query`
create table students
(
id      INTEGER PRIMARY KEY AUTOINCREMENT ,
name char(32),
age int
);
`;
    await db.query`insert into students (name, age) values ("bo", 22)`;
    await db.query`insert into students (name, age) values ("andreas", 28)`;
    await db.query`insert into students (name, age) values ("hans", 21)`;
    


    // create a server
    const server = jayson.server({
        getStudents: async function(args, callback) {
            let studentsFromDb = await db.query`select * from students`
            let studentsFromFile = fs.readFileSync("students.txt","utf8").toString();

            let response = [...studentsFromDb, ...studentsFromFile.split("\n").map(i => {
                let parts = i.split(" ")
                return {
                    id: null,
                    name: parts[0],
                    age: parts[1],
                }
            })]
          
            callback(null, response);
        }
    });
    
    server.http().listen(3000);


})()
