import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 5 }}
          >
            STRAVA YEAR REVIEW
          </Typography>
          <Button color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// const Navbar = () => {
//   const STYLES = {
//     display: "flex",
//     justifyContent: "flex-end",
//     height: 80,
//     backgroundColor: "#e6a164",
//     borderRadius: 0,
//   };
//   return (
//     <div style={STYLES}>
//       <h1>STRAVA YEAR REVIEW</h1>
//     </div>
//   );
// };
