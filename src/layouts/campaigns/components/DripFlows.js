// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DripFlows() {
  return (
    <MDBox p={3}>
      <MDTypography variant="h6" fontWeight="medium" mb={2}>
        Drip Flows
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Automated drip campaign flows coming soon...
      </MDTypography>
    </MDBox>
  );
}

export default DripFlows;
