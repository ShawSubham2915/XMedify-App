import { Box, Button, Container, IconButton, Stack, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css'

const Navbar = () => {

  const isMobile = useMediaQuery("(max-width: 900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="#2C7EF8">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team will always be our priority,
          so we follow the best practices for cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
        className="nav-links"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
          sx={{ position: "relative" }}
        >          
          <Link to="/" >
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={logo} alt="logo" height={27} />
              <Typography variant="h5" fontWeight={700} color="#2AA7FF">
                Medify
              </Typography>
            </Stack>
          </Link>

          
          {(!isMobile || menuOpen) && (
            <Stack
            className="nav-links"
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 4 }}
              alignItems={{ xs: "flex-start", md: "center" }}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
              sx={{
                position: { xs: "absolute", md: "static" },
                top: { xs: 0, md: "auto" },
                right: 0,
                width: { xs: "100%", md: "auto" },
                height: { xs: "100vh", md: "auto" },
                bgcolor: { xs: "#2C7EF8", md: "transparent" },
                zIndex: 10
              }} >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings">
                <Button variant="contained" sx={{bgcolor: "#2AA7FF", borderRadius: 2}} disableElevation>
                  My Bookings
                </Button>
              </Link>

              {isMobile && menuOpen && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 20,
                    color: "#fff"
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
          )}

          {/* Menu Icon (Mobile only) */}
          {isMobile && !menuOpen && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}

        </Stack>
      </Container>
    </header>
  );
};

export default Navbar;
