import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import TextField from "@mui/material/TextField";
import  useAuthCalls  from "../service/useAuthCalls";
import { convertLength } from "@mui/material/styles/cssUtils";

const Register = () => {
  const { register } = useAuthCalls();
  const registerSchema = object({
    username: string().required("Lütfen kulanici adiniz girniz"),
    firstName: string().required(),
    lastName: string().required(),
    email: string().required(),
    password: string().required(),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values)
              console.log(values)
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="User Name"
                    name="username"
                    id="userName"
                    type="text"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    error={touched.username && errors.username}
                    helperText={errors.username}
                  />
                  <TextField
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    error={touched.firstName && errors.firstName}
                    helperText={errors.firstName}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    error={touched.lastName && errors.lastName}
                    helperText={errors.lastName}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    helperText={errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                    helperText={errors.password}
                  />
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
