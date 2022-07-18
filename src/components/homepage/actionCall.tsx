import { ReactElement } from "react";
import Image from "next/image";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { Container, IconButton, Typography } from "@mui/material";

const styles = {
  container: {
    overflow: "hidden",
    position: "relative",
    height: { md: "30vh", lg: "40vh" },
    width: "100%",
    display: "flex",
    backgroundColor: "#fafbfd",
  },
};

const ActionCall = ({ title, productNum }: any): ReactElement => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ ...styles.container, display: { xs: "none", md: "flex" } }}
      >
        <Image
          src="/images/action-call.png"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          objectPosition="0 75%"
        />
      </Container>
      {title ? (
        <>
          <Container
            maxWidth={false}
            sx={{
              ...styles.container,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                pt: { xs: ".4rem" },
                pb: { xs: ".4rem" },
              }}
            >
              {title === "all" ? "Shop All" : title.toUpperCase()}
            </Typography>
            <IconButton
              size="medium"
              aria-label="filter"
              aria-controls="menu-appbar"
              // aria-haspopup="true"
              onClick={() => {}}
              sx={{ color: "black" }}
            >
              <FilterAltIcon />
            </IconButton>
          </Container>
          <hr style={{ border: "1px solid #37476506", margin: 0 }} />
        </>
      ) : (
        <></>
      )}
      {productNum > 0 ? (
        <Container
          maxWidth={false}
          sx={{
            ...styles.container,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontSize: ".75rem",
              color: "rgb(123, 128, 154)",
              pt: { xs: ".5rem" },
              pb: { xs: ".5rem" },
            }}
          >
            {productNum} PRODUCTS
          </Typography>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActionCall;
