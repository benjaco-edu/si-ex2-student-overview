Client is in client.js
and server is in server.js

the server is starting up an sqlite database when it starts, so no need to conect to an external database

the file for the new students is in the container as well

to get the list of students, start the server, and call client.js
put a - infront of the amount to withdraw

`docker run --rm --name studentserver bslcphbussiness/si-ex2-student-overview node server.js`

and

`docker run --rm --link studentserver:server bslcphbussiness/si-ex2-student-overview node client.js` in a new terminal

Example output

```
Students:
bo                        22   id: 1
andreas                   28   id: 2
hans                      21   id: 3
frederik,                 22   id: null
jens,                     44   id: null
```
