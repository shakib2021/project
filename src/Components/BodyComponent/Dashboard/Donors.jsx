import {
    Box, Grid
} from "@material-ui/core";
import React from "react";
import { PageHeader } from "../../Common/Components";
  
  export default function Donors() {
  
  
   
    return (
      <Box mt={2}>
        <PageHeader label='Donors' title='Donors' />
        <Grid container spacing={1}>
         Donors
        </Grid>
      </Box>
    );
  }
  