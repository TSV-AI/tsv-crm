import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Campaign components
import CampaignsList from "layouts/campaigns/components/CampaignsList";
import MessageTemplates from "layouts/campaigns/components/MessageTemplates";
import DripFlows from "layouts/campaigns/components/DripFlows";

function Campaigns() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return <CampaignsList />;
      case 1:
        return <MessageTemplates />;
      case 2:
        return <DripFlows />;
      default:
        return <CampaignsList />;
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                bgColor="primary"
                borderRadius="lg"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Campaign Management
                </MDTypography>
                <MDButton
                  variant="contained"
                  color="white"
                  size="small"
                  startIcon={<Icon>add</Icon>}
                >
                  New Campaign
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <MDBox sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="campaign tabs"
                    centered
                  >
                    <Tab
                      label="Active Campaigns"
                      icon={<Icon>campaign</Icon>}
                      iconPosition="start"
                    />
                    <Tab
                      label="Message Templates"
                      icon={<Icon>message</Icon>}
                      iconPosition="start"
                    />
                    <Tab label="Drip Flows" icon={<Icon>timeline</Icon>} iconPosition="start" />
                  </Tabs>
                </MDBox>
                <MDBox pt={3}>{renderTabContent()}</MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Campaigns;
