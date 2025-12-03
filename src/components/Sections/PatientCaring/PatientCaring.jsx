import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import PatientCaringImg from "../../../assets/images/patient-caring.png"
import tick from "../../../assets/images/tick.png"
import { Typography } from '@mui/material'

const PatientCaring = () => {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF , #E8F1FF)"}}>
        <Container >
            <Grid container display="flex" justifyContent="space-between" flexWrap="nowrap" spacing={50} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Box 
                        component="img"
                        src={PatientCaringImg}
                        width={550}
                        height={500}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography fontWeight={600} mb={2} color="#2AA7FF">
                        HELPING PATIENTS FROM AROUND THE GLOBE!!
                    </Typography>

                    <Typography variant="h2" fontWeight={550} mb={1} color='#1B3C74'>
                        Patient{" "}
                        <Box component="span" color="#2AA7FF">
                            Caring
                        </Box>
                    </Typography>

                    <Typography color="#77829D" lineHeight={1.8}>
                        Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                    </Typography>

                    <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                        <ListItem disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box component="img" src={tick} width={22} height={22}/>
                            </ListItemIcon>
                            <ListItemText 
                                primary="Stay Updated About Your Health"
                                primaryTypographyProps={{
                                    fontSize: { xs: 14, md: 18 },
                                    fontWeight: 500,
                                    color: "#1B3C74",
                                }}
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box component="img" src={tick} width={22} height={22}/>
                            </ListItemIcon>
                            <ListItemText 
                                primary="Check Your Results Online"
                                primaryTypographyProps={{
                                    fontSize: { xs: 14, md: 18 },
                                    fontWeight: 500,
                                    color: "#1B3C74",
                                }}
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box component="img" src={tick} width={22} height={22}/>
                            </ListItemIcon>
                            <ListItemText 
                                primary="Manage Your Appointments"
                                primaryTypographyProps={{
                                    fontSize: { xs: 14, md: 18 },
                                    fontWeight: 500,
                                    color: "#1B3C74",
                                }}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default PatientCaring
