const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./project/project-router")

const server = express()
const port = process.env.PORT || 8000

server.use(helmet())
server.use(express.json())
server.use("/api/projects", projectRouter)

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({
    message: "Something went wrong",
  })
})

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})