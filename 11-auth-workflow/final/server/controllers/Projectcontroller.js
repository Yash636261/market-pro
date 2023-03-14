

const createProject=async (req, res) => {
    try {
      const { projectname, description, howTOSetup, DOCXUrl, price, isVerfied, createdBy } = req.body;
      const project = new Project({ projectname, description, DOCXUrl, price, howTOSetup, isVerfied, createdBy });
      await project.save();
      res.status(201).send({ message: 'Project created successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Internal server error' });
    }
  }


  
module.exports={createProject};
