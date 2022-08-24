const yup = require("yup");

const validationSchema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  password: yup.string().trim().required(),
  gender: yup.boolean()
});

module.exports = async (req, res, next) => {
  try {
    req.body = await validationSchema.validate(req.body);
    next();
  } catch (error) {
    res.send(error.message);
  }
};