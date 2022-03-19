import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useStyles } from "./BodyComponent/BodyStyles";
import { Favorite } from "@mui/icons-material";

export default function Footer() {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center'>
            Created With <Favorite style={{ color: "red" }} /> and
            affection
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center'>
            All right reserved @Badmus {date.getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
