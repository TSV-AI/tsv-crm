/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
import Icon from "@mui/material/Icon";

export default function data() {
  const Company = ({ name, industry, location, website }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption" color="text">
        {industry}
      </MDTypography>
      <MDTypography variant="caption" color="text" display="block">
        {location}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="info"
        component="a"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </MDTypography>
    </MDBox>
  );

  const Contact = ({ name, title, email, phone, linkedin }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption" color="text">
        {title}
      </MDTypography>
      <MDTypography variant="caption" color="text" display="block">
        {email}
      </MDTypography>
      <MDTypography variant="caption" color="text">
        {phone}
      </MDTypography>
      {linkedin && (
        <MDBox mt={0.5}>
          <MDButton
            variant="text"
            color="info"
            size="small"
            startIcon={<Icon>linkedin</Icon>}
            component="a"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </MDButton>
        </MDBox>
      )}
    </MDBox>
  );

  const SocialPresence = ({ platforms }) => (
    <MDBox display="flex" flexDirection="column" gap={0.5}>
      {platforms.map((platform, index) => (
        <MDBadge
          key={index}
          badgeContent={platform.name}
          color={platform.active ? "success" : "secondary"}
          variant="gradient"
          size="sm"
        />
      ))}
    </MDBox>
  );

  const Actions = ({ onAddToProspects, onViewDetails, onStartCampaign }) => (
    <MDBox display="flex" flexDirection="column" gap={1}>
      <MDButton
        variant="gradient"
        color="success"
        size="small"
        startIcon={<Icon>person_add</Icon>}
        onClick={onAddToProspects}
      >
        Add to Prospects
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="small"
        startIcon={<Icon>visibility</Icon>}
        onClick={onViewDetails}
      >
        View Details
      </MDButton>
      <MDButton
        variant="outlined"
        color="warning"
        size="small"
        startIcon={<Icon>campaign</Icon>}
        onClick={onStartCampaign}
      >
        Start Campaign
      </MDButton>
    </MDBox>
  );

  return {
    columns: [
      { Header: "company", accessor: "company", width: "25%", align: "left" },
      { Header: "contact", accessor: "contact", width: "25%", align: "left" },
      { Header: "social presence", accessor: "socialPresence", align: "center" },
      { Header: "score", accessor: "score", align: "center" },
      { Header: "actions", accessor: "actions", align: "center" },
    ],

    rows: [
      {
        company: (
          <Company
            name="TechStart Solutions"
            industry="Software Development"
            location="San Francisco, CA"
            website="www.techstartsolutions.com"
          />
        ),
        contact: (
          <Contact
            name="Jennifer Walsh"
            title="CEO & Founder"
            email="jen@techstartsolutions.com"
            phone="(415) 555-0123"
            linkedin="https://linkedin.com/in/jenniferwalsh"
          />
        ),
        socialPresence: (
          <SocialPresence
            platforms={[
              { name: "LinkedIn", active: true },
              { name: "Twitter", active: true },
              { name: "Website Blog", active: true },
            ]}
          />
        ),
        score: (
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDBadge badgeContent="92%" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        actions: (
          <Actions
            onAddToProspects={() => console.log("Add to prospects")}
            onViewDetails={() => console.log("View details")}
            onStartCampaign={() => console.log("Start campaign")}
          />
        ),
      },
      {
        company: (
          <Company
            name="Green Energy Corp"
            industry="Renewable Energy"
            location="Austin, TX"
            website="www.greenenergycorp.com"
          />
        ),
        contact: (
          <Contact
            name="Mark Rodriguez"
            title="VP of Operations"
            email="mrodriguez@greenenergycorp.com"
            phone="(512) 555-0456"
            linkedin="https://linkedin.com/in/markrodriguez"
          />
        ),
        socialPresence: (
          <SocialPresence
            platforms={[
              { name: "LinkedIn", active: true },
              { name: "Instagram", active: true },
              { name: "Facebook", active: false },
            ]}
          />
        ),
        score: (
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDBadge badgeContent="87%" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        actions: (
          <Actions
            onAddToProspects={() => console.log("Add to prospects")}
            onViewDetails={() => console.log("View details")}
            onStartCampaign={() => console.log("Start campaign")}
          />
        ),
      },
      {
        company: (
          <Company
            name="Healthcare Innovations"
            industry="Medical Technology"
            location="Boston, MA"
            website="www.healthcareinnovations.com"
          />
        ),
        contact: (
          <Contact
            name="Dr. Sarah Kim"
            title="Chief Medical Officer"
            email="skim@healthcareinnovations.com"
            phone="(617) 555-0789"
            linkedin="https://linkedin.com/in/drsarahkim"
          />
        ),
        socialPresence: (
          <SocialPresence
            platforms={[
              { name: "LinkedIn", active: true },
              { name: "Twitter", active: false },
              { name: "Research Gate", active: true },
            ]}
          />
        ),
        score: (
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDBadge badgeContent="78%" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        actions: (
          <Actions
            onAddToProspects={() => console.log("Add to prospects")}
            onViewDetails={() => console.log("View details")}
            onStartCampaign={() => console.log("Start campaign")}
          />
        ),
      },
      {
        company: (
          <Company
            name="Digital Marketing Pro"
            industry="Marketing Services"
            location="Miami, FL"
            website="www.digitalmarketingpro.com"
          />
        ),
        contact: (
          <Contact
            name="Alex Johnson"
            title="Marketing Director"
            email="ajohnson@digitalmarketingpro.com"
            phone="(305) 555-0321"
            linkedin="https://linkedin.com/in/alexjohnson"
          />
        ),
        socialPresence: (
          <SocialPresence
            platforms={[
              { name: "LinkedIn", active: true },
              { name: "Instagram", active: true },
              { name: "TikTok", active: true },
            ]}
          />
        ),
        score: (
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDBadge badgeContent="95%" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        actions: (
          <Actions
            onAddToProspects={() => console.log("Add to prospects")}
            onViewDetails={() => console.log("View details")}
            onStartCampaign={() => console.log("Start campaign")}
          />
        ),
      },
      {
        company: (
          <Company
            name="Financial Planning LLC"
            industry="Financial Services"
            location="Chicago, IL"
            website="www.financialplanningllc.com"
          />
        ),
        contact: (
          <Contact
            name="Robert Chen"
            title="Senior Financial Advisor"
            email="rchen@financialplanningllc.com"
            phone="(312) 555-0654"
            linkedin="https://linkedin.com/in/robertchen"
          />
        ),
        socialPresence: (
          <SocialPresence
            platforms={[
              { name: "LinkedIn", active: true },
              { name: "Twitter", active: false },
              { name: "YouTube", active: true },
            ]}
          />
        ),
        score: (
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <MDBadge badgeContent="82%" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        actions: (
          <Actions
            onAddToProspects={() => console.log("Add to prospects")}
            onViewDetails={() => console.log("View details")}
            onStartCampaign={() => console.log("Start campaign")}
          />
        ),
      },
    ],
  };
}
