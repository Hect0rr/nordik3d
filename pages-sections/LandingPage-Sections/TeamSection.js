import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Notre équipe</h2>
      <div>
        <GridContainer>
          <GridItem xs={6}>
            <Card plain>
              <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Yan Lamothe
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={6}>
            <Card plain>
              <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Keven Garneau
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
