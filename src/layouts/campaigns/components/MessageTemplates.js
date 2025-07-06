// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function MessageTemplates() {
  return (
    <MDBox p={3}>
      <MDTypography variant="h6" fontWeight="medium" mb={2}>
        Message Templates
      </MDTypography>
      <MDTypography variant="body2" color="text">
        AI-powered message templates coming soon...
      </MDTypography>
    </MDBox>
  );
}

export default MessageTemplates;
