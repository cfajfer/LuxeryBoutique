import { PriceCheckRounded } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import ItemCard from "../../itemCard/itemCard";
// import Image from "next/image";
import { ReactElement } from "react";

const styles = {
  body: {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    borderRadius: { xs: "0 0 0.75rem 0.75rem", md: "0.75rem" },
    overflow: "visible",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
    marginBottom: { xs: "32px", md: "32px" },
    marginTop: { xs: "0px", md: "-64px" },
  },
};

const Body = ({ children }: any): ReactElement => {
  return (
    <Container maxWidth={false} sx={{ padding: { xs: 0 } }}>
      <Paper variant="elevation" elevation={1} sx={styles.body}>
        <Container
          maxWidth="lg"
          sx={{ mt: { xs: "12px", md: "24px" }, pr: { xs: 0 }, pl: { xs: 0 } }}
        >
          {children}
        </Container>
      </Paper>
    </Container>
  );
};

export default Body;
