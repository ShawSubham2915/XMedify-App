import { Box, Button, InputAdornment, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";



const SearchHospital = () => {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({state: "", city: ""});
    const navigate = useNavigate();

    useEffect(() => {
      const fetchStates = async () => {
        try {
          const response = await axios.get("https://meddata-backend.onrender.com/states");
          setStates(response.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };

      fetchStates();
    }, []);

    useEffect(() => {
      const fetchCities = async () => {
        setCities([]);
        setFormData((prev) => ({ ...prev, city: ""}));
        try{
          const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`);
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      if(formData.state != "") {
        fetchCities();
      }
    }, [formData.state]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(formData.state && formData.city ) {
        navigate(`/search?state=${formData.state}&city=${formData.city}`);
      }
    };

        const selectStyles = {
        width: "100%", 
        maxWidth: { xs: '100%', sm: 280, md: 320, lg: 350 },
        border: '1px solid #D1D5DB',
        borderRadius: "10px", 
        bgcolor: "#FAFBFE", 
        height: "56px", 
        paddingLeft: '10px',
    };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row"},
        flexWrap: "wrap",
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>           
        }
        required
        sx={selectStyles}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      
      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>           
        }
        required
        sx={selectStyles}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ 
          height: "56px", 
          flexShrink: 0,
          minWidth: { xs: "100%", sm: 150 }, 
          maxWidth: 200, 
          fontSize: "16px",
          borderRadius: "10px", 
          bgcolor: "#2AA7FF", 
          '&:hover': {
              bgcolor: '#1E88E5', 
          },
          textTransform: 'none',
          fontWeight: 600,
         }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchHospital
