import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  IconButton,
} from "@mui/material";
import faqBanner from "../../../assets/images/faq-banner.png";
import faqheartIcon from "../../../assets/images/faq-heartshape-icon.png";

const FAQs = () => {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, exercitationem.",
    },
    {
      question: "Why we are different from others?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <Box py={10}>
      <Container maxWidth="xl">
        {/* Titles */}
        <Typography
          sx={{ color: "#2A90E8", textAlign: "center", fontWeight: 600, mb: 1 }}
        >
          Get Your Answer
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "2.8rem",
            mb: 6,
            color: "#0D1B2A",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Grid container alignItems="center" spacing={6}>
          {/* Left Image Zone */}
          <Grid item xs={12} md={6}>
           <Box sx={{ position: "relative", width: "100%" }}>
                {/* Main Image */}
                <Box
                component="img"
                src={faqBanner}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                }}
                />

                
                <Box
                sx={{
                    position: "absolute",
                    top: "40%",
                    right: "-20px",
                    transform: "translateY(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                }}
                >
                <Box
                    component="img"
                    src={faqheartIcon}
                    alt="heart"
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                </Box>
            </Box>
          </Grid>

          {/* Right Accordion */}
          <Grid item xs={12} md={6}>
            {faqs.map((faq, i) => (
              <Accordion key={i} sx={{ mb: 1.5, borderRadius: "10px" }}>
                <AccordionSummary
                  expandIcon={
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#2A90E8",
                        lineHeight: "1",
                      }}
                    >
                      +
                    </Typography>
                  }
                >
                  <Typography
                    sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#0D1B2A" }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography opacity={0.8}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQs;
