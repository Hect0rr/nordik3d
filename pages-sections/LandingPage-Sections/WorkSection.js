import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nxxvafs",
        "template_3ivuatz",
        form.current,
        "pF6cJq8J8HDnmuEm5"
      )
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div id="votre_design" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Votre design</h2>
          <h4 className={classes.description}>
            Envoyez nous un fichier au format stl et nous vous réponderons avec
            un estimé des coûts dans les prochaines 24h.
          </h4>
          <form ref={form} onSubmit={sendEmail}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre nom"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    (formik.touched.email && formik.errors.email && (
                      <span>{formik.errors.email}</span>
                    )) || <span>Email</span>
                  }
                  id="email"
                  type="email"
                  inputProps={{
                    id: "email",
                    name: "email",
                    type: "email",
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                    value: formik.values.email,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                ></CustomInput>
              </GridItem>
              <GridItem>
                <Button color="primary" variant="contained" component="label">
                  Upload
                  <input hidden accept=".stl" type="file" />
                </Button>
              </GridItem>

              <CustomInput
                labelText="Description"
                id="description"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button type="submit" color="primary">
                  Envoyer
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
