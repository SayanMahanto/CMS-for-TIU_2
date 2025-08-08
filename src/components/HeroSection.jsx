import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import HeroBanner from "../components/HeroSection"; // Assuming you have this component

// --- Icons ---
import DnsIcon from "@mui/icons-material/Dns";
import ShareIcon from "@mui/icons-material/Share";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Data for the research areas grid (simplified labels)
const researchAreas = [
  {
    label: "Systems and Sensing",
    path: "/research/systems-sensing",
    icon: <DnsIcon sx={{ fontSize: 60 }} color="error" />, // FIX: Color changed to red
  },
  {
    label: "Network Science and ML",
    path: "/research/network-ml",
    icon: <ShareIcon sx={{ fontSize: 60 }} color="error" />, // FIX: Color changed to red
  },
  {
    label: "NLP and IR",
    path: "/research/nlp",
    icon: <TranslateIcon sx={{ fontSize: 60 }} color="error" />, // FIX: Color changed to red
  },
  {
    label: "Web and Social",
    path: "/research/web-social",
    icon: <LanguageIcon sx={{ fontSize: 60 }} color="error" />, // FIX: Color changed to red
  },
];

// --- Main HomePage Component ---
function HomePage() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <HeroBanner />

      {/* Section 2: Research Areas */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 6, color: "#333" }}
        >
          RESEARCH AREAS
        </Typography>
        {/* FIX: Changed container to lg and item sizing */}
        <Grid container spacing={4} justifyContent="center">
          {researchAreas.map((area) => (
            // FIX: Grid sizing changed to sm={6} and md={3} for better responsiveness
            <Grid item key={area.label} xs={12} sm={6} md={3}>
              <Paper
                component={RouterLink}
                to={area.path}
                elevation={0}
                sx={{
                  // FIX: Flexbox layout for proper centering and uniform height
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: "200px", // Ensures space for text wrapping
                  p: 3,
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": {
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {area.icon}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mt: 2, fontWeight: "600" }}
                >
                  {area.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Section 3: News and Updates */}
      <Box sx={{ backgroundColor: "#f7f9fa", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 4,
              color: "#333",
            }}
          >
            NEWS AND UPDATES
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "text.secondary" }}
          >
            Tweets by cnerg
          </Typography>
        </Container>
      </Box>

      {/* Section 4: Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#008080",
          color: "white",
          py: 4,
          textAlign: "center",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleScrollToTop}
          sx={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#008080",
            color: "white",
            border: "2px solid white",
            "&:hover": {
              backgroundColor: "#006666",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ mb: 1 }}>
            ©Copyright 2021 - CNeRG, IIT Kharagpur. All rights reserved.
          </Typography>
          <Box>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
