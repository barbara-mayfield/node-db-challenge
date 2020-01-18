const express = require("express")
const projectModel = require("./project-model")
const taskRouter = require("../tasks/task-router")
const resourceRouter = require("../resources/resource-router")

const router = express.Router()

router.use('/tasks', taskRouter)
router.use('/resources/:id', resourceRouter)

router.get('/', (req, res, next) => {
  try{
    projectModel.getProjects()
    res.json(project);
  } catch(err) {
    next(err)
  };
});

module.exports = router;