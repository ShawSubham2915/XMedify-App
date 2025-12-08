import {
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Pinterest as PinterestIcon,
  CheckCircle as CheckCircleIcon,
  ChevronRight as ArrowIcon,
} from "@mui/icons-material";

const Footer = () => {
  const menuItems = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
  const services = ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"];

      return (
      <Box sx={{ backgroundColor: "#072A4F", color: "white", px: { xs: 3, md: 12 }, py: 6 }}>

      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          mb: 2,

        }}
      >
        
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 10 }}>
            <Avatar sx={{ bgcolor: "#2A90E8", width: 48, height: 48, mr: 2 }}>
              <CheckCircleIcon />
            </Avatar>
            <Typography sx={{ fontWeight: "bold", fontSize: "2rem", color: "#2A90E8" }}>Medify</Typography>
          </Box>
        
          <Box sx={{ display: "flex", justifyContent: "start", gap: 2, mb: 4 }}>
            {[FacebookIcon, TwitterIcon, YouTubeIcon, PinterestIcon].map((Icon, i) => (
              <IconButton key={i} sx={{ bgcolor: "white", width: 50, height: 50 }}>
                <Icon sx={{ color: "#072A4F" }} />
              </IconButton>
            ))}
          </Box>
        </Box>

        
        <Box sx={{ display: "flex", gap: 20 }}>
          <FooterColumn items={menuItems} />
          <FooterColumn items={services} />
          <FooterColumn items={menuItems} />
        </Box>
      </Box>


      <Divider sx={{ bgcolor: "rgba(255,255,255,0.25)", mt: 3 }} />

      <Typography sx={{ textAlign: "center", mt: 2, opacity: 0.8, fontSize: "0.9rem" }}>
        Copyright ©2025 Surya Nursing Home.com. All Rights Reserved
      </Typography>
    </Box>

      );
};

const FooterColumn = ({ items }) => (
  <List disablePadding>
    {items.map((text) => (
      <ListItem
        key={text}
        disablePadding
        sx={{ display: "flex", alignItems: "center", py: 0.7, cursor: "pointer" }}
      >
        <ArrowIcon sx={{ fontSize: 18, mr: 1 }} />
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontSize: "1rem",
            fontWeight: 500,
          }}
        />
      </ListItem>
    ))}
  </List>
);

export default Footer;
