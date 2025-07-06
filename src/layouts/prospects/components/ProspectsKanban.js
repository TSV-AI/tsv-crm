/* eslint-disable react/prop-types */
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

function ProspectsKanban({ prospects }) {
  const [columns] = useState([
    { id: "new", title: "New", color: "info" },
    { id: "contacted", title: "Contacted", color: "warning" },
    { id: "interested", title: "Interested", color: "success" },
    { id: "follow-up", title: "Follow Up", color: "secondary" },
    { id: "not-interested", title: "Not Interested", color: "error" },
  ]);

  const getProspectsByStatus = (status) => {
    return prospects.filter((prospect) => {
      const statusText = prospect.status.props.children.props.badgeContent;
      return statusText.toLowerCase().replace(" ", "-") === status;
    });
  };

  const ProspectCard = ({ prospect }) => {
    const prospectData = prospect.prospect.props;
    return (
      <Card sx={{ mb: 2, p: 2 }}>
        <MDBox display="flex" alignItems="center" mb={1}>
          {prospectData.children[0]}
          <MDBox ml={2} flexGrow={1}>
            <MDTypography variant="button" fontWeight="medium">
              {prospectData.children[1].props.children[0].props.children}
            </MDTypography>
            <MDTypography variant="caption" color="text" display="block">
              {prospectData.children[1].props.children[1].props.children}
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox mt={1} display="flex" justifyContent="space-between" alignItems="center">
          <MDBox>
            <MDTypography variant="caption" color="text">
              {prospect.industry.props.children[0].props.children}
            </MDTypography>
            <MDTypography variant="caption" color="text" display="block">
              {prospect.industry.props.children[1].props.children}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" gap={1}>
            <MDButton variant="outlined" color="info" size="small" circular iconOnly>
              <Icon fontSize="small">visibility</Icon>
            </MDButton>
            <MDButton variant="outlined" color="success" size="small" circular iconOnly>
              <Icon fontSize="small">send</Icon>
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>
    );
  };

  return (
    <MDBox p={3}>
      <Grid container spacing={3}>
        {columns.map((column) => (
          <Grid item xs={12} md={6} lg={2.4} key={column.id}>
            <MDBox>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                p={2}
                borderRadius="lg"
                bgColor={column.color}
                variant="gradient"
                coloredShadow={column.color}
              >
                <MDTypography variant="h6" color="white">
                  {column.title}
                </MDTypography>
                <MDTypography variant="h6" color="white">
                  {getProspectsByStatus(column.id).length}
                </MDTypography>
              </MDBox>
              <MDBox sx={{ minHeight: "400px" }}>
                {getProspectsByStatus(column.id).map((prospect, index) => (
                  <ProspectCard key={index} prospect={prospect} />
                ))}
              </MDBox>
            </MDBox>
          </Grid>
        ))}
      </Grid>
    </MDBox>
  );
}

export default ProspectsKanban;
