module.exports = app =>{
  const coachs = require("../controllers/coach.controller.js")

  app.post("/coachs", coachs.create )
  app.get("/coachs", coachs.findAll)
  app.get("/coachs/:coachID", coachs.findOne)
}
