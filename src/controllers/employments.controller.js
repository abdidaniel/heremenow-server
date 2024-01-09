import Employment from '../models/Employment.js';

export const createEmployment = async (req, res) => {
  try {
    const { title, company, salary, location, description, aboutCompany, numberOfEmployees } = req.body;

    // Validación de datos
    if (!title || !company || !salary || !location || !description || !aboutCompany || !numberOfEmployees) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const newEmployment = new Employment({
      title,
      company,
      salary,
      location,
      description,
      aboutCompany,
      numberOfEmployees,
    });
    const savedEmployment = await newEmployment.save();
    res.status(201).json(savedEmployment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el empleo.' });
  }
};

export const getEmployments = async (req, res) => {
  const employments = await Employment.find();
  res.json(employments);
};

export const getEmploymentByID = async (req, res) => {
  const employment = await Employment.findById(req.params.employmentId);
  res.status(200).json(employment);
};

export const updateEmploymentByID = async (req, res) => {
  const updatedEmployment = await Employment.findByIdAndUpdate(req.params.employmentId, req.body, {
    new: true,
  });
  res.status(200).json(updatedEmployment);
};

export const deleteEmploymentByID = async (req, res) => {
  const { employmentId } = req.params;
  await Employment.findByIdAndDelete(employmentId);
  res.status(204).json();
};


