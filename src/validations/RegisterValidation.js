export default function RegisterValidation(values) {
  let errors = {}
  if (!values.user_name) {
    errors.user_name = "User name is required"
  }
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters"
  }
  if (!values.repeate_password) {
    errors.repeate_password = "Repeate password is required"
  } else if (values.repeate_password !== values.password) {
    console.log("PASSWORD", values.password)
    console.log("REPEATE PASSWORD", values.repeate_password)

    errors.repeate_password = "Password is not matched"
  }

  return errors
}
