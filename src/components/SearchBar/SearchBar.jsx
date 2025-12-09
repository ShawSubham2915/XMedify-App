import { Button, Stack, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({list, filterList}) => {

    const [inputText, setInputText] = useState("");

    const FilteredList = useMemo(() => {
        if(!inputText.trim()) return list;
        return list.filter((item) => 
            item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase()));
    }, [inputText, list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        filterList(FilteredList);
    }

  return (
    <form onSubmit={handleSubmit}>
        <Stack direction="row" spaqing={2}>
            <TextField
                type="text"
                label="Search By Hospital"
                variant="outlined"
                value={inputText}
                fullWidth
                onChange={(e) => setInputText(e.target.value)}
                inputProps={{ maxLength: 100}}
                sx={{ bgcolor: "#FAFBFE"}}
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon fontSize="large"/>}         
                sx={{
                    mx: 4,
                    py: "15px", px: 8,
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
        </Stack>
    </form>
  )
}

export default SearchBar
