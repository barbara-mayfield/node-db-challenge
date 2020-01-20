const express = require("express")
const projectModel = require("./project-model")
const taskModel = require("./task-model")
const resourceModel = require("./resource-model")

const router = express.Router()

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

router.get('/:id/tasks', async(req, res, next) => {
    try{
        const { id } = req.params
        const tasks = await taskModel.getTasks(id)
        res.json(tasks);
      } catch(err) {
        next(err)
      };
});
  
router.post("/:id/tasks", async (req, res, next) => {
    try {
        const { id } = req.params
        const newTask = await taskModel.addTask(req.body)
        res.status(201).json(newTask)
    } catch(err) {
        next(err)
      }
    })

router.get('/:id/resources', async(req, res, next) => {
    try{
        const { id } = req.params
        const resources = await resourceModel.getResources(id)
        res.json(resources);
      } catch(err) {
        next(err)
      };
});
      
router.post("/:id/resources", async (req, res, next) => {
  try {
    const newResource = await resourceModel.addResource(req.body)
    res.status(201).json(newResource)
  } catch(err) {
    next(err)
  }
})

module.exports = router;