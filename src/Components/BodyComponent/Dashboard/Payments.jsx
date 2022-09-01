import {
    Box, Grid
} from "@material-ui/core";
import React from "react";
import { PageHeader } from "../../Common/Components";
  
  export default function Payments() {
  
  
   
    return (
      <Box mt={2}>
        <PageHeader label='Payments' title='Payments' />
        <Grid container spacing={1}>
        Payments
        </Grid>
      </Box>
    );
  }
  