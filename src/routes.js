const express = require("express");
const routes = express.Router()
const views = __dirname + "/views/"

const profile = {
  name: "Andre",
  avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQFnpnucPXdWrQ/profile-displayphoto-shrink_200_200/0/1594504957100?e=1626307200&v=beta&t=8h85e3Ff1BUv3qyR0bASE2ZnzCZT3VRmwJlfBEV8eys",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get("/", (req, res) => res.render(views + "index"))
routes.get("/job", (req, res) => res.render(views + "job"))
routes.get("/job/edit", (req, res) => res.render(views + "job-edit"))
routes.get("/profile", (req, res) => res.render(views + "profile", {profile}))

module.exports = routes;