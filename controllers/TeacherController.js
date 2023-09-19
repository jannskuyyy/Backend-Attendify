import Teacher from "../models/TeacherModel.js";

export const getTeachers = async (req, res) => {
  try {
    const response = await Teacher.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const response = await Teacher.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTeacher = async (req, res) => {
  try {
    await Teacher.create(req.body);
    res.status(201).json({ message: "Teacher created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdateTeacher = async (req, res) => {
  try {
    await Teacher.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Teacher updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteTeacher = async (req, res) => {
  try {
    await Teacher.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Teacher deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
