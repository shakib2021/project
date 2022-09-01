import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor:"#1979BE",
    },

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#efefef",
      boxSizing: "border-box",
      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },
    logo: {
      lineHeight: "47px",
      color: "white",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      background:"#1979BE"
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
   
    
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      background:"#3F3F3F",
color:"white",
      marginTop: "64px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
     "& div ":{
color:"white"
     },
      color: `${"white"} !important`,
     
      transition: "0.8s",
      "&:hover  div": {
        color: "white",
      // background:"#222222",
 

      },
    },
    navButton: { width: "100%",textTransform: "capitalize" },
    selectedNav: {
      color: `${"white"} !important`,
      background:"#222222",
      fontWeight: " bolder",
      " & div": {
        color: `${"white"} !important`,
      },
    },
  };
});
