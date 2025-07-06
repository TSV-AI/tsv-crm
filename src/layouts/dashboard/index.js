// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  // Mock follow-up data - replace with real data
  const followUpsToday = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      avatar: team1,
      lastContact: "3 days ago",
      nextAction: "LinkedIn follow-up",
      priority: "high",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Marketing Solutions",
      avatar: team2,
      lastContact: "1 week ago",
      nextAction: "Email follow-up",
      priority: "medium",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Healthcare Partners",
      avatar: team3,
      lastContact: "5 days ago",
      nextAction: "Phone call",
      priority: "high",
    },
    {
      id: 4,
      name: "David Kim",
      company: "Financial Advisory Group",
      avatar: team4,
      lastContact: "2 days ago",
      nextAction: "Send proposal",
      priority: "high",
    },
  ];

  const recentActivity = [
    { action: "New prospect added", prospect: "Lisa Thompson", time: "2 hours ago" },
    { action: "Email sent", prospect: "Robert Chen", time: "4 hours ago" },
    { action: "LinkedIn connection", prospect: "Amanda Wong", time: "6 hours ago" },
    { action: "Research completed", prospect: "James Wilson", time: "8 hours ago" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Key Metrics */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="New Prospects"
                count={47}
                percentage={{
                  color: "primary",
                  amount: "+12%",
                  label: "than last week",
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
                count="324"
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
                icon="schedule"
                title="Follow-ups Due"
                count={followUpsToday.length}
                percentage={{
                  color: "primary",
                  amount: "Today",
                  label: "require attention",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* Follow-ups Today & Recent Activity */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* Follow-ups Today - Top Left as requested */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: "100%" }}>
                <MDBox mx={2} mt={-3} py={3} px={2} bgColor="primary" borderRadius="lg">
                  <MDTypography variant="h6" color="white">
                    Follow-ups Due Today ({followUpsToday.length})
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  {followUpsToday.map((followUp) => (
                    <MDBox key={followUp.id} display="flex" alignItems="center" mb={2}>
                      <Avatar src={followUp.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                      <MDBox flexGrow={1}>
                        <MDTypography variant="button" fontWeight="medium">
                          {followUp.name}
                        </MDTypography>
                        <MDTypography variant="caption" color="text" display="block">
                          {followUp.company}
                        </MDTypography>
                        <MDTypography variant="caption" color="warning" display="block">
                          {followUp.nextAction} • Last: {followUp.lastContact}
                        </MDTypography>
                      </MDBox>
                      <MDButton variant="contained" color="secondary" size="small">
                        Contact
                      </MDButton>
                    </MDBox>
                  ))}
                  {followUpsToday.length === 0 && (
                    <MDBox textAlign="center" py={3}>
                      <MDTypography variant="button" color="text">
                        No follow-ups due today 🎉
                      </MDTypography>
                    </MDBox>
                  )}
                </MDBox>
              </Card>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: "100%" }}>
                <MDBox mx={2} mt={-3} py={3} px={2} bgColor="primary" borderRadius="lg">
                  <MDTypography variant="h6" color="white">
                    Recent Activity
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  {recentActivity.map((activity, index) => (
                    <MDBox key={index} display="flex" alignItems="center" mb={2}>
                      <MDBox
                        width="8px"
                        height="8px"
                        borderRadius="50%"
                        bgColor="secondary"
                        mr={2}
                        mt={0.5}
                      />
                      <MDBox flexGrow={1}>
                        <MDTypography variant="button" fontWeight="medium">
                          {activity.action}
                        </MDTypography>
                        <MDTypography variant="caption" color="text" display="block">
                          {activity.prospect} • {activity.time}
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  ))}
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>

        {/* Charts */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsBarChart
                  color="accentDark"
                  title="Weekly Outreach"
                  description="Messages sent this week"
                  date="updated 1 hour ago"
                  chart={reportsBarChartData}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsLineChart
                  color="primary"
                  title="Response Rates"
                  description="Response rate trends"
                  date="updated 30 min ago"
                  chart={sales}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#4a7069" }}>
                <ReportsLineChart
                  color="accentDark"
                  title="Prospect Pipeline"
                  description="New prospects over time"
                  date="updated 2 hours ago"
                  chart={tasks}
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

export default Dashboard;
