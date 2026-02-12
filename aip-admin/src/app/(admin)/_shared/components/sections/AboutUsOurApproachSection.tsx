"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Divider from "@mui/material/Divider";
import { Grid, Switch } from "@mui/material";

export const AboutUsOurApproachSection = () => {
  const handleStatusChange = async (sectionId: string) => {
    // try {
    //   const response = await AipTeamSelectedWorkApi.updateStatus(
    //     id,
    //     reqAuthHeader()
    //   );
    //   toast.success(response?.data?.message);
    //   fetchTableData("asc", query);
    // } catch (err) {
    //   toast.error((err as any).response.data.message || "Something went wrong");
    // }
  };
  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Typography>Home Page</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Home Page Sections" />
        <Divider sx={{ m: "0 !important" }} />
        <img
          src="/images/sections/about-us-our-approach/section1.png"
          alt="Section 1"
          style={{
            width: "100%",
            height: "500px",
            padding: "20px",
            borderRadius: "40px",
          }}
        />
        <div
          className="mui-table-row-cell "
          style={{
            justifyContent: "center",
            marginLeft: "13px",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginLeft: "10px" }}>Status:</span>
          <Switch
            // checked={}
            onChange={() => handleStatusChange("section1")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Grid item xs={12} md={12}>
          <Divider />
        </Grid>
        <img
          src="/images/sections/about-us-our-approach/section2.png"
          alt="Section 1"
          style={{
            width: "100%",
            height: "500px",
            padding: "20px",
            borderRadius: "40px",
          }}
        />
        <div
          className="mui-table-row-cell "
          style={{
            justifyContent: "center",
            marginLeft: "13px",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginLeft: "10px" }}>Status:</span>
          <Switch
            // checked={}
            onChange={() => handleStatusChange("section1")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Grid item xs={12} md={12}>
          <Divider />
        </Grid>
        <img
          src="/images/sections/about-us-our-approach/section3.png"
          alt="Section 1"
          style={{
            width: "100%",
            height: "500px",
            padding: "20px",
            borderRadius: "40px",
          }}
        />
        <div
          className="mui-table-row-cell "
          style={{
            justifyContent: "center",
            marginLeft: "13px",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginLeft: "10px" }}>Status:</span>
          <Switch
            // checked={}
            onChange={() => handleStatusChange("section1")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Grid item xs={12} md={12}>
          <Divider />
        </Grid>
        <img
          src="/images/sections/about-us-our-approach/section4.png"
          alt="Section 1"
          style={{
            width: "100%",
            height: "500px",
            padding: "20px",
            borderRadius: "40px",
          }}
        />
        <div
          className="mui-table-row-cell "
          style={{
            justifyContent: "center",
            marginLeft: "13px",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginLeft: "10px" }}>Status:</span>
          <Switch
            // checked={}
            onChange={() => handleStatusChange("section1")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </Card>
    </>
  );
};

export default AboutUsOurApproachSection;
