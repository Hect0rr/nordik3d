import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import Button from "/components/CustomButtons/Button.js";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos services</h2>
          <h5 className={classes.description}>
            Nos produits sont tous disponible sur notre boutique ETSY. Vous
            pouvez également nous faire parvenir votre propre design et nous
            l'imprimerons pour vous.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={6}>
            <InfoArea
              title=""
              description=""
              icon={ShoppingCartIcon}
              iconColor="etsy"
              vertical
            />
            <Button
              size="lg"
              color="etsy"
              href="https://www.etsy.com/shop/Kanuck3DStore"
            >
              Accéder à la boutique ETSY
            </Button>
          </GridItem>
          <GridItem xs={6}>
            <InfoArea
              title=""
              description=""
              icon={ThreeDRotationIcon}
              iconColor="blue"
              vertical
            />
            <Button size="lg" color="blue" href="#votre_design">
              Votre design
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
