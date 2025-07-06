import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Images
import backgroundImage from "assets/images/bg-profile.jpeg";
import team1 from "assets/images/team-1.jpg";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@threesixtyvue.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving profile:", profileData);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                src={team1}
                alt="profile-image"
                size="xl"
                shadow="sm"
                sx={{ width: 74, height: 74 }}
              />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  John Doe
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Sales Manager / Three Sixty Vue
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <MDBox
                display="flex"
                justifyContent={{ md: "flex-end" }}
                alignItems="center"
                ml={{ xs: 0, lg: 3 }}
              >
                <MDButton variant="outlined" color="info" size="small">
                  Edit Profile
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </Card>
      </MDBox>
      <MDBox pt={2} pb={3}>
        <Grid container spacing={6}>
          {/* User Information */}
          <Grid item xs={12} md={6} xl={4}>
            <Card sx={{ height: "100%" }}>
              <MDBox mx={2} mt={-3} py={3} px={2} bgColor="primary" borderRadius="lg">
                <MDTypography variant="h6" color="white">
                  Profile Information
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <MDBox mb={2}>
                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                    Full Name: &nbsp;
                  </MDTypography>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    John Doe
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                    Email: &nbsp;
                  </MDTypography>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    john@threesixtyvue.com
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                    Location: &nbsp;
                  </MDTypography>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    San Francisco, CA
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                    Social: &nbsp;
                  </MDTypography>
                  <MDBox display="flex" alignItems="center" mt={0.5}>
                    <MDBox mr={1}>
                      <MDTypography variant="button" color="text">
                        @john_doe
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
                <Divider />
                <MDBox mt={2}>
                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                    About me
                  </MDTypography>
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    mt={1}
                    display="block"
                  >
                    An experienced sales manager with a passion for building relationships and
                    driving results. Specializing in prospecting and customer relationship
                    management.
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          {/* Account Settings */}
          <Grid item xs={12} md={6} xl={4}>
            <Card>
              <MDBox mx={2} mt={-3} py={3} px={2} bgColor="secondary" borderRadius="lg">
                <MDTypography variant="h6" color="white">
                  Account Settings
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={profileData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Location"
                      value={profileData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MDButton variant="contained" color="primary" fullWidth onClick={handleSave}>
                      Update Profile
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {/* CRM Preferences */}
          <Grid item xs={12} md={6} xl={4}>
            <Card sx={{ height: "100%" }}>
              <MDBox mx={2} mt={-3} py={3} px={2} bgColor="secondary" borderRadius="lg">
                <MDTypography variant="h6" color="white">
                  CRM Preferences
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        Email Notifications
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        New Prospect Alerts
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        Auto-save Research
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        Show Lead Scores
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        Compact View
                      </MDTypography>
                      <Switch />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="button" fontWeight="medium">
                        Dark Mode
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Profile;
