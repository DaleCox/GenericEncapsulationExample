#Sample Code
This is sample code used to illustrate points in  Implementing Web API Architecture in Node.JS with Express

##To Run
This code example is Express.js middleware which requires Node.js to be installed

To run the code execute the following command
```
node ./bin/www
```

## Authentication Filter Examples
http://localhost:3000 returns 403 - A Token must be submitted

Pass in token 1 – 5 and a 200 is returned and if you look at the logs the tokens have been decoded to identities
http://localhost:3000?identity-token=3

http://localhost:3000?identity-token=99 returns a 403 noting an Invalid Token 

##Authorization Filter Examples
http://localhost:3000/matrix?identity-token=5

http://localhost:3000/zion/mainframe?identity-token=3 returns a 200
http://localhost:3000/zion/mainframe?identity-token=2 returns a 401

##Action Filter Examples
http://localhost:3000?identity-token=1 see identity resolved to Neo then open http://localhost:3000/zion?identity-token=1 Changes the name of Neo to The_One