// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import outreachStatsData from "layouts/analytics/data/outreachStatsData";

function Analytics() {
  const { outreachStats, responseRates } = outreachStatsData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* Key Metrics */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Total Prospects"
                count={1247}
                percentage={{
                  color: "primary",
                  amount: "+12%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="send"
                title="Messages Sent"
                count="3,420"
                percentage={{
                  color: "primary",
                  amount: "+8%",
                  label: "than last week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="reply"
                title="Response Rate"
                count="24.5%"
                percentage={{
                  color: "primary",
                  amount: "+3.2%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="trending_up"
                title="Conversion Rate"
                count="8.7%"
                percentage={{
                  color: "primary",
                  amount: "+1.8%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* Charts */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsBarChart
                  color="accentDark"
                  title="Outreach Performance"
                  description="Monthly outreach statistics"
                  date="updated 2 hours ago"
                  chart={outreachStats}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsLineChart
                  color="primary"
                  title="Response Rates"
                  description="Response rate trends over time"
                  date="updated 1 hour ago"
                  chart={responseRates}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsLineChart
                  color="accentDark"
                  title="Platform Performance"
                  description="Performance across channels"
                  date="updated 30 min ago"
                  chart={responseRates}
                />
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
