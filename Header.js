import { Grid, Link, Menu, MenuItem} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import "./Header.css";

export default function Header() {

  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleCalendarClick = (event) => {
    setCalendarAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAboutAnchorEl(null);
    setCalendarAnchorEl(null);
  };

  return (
   
    <div>
      {/* Header */}
      <Grid container className="grid">
       
        <Grid item sm={2}>
          <div className="conlogo">
            <img src={"headerlogo.png"} className="headlogo" alt="headerLogo" />
          </div>
        </Grid>
        <Grid item sm={1.5} className="btn">
          <div className="noowrap">
            <Link
              className="header-link"
              aria-controls="about-menu"
              aria-haspopup="true"
              onClick={handleAboutClick}
            >
              ABOUT
              <ExpandMoreIcon style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
            </Link>
            <Menu
              id="about-menu"
              anchorEl={aboutAnchorEl}         
              keepMounted
              open={Boolean(aboutAnchorEl)}
              onClose={handleMenuClose}
            >
             <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight:"bold",
                    textDecoration:"none",
                  }}
                >
                  HOME
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight: "bold",
                    textDecoration:"none",
                  }}
                >
                  PROFILE
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight: "bold",
                    textDecoration:"none",
                  }}
                >
                  BARANGAY DIRECTORY
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Grid>

        <Grid item sm={1.5} className="btn">
          <div className="noowrap">
            <Link
              className="header-link"
              aria-controls="calendar-menu"
              aria-haspopup="true"
              onClick={handleCalendarClick}
            >
              SERVICES
              <ExpandMoreIcon style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
            </Link>
            <Menu
              id="calendar-menu"
              anchorEl={calendarAnchorEl}
              keepMounted
              open={Boolean(calendarAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight: "bold",
                    textDecoration:"none",
                  }}
                  
                >
                  EMERGENCY ALERT
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight: "bold",
                    textDecoration:"none",
                  }}
                >
                  FORUM
                </Link>
              </MenuItem><MenuItem onClick={handleMenuClose}>
                <Link
                  style={{
                    color: "#213555",
                    fontWeight: "bold",
                    textDecoration:"none",
                  }}
                >
                  ANNOUNCEMENT
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Grid>

        <Grid item sm={1.5} className="btn">
          <div className="noowrap">
            <Link className="header-link">DASHBOARD</Link>
          </div>
        </Grid>

        <Grid item sm={1.5} className="btn">
          <div className="noowrap">
            <Link className="header-link">CALENDAR</Link>
          </div>
        </Grid>

        <Grid item sm={1.5} className="btn">
          <div className="noowrap">
            <Link className="header-link">BUSINESS SUPPORT</Link>
          </div>
        </Grid>
        {/* Add other grids as needed */}
      </Grid>
    </div>
  );
}
