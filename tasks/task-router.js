const express = require("express")
const taskModel = require("./task-model")

const router = express.Router({
    mergeParams: true,
})

router.get('/', (req, res, next) => {
  try{
    const tasks = taskModel.getTasks()
    res.json(tasks);
  } catch(err) {
    next(err)
  };
});

router.get('/:id', (req, res, next) => {
    try{
      const task = taskModel.getTask()
      res.json(task);
    } catch(err) {
      next(err)
    };
  });

module.exports = router;