import { Box, Stack, Typography } from "@mui/material";
import features from "../../../assets/images/blog.png";
import person from "../../../assets/images/person.png";

const BlogCard = () => {
  return (
    <Box
      sx={{
        height: 450,                          
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
        transition: "all 0.3s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        component="img"
        src={features}
        height={300}
        sx={{
          width: "100%",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <Box sx={{ p: 2, flex: 1 }}>
        <Typography color="#77829D" fontWeight={500} mb={1} fontSize={14}>
          Medical &nbsp; | &nbsp; March 31, 2022
        </Typography>

        <Typography
          color="#1B3C74"
          fontWeight={200}
          fontSize={18}
          lineHeight={1.3}
          mb={2}
        >
          6 Tips To Protect Your Mental Health When You’re Sick
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            component="img"
            src={person}
            sx={{
              height: 32,
              width: 32,
              borderRadius: "50%",
            }}
          />
          <Typography color="#1B3C74" fontSize={15} fontWeight={500}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BlogCard;
