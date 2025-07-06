import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import prospectsTableData from "layouts/prospects/data/prospectsTableData";
import ProspectsKanban from "layouts/prospects/components/ProspectsKanban";

function Prospects() {
  const [viewMode, setViewMode] = useState("table"); // "table" or "kanban"
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    industry: [],
    location: "",
    radius: 25,
    companySize: [],
    jobTitle: "",
    source: [],
    socialMedia: [],
    status: [],
    lastContact: "",
    leadScore: [0, 100],
    tags: [],
  });

  const { columns, rows } = prospectsTableData();

  const handleViewToggle = () => {
    setViewMode(viewMode === "table" ? "kanban" : "table");
  };

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      industry: [],
      location: "",
      radius: 25,
      companySize: [],
      jobTitle: "",
      source: [],
      socialMedia: [],
      status: [],
      lastContact: "",
      leadScore: [0, 100],
      tags: [],
    });
  };

  const filterOptions = {
    industries: ["Technology", "Healthcare", "Finance", "Marketing", "Retail", "Manufacturing"],
    companySizes: ["1-10", "11-50", "51-200", "201-500", "500+"],
    sources: ["LinkedIn", "Company Website", "Twitter", "Research Tool", "Referral"],
    socialMedia: ["LinkedIn", "Twitter", "Instagram", "Facebook", "TikTok"],
    statuses: ["New", "Contacted", "Interested", "Not Interested", "Follow Up"],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  Prospects
                </MDTypography>
                <MDBox display="flex" alignItems="center" gap={2}>
                  <MDButton
                    variant="contained"
                    color="white"
                    size="small"
                    startIcon={<Icon>add</Icon>}
                  >
                    New Prospect
                  </MDButton>
                  <MDButton
                    variant="outlined"
                    color="white"
                    size="small"
                    startIcon={<Icon>filter_list</Icon>}
                    onClick={handleFilterToggle}
                  >
                    Filters
                  </MDButton>
                  <MDBox display="flex" alignItems="center" gap={1}>
                    <MDTypography variant="button" color="white" fontSize="0.8rem">
                      List
                    </MDTypography>
                    <Switch
                      checked={viewMode === "kanban"}
                      onChange={handleViewToggle}
                      size="small"
                    />
                    <MDTypography variant="button" color="white" fontSize="0.8rem">
                      Board
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                {viewMode === "table" ? (
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                    canSearch={true}
                  />
                ) : (
                  <ProspectsKanban prospects={rows} />
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* Filter Drawer */}
      <Drawer anchor="right" open={filterOpen} onClose={handleFilterToggle}>
        <MDBox sx={{ width: 350, p: 3 }}>
          <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <MDTypography variant="h6" fontWeight="medium">
              Filter Prospects
            </MDTypography>
            <Icon sx={{ cursor: "pointer" }} onClick={handleFilterToggle}>
              close
            </Icon>
          </MDBox>

          <Grid container spacing={2}>
            {/* Industry Filter */}
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Industry</InputLabel>
                <Select
                  multiple
                  value={filters.industry}
                  onChange={(e) => handleFilterChange("industry", e.target.value)}
                  renderValue={(selected) => (
                    <MDBox display="flex" flexWrap="wrap" gap={0.5}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} size="small" />
                      ))}
                    </MDBox>
                  )}
                >
                  {filterOptions.industries.map((industry) => (
                    <MenuItem key={industry} value={industry}>
                      <Checkbox checked={filters.industry.indexOf(industry) > -1} />
                      {industry}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Location Filter */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Location"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                placeholder="City, State, or Zip"
              />
            </Grid>

            {/* Radius Filter */}
            <Grid item xs={12}>
              <MDTypography variant="button" fontWeight="medium" mb={1}>
                Radius: {filters.radius} miles
              </MDTypography>
              <Slider
                value={filters.radius}
                onChange={(e, value) => handleFilterChange("radius", value)}
                min={1}
                max={100}
                marks={[
                  { value: 1, label: "1mi" },
                  { value: 25, label: "25mi" },
                  { value: 50, label: "50mi" },
                  { value: 100, label: "100mi" },
                ]}
              />
            </Grid>

            {/* Company Size Filter */}
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Company Size</InputLabel>
                <Select
                  multiple
                  value={filters.companySize}
                  onChange={(e) => handleFilterChange("companySize", e.target.value)}
                  renderValue={(selected) => (
                    <MDBox display="flex" flexWrap="wrap" gap={0.5}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} size="small" />
                      ))}
                    </MDBox>
                  )}
                >
                  {filterOptions.companySizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      <Checkbox checked={filters.companySize.indexOf(size) > -1} />
                      {size} employees
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Job Title Filter */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Job Title"
                value={filters.jobTitle}
                onChange={(e) => handleFilterChange("jobTitle", e.target.value)}
                placeholder="CEO, Manager, Developer..."
              />
            </Grid>

            {/* Source Filter */}
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Source</InputLabel>
                <Select
                  multiple
                  value={filters.source}
                  onChange={(e) => handleFilterChange("source", e.target.value)}
                  renderValue={(selected) => (
                    <MDBox display="flex" flexWrap="wrap" gap={0.5}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} size="small" />
                      ))}
                    </MDBox>
                  )}
                >
                  {filterOptions.sources.map((source) => (
                    <MenuItem key={source} value={source}>
                      <Checkbox checked={filters.source.indexOf(source) > -1} />
                      {source}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Status Filter */}
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  multiple
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                  renderValue={(selected) => (
                    <MDBox display="flex" flexWrap="wrap" gap={0.5}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} size="small" />
                      ))}
                    </MDBox>
                  )}
                >
                  {filterOptions.statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      <Checkbox checked={filters.status.indexOf(status) > -1} />
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Lead Score Filter */}
            <Grid item xs={12}>
              <MDTypography variant="button" fontWeight="medium" mb={1}>
                Lead Score: {filters.leadScore[0]} - {filters.leadScore[1]}
              </MDTypography>
              <Slider
                value={filters.leadScore}
                onChange={(e, value) => handleFilterChange("leadScore", value)}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                marks={[
                  { value: 0, label: "0" },
                  { value: 50, label: "50" },
                  { value: 100, label: "100" },
                ]}
              />
            </Grid>
          </Grid>

          <MDBox mt={3} display="flex" gap={1}>
            <MDButton variant="contained" color="secondary" fullWidth>
              Apply Filters
            </MDButton>
            <MDButton variant="outlined" color="secondary" onClick={clearFilters}>
              Clear
            </MDButton>
          </MDBox>
        </MDBox>
      </Drawer>

      <Footer />
    </DashboardLayout>
  );
}

export default Prospects;
