import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import * as React from 'react';

export default function Profile() {
  return (
//     <Avatar
//   alt="Remy Sharp"
//   src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
//   sx={{ width: 100, height: 94 , margin:"auto" }}
// />

    <Card sx={{ maxWidth: "auto", background:"#3F3F3F", color:"white" }}>
         <Avatar
  alt="Remy Sharp"
  src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
  sx={{ width: 100, height: 94 , margin:"auto" }}
/>
     
      <CardContent color="white">
        <Typography gutterBottom variant="h5" component="div" align="center">
          Israeli
        </Typography>
        <Typography gutterBottom variant="" component="div" align="center">
          manager
        </Typography>
       
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
   
      <Button  align="center" variant="contained" color="error">
      <ExitToAppIcon  />  LogOut
      </Button>
   
      </CardActions>
    </Card>
  );
}