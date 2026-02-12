"use client";

import Link from "next/link";

// import { useRouter } from 'next/navigation'

// import { useRouter } from 'next/navigation'

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import dayjs from "dayjs";

export const ViewContactPage = (values: any) => {
  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/contact-form`}>
          <Typography>Contact Form</Typography>
        </Link>
        <Typography>View</Typography>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Enquiry Information" />
        <Divider sx={{ m: "0 !important" }} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Enquired On</span>:{" "}
                {dayjs(values.values.createdAt).format("DD-MM-YYYY")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Type</span> :{" "}
                {values.values.type}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}> Name</span>:{" "}
                {values.values.name}
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Email</span>:{" "}
                {values.values.email}
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Message</span>:{" "}
                {values.values.message}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ViewContactPage;
