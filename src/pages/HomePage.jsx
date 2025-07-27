import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import EventIcon from "@mui/icons-material/Event";

import HeroImage from "../assets/images/campus-hero.jpg";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Innovate. Excel. Lead.
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
            Join a community of scholars and researchers at the forefront of
            technology.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/admissions"
            endIcon={<ArrowForwardIcon />}
          >
            Apply Now
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
        >
          Explore Our University
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <SchoolIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "600" }}
                >
                  Academics
                </Typography>
                <Typography>
                  Discover our diverse range of undergraduate and graduate
                  programs.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={RouterLink} to="/academics" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <ScienceIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "600" }}
                >
                  Our Research
                </Typography>
                <Typography>
                  Explore groundbreaking research from our world-class faculty
                  and students.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={RouterLink} to="/research" size="small">
                  See Projects
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <EventIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "600" }}
                >
                  News & Events
                </Typography>
                <Typography>
                  Stay up-to-date with the latest happenings and events on
                  campus.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={RouterLink} to="/news" size="small">
                  View Updates
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#f4f4f4", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography
                  variant="h3"
                  component="p"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  50+
                </Typography>
                <Typography variant="h6" component="p">
                  Research Labs
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography
                  variant="h3"
                  component="p"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  200+
                </Typography>
                <Typography variant="h6" component="p">
                  Expert Faculty
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography
                  variant="h3"
                  component="p"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  10,000+
                </Typography>
                <Typography variant="h6" component="p">
                  Students Enrolled
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
