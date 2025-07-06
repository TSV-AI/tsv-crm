/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Images (using existing team images as placeholders)
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

export default function data() {
  const Prospect = ({ image, name, company, email, phone }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {company}
        </MDTypography>
        <MDTypography variant="caption" color="text" display="block">
          {email}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {phone}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Industry = ({ industry, location }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {industry}
      </MDTypography>
      <MDTypography variant="caption" color="text">
        {location}
      </MDTypography>
    </MDBox>
  );

  const SocialMedia = ({ platforms }) => (
    <MDBox display="flex" alignItems="center" gap={0.5}>
      {platforms.map((platform, index) => (
        <MDButton key={index} variant="outlined" size="small" color="info" circular iconOnly>
          <Icon fontSize="small">{platform}</Icon>
        </MDButton>
      ))}
    </MDBox>
  );

  const Status = ({ status }) => {
    const statusColors = {
      New: "info",
      Contacted: "warning",
      Interested: "success",
      "Not Interested": "error",
      "Follow Up": "secondary",
    };

    return (
      <MDBox ml={-1}>
        <MDBadge
          badgeContent={status}
          color={statusColors[status] || "dark"}
          variant="gradient"
          size="sm"
        />
      </MDBox>
    );
  };

  const Actions = ({ onView, onContact }) => (
    <MDBox display="flex" alignItems="center" gap={1}>
      <MDButton
        variant="text"
        color="info"
        size="small"
        startIcon={<Icon>visibility</Icon>}
        onClick={onView}
      >
        View
      </MDButton>
      <MDButton
        variant="text"
        color="success"
        size="small"
        startIcon={<Icon>send</Icon>}
        onClick={onContact}
      >
        Contact
      </MDButton>
    </MDBox>
  );

  return {
    columns: [
      { Header: "prospect", accessor: "prospect", width: "30%", align: "left" },
      { Header: "industry", accessor: "industry", align: "left" },
      { Header: "social media", accessor: "socialMedia", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "last contact", accessor: "lastContact", align: "center" },
      { Header: "actions", accessor: "actions", align: "center" },
    ],

    rows: [
      {
        prospect: (
          <Prospect
            image={team1}
            name="Sarah Johnson"
            company="Tech Innovations Inc."
            email="sarah@techinnovations.com"
            phone="(555) 123-4567"
          />
        ),
        industry: <Industry industry="Technology" location="San Francisco, CA" />,
        socialMedia: <SocialMedia platforms={["linkedin", "twitter", "language"]} />,
        status: <Status status="New" />,
        lastContact: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Never
          </MDTypography>
        ),
        actions: (
          <Actions
            onView={() => console.log("View prospect")}
            onContact={() => console.log("Contact prospect")}
          />
        ),
      },
      {
        prospect: (
          <Prospect
            image={team2}
            name="Michael Chen"
            company="Global Marketing Solutions"
            email="mchen@globalmkt.com"
            phone="(555) 987-6543"
          />
        ),
        industry: <Industry industry="Marketing" location="New York, NY" />,
        socialMedia: <SocialMedia platforms={["linkedin", "instagram"]} />,
        status: <Status status="Contacted" />,
        lastContact: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2 days ago
          </MDTypography>
        ),
        actions: (
          <Actions
            onView={() => console.log("View prospect")}
            onContact={() => console.log("Contact prospect")}
          />
        ),
      },
      {
        prospect: (
          <Prospect
            image={team3}
            name="Emily Rodriguez"
            company="Healthcare Partners"
            email="erodriguez@healthpartners.com"
            phone="(555) 456-7890"
          />
        ),
        industry: <Industry industry="Healthcare" location="Chicago, IL" />,
        socialMedia: <SocialMedia platforms={["linkedin"]} />,
        status: <Status status="Interested" />,
        lastContact: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1 week ago
          </MDTypography>
        ),
        actions: (
          <Actions
            onView={() => console.log("View prospect")}
            onContact={() => console.log("Contact prospect")}
          />
        ),
      },
      {
        prospect: (
          <Prospect
            image={team4}
            name="David Kim"
            company="Financial Advisory Group"
            email="dkim@financialadvisory.com"
            phone="(555) 321-0987"
          />
        ),
        industry: <Industry industry="Finance" location="Boston, MA" />,
        socialMedia: <SocialMedia platforms={["linkedin", "twitter"]} />,
        status: <Status status="Follow Up" />,
        lastContact: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3 days ago
          </MDTypography>
        ),
        actions: (
          <Actions
            onView={() => console.log("View prospect")}
            onContact={() => console.log("Contact prospect")}
          />
        ),
      },
      {
        prospect: (
          <Prospect
            image={team5}
            name="Lisa Thompson"
            company="Retail Solutions LLC"
            email="lthompson@retailsolutions.com"
            phone="(555) 654-3210"
          />
        ),
        industry: <Industry industry="Retail" location="Austin, TX" />,
        socialMedia: <SocialMedia platforms={["instagram", "facebook"]} />,
        status: <Status status="Not Interested" />,
        lastContact: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1 month ago
          </MDTypography>
        ),
        actions: (
          <Actions
            onView={() => console.log("View prospect")}
            onContact={() => console.log("Contact prospect")}
          />
        ),
      },
    ],
  };
}
