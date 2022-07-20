import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReactElement } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { Grid } from "@mui/material";
import link from "next/link";
import router from "next/router";

const Footer: React.FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();
  const pages = ["Handbags", "Shoes", "Accessories", "Shop All"];

  const links = pages.map((page) => (
    <Grid item>
      <Link
        href={`/category/${page !== "Shop All" ? page.toLowerCase() : "all"}`}
      >
        <Typography sx={{ fontWeight: 500 }}>{page}</Typography>
      </Link>
    </Grid>
  ));

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ flexDirection: "column" }}>
        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box> */}
        <Grid container spacing={3}>
          {links}
        </Grid>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            mt: "20px",
            mb: "10px",
          }}
        >
          <Typography textAlign="center" sx={{ width: "100%" }}>
            © {currentYear} Luxery Boutique. All Rights Reserved.
          </Typography>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Footer;
