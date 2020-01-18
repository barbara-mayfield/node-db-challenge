const express = require("express")
const projectModel = require("./project-model")
const taskRouter = require("../tasks/task-router")
const resourceRouter = require("../resources/resource-router")

const router = express.Router()

router.use('/tasks', taskRouter)
router.use('/resources/:id', resourceRouter)

router.get('/', async (req, res, next) => {
  try{
    const projects = await projectModel.getProjects()
    res.json(projects);
  } catch(err) {
    next(err)
  };
});

router.get('/:id', async(req, res, next) => {
    try {
        const { id } = req.params
        const project = await projectModel.getProject(id)
        res.json(project)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
      const newProject = await projectModel.addProject(req.body)
      res.status(201).json(newProject)
    } catch(err) {
      next(err)
    }
  })

module.exports = router;