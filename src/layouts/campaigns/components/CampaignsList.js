// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function CampaignsList() {
  return (
    <MDBox p={3}>
      <MDTypography variant="h6" fontWeight="medium" mb={2}>
        Active Campaigns
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Campaign management features coming soon...
      </MDTypography>
    </MDBox>
  );
}

export default CampaignsList;
