const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Parse request of content-type: application/json
app.use(bodyParser.json());

//Parse request of content-type: application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: true}));

//simple route
app.get("/", (req,res) => {
        res.json({message:"Welcome to SLEY API"});
      });

require("./API/Coach/coach.routes.js")(app)
require("./API/Client/client.routes.js")(app)
require("./API/Partenaire/partenaire.routes.js")(app)
require("./API/Reser/reservation.routes.js")(app)
//set port, listen for requests
app.listen(3000, ()=> {
            console.log("server is running on port 3000");
        })
