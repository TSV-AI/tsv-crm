import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import researchResultsData from "layouts/research/data/researchResultsData";

function Research() {
  const [searchParams, setSearchParams] = useState({
    location: "",
    radius: 10,
    industry: "",
    companySize: "",
    keywords: [],
    targetType: "business", // business or person
  });

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  const { columns, rows } = researchResultsData();

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Marketing",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Education",
    "Legal",
    "Consulting",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(rows);
      setIsSearching(false);
    }, 2000);
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !searchParams.keywords.includes(keywordInput.trim())) {
      setSearchParams((prev) => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()],
      }));
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setSearchParams((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k !== keyword),
    }));
  };

  const handleInputChange = (field, value) => {
    setSearchParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          {/* Search Filters */}
          <Grid item xs={12}>
            <Card>
              <MDBox mx={2} mt={-3} py={3} px={2} bgColor="primary" borderRadius="lg">
                <MDTypography variant="h6" color="white">
                  Research Prospects
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Target Type
                      </MDTypography>
                      <FormControl fullWidth>
                        <Select
                          value={searchParams.targetType}
                          onChange={(e) => handleInputChange("targetType", e.target.value)}
                          displayEmpty
                          sx={{ height: 40 }}
                        >
                          <MenuItem value="business">Business</MenuItem>
                          <MenuItem value="person">Person</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Location
                      </MDTypography>
                      <TextField
                        fullWidth
                        placeholder="Enter city, state, or zip code"
                        value={searchParams.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Search Radius: {searchParams.radius} miles
                      </MDTypography>
                      <Slider
                        value={searchParams.radius}
                        onChange={(e, value) => handleInputChange("radius", value)}
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                        sx={{
                          height: 16,
                          color: "#68a097",
                          "& .MuiSlider-thumb": {
                            height: 24,
                            width: 24,
                            backgroundColor: "#68a097",
                          },
                          "& .MuiSlider-track": {
                            height: 8,
                            backgroundColor: "#68a097",
                          },
                          "& .MuiSlider-rail": {
                            height: 8,
                            backgroundColor: "#565656",
                          },
                          "& .MuiSlider-markLabel": {
                            color: "#f5f5f5",
                          },
                        }}
                        marks={[
                          { value: 1, label: "1mi" },
                          { value: 25, label: "25mi" },
                          { value: 50, label: "50mi" },
                          { value: 100, label: "100mi" },
                        ]}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Industry
                      </MDTypography>
                      <FormControl fullWidth>
                        <Select
                          value={searchParams.industry}
                          onChange={(e) => handleInputChange("industry", e.target.value)}
                          displayEmpty
                          sx={{ height: 40 }}
                        >
                          <MenuItem value="">All Industries</MenuItem>
                          {industries.map((industry) => (
                            <MenuItem key={industry} value={industry}>
                              {industry}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Company Size
                      </MDTypography>
                      <FormControl fullWidth>
                        <Select
                          value={searchParams.companySize}
                          onChange={(e) => handleInputChange("companySize", e.target.value)}
                          displayEmpty
                          sx={{ height: 40 }}
                        >
                          <MenuItem value="">Any Size</MenuItem>
                          {companySizes.map((size) => (
                            <MenuItem key={size} value={size}>
                              {size}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDBox mb={2}>
                      <MDTypography variant="button" fontWeight="medium" mb={1}>
                        Keywords
                      </MDTypography>
                      <MDBox display="flex" gap={1} alignItems="center">
                        <TextField
                          placeholder="Add keyword..."
                          value={keywordInput}
                          onChange={(e) => setKeywordInput(e.target.value)}
                          variant="outlined"
                          size="small"
                          sx={{ flexGrow: 1 }}
                          onKeyPress={(e) => e.key === "Enter" && handleAddKeyword()}
                        />
                        <MDButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={handleAddKeyword}
                        >
                          Add
                        </MDButton>
                      </MDBox>
                      <MDBox mt={1} display="flex" flexWrap="wrap" gap={0.5}>
                        {searchParams.keywords.map((keyword) => (
                          <Chip
                            key={keyword}
                            label={keyword}
                            onDelete={() => handleRemoveKeyword(keyword)}
                            color="default"
                            size="small"
                          />
                        ))}
                      </MDBox>
                    </MDBox>
                  </Grid>
                </Grid>
                <MDBox mt={3} display="flex" justifyContent="center">
                  <MDButton
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSearch}
                    disabled={isSearching}
                  >
                    {isSearching ? "Searching..." : "Start Research"}
                  </MDButton>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <Grid item xs={12}>
              <Card>
                <MDBox mx={2} mt={-3} py={3} px={2} bgColor="secondary" borderRadius="lg">
                  <MDTypography variant="h6" color="white">
                    Research Results ({searchResults.length} prospects found)
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows: searchResults }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                    canSearch={true}
                  />
                </MDBox>
              </Card>
            </Grid>
          )}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Research;
