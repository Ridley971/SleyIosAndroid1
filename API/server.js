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

require("./routes/coach.routes.js")(app)
require("./routes/client.routes.js")(app)
require("./routes/partenaire.routes.js")(app)
require("./routes/reservation.routes.js")(app)
//set port, listen for requests
app.listen(3000, ()=> {
            console.log("server is running on port 3000");
        })
