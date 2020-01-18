const express = require("express")
const resourceModel = require("./resource-model")

const router = express.Router({
    mergeParams: true,
})

router.get('/', (req, res, next) => {
  try{
    const resource = resourceModel.getResource()
    res.json(tasks);
  } catch(err) {
    next(err)
  };
});

module.exports = router;