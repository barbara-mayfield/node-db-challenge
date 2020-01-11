const express = require("express")
const projectModel = require("./project-model")

const router = express.Router()

router.get('/', (req, res) => {
    projectModel.getProjects()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
});
  
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    projectModel.getProject(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });
  
  router.get('/steps/:id', (req, res) => {
    const { id } = req.params;
  
    projectModel.getSteps(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });
  
  router.post('/', (req, res) => {
    const projectData = req.body;
  
    projectModel.addProject(projectData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
  });
  
  router.post('/:id/steps', (req, res) => {
    const stepData = req.body;
    const { id } = req.params; 
  
    projectModel.addSteps(id)
    .then(scheme => {
      if (scheme) {
        Schemes.addStep(stepData, id)
        .then(step => {
          res.status(201).json(step);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new step' });
    });
  });

module.exports = router;