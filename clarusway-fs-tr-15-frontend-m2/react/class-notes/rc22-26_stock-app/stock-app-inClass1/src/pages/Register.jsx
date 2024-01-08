import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { object, string } from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import useAuthCalls from "../service/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  const dispatch = useDispatch();
  const registerSchema = object({
    username: string()
      .required("Lütfen Kullanici adinizi giriniz!")
      .min(4, "Kullanici adi en az 4 karakter içermelidir")
      .max(8, "Kullanici adi en fazla 8 karakter içermelidir"),
    first_name: string().required("Lütfen İsminizi Giriniz"),
    last_name: string().required("Lütfen Soyisminizi Giriniz"),
    email: string()
      .email("Lütfen geçerli bir email giriniz")
      .required("Email girişi zorunludur"),
    password: string()
      .required("Şifre zorunludur.")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .max(16, "Şifre en falza 16 karakter içermelidir")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir")
      .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
      ),
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
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.username && errors.username}
                    helperText={errors.username}
                  />
                  <TextField
                    label="First Name"
                    name="first_name"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.first_name && errors.first_name}
                    helperText={errors.first_name}
                  />
                  <TextField
                    label="Last Name"
                    name="last_name"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.last_name && errors.last_name}
                    helperText={errors.last_name}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
