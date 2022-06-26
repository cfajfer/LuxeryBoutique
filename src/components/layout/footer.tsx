import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReactElement } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer: React.FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Typography textAlign="center">
            © {currentYear} Luxery Boutique. All Rights Reserved.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Link href="https://www.facebook.com/">
            <FacebookIcon />
          </Link>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Footer;
