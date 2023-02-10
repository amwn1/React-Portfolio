import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
function MySkills() {
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
            What I do
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "97%",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CrisisAlertIcon
                  sx={{ fill: "#8A6AE3", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  Android Dev
                </Typography>
                <Typography variant="subtitle2">
                Android software development is the process by which applications are created for devices running the Android operating system
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <CodeIcon
                  sx={{ fill: "#CA624D", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  Web Development
                </Typography>
                <Typography variant="subtitle2">
                 Web development can range from developing a simple single static page of plain text to complex web applications
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: "250px",
                  width: "350px",
                  boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                  p: 3,
                  backgroundColor: "#1F1E24",
                }}
              >
                <LaptopMacIcon
                  sx={{ fill: "#2588CE", height: "35px", width: "35px" }}
                />
                <Typography variant="h4" sx={{ my: 2 }}>
                  Flutter
                </Typography>
                <Typography variant="subtitle2">
                Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MySkills;
