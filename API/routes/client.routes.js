module.exports = app =>{
  const clients = require("../controllers/client.controller.js")

  app.post("/clients", clients.create )
  app.get("/clients", clients.findAll)
  app.get("/clients/:clientID", clients.findOne)
}
