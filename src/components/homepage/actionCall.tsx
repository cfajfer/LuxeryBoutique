import { ReactElement } from "react";
import Image from "next/image";

import { Container, Typography } from "@mui/material";

const styles = {
  container: {
    overflow: "hidden",
    position: "relative",
    height: { xs: "15vh", sm: "20vh", md: "30vh", lg: "40vh" },
    width: "100%",
  },
};

const ActionCall = ({ title }: any): ReactElement => {
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
      {/* <Container
        maxWidth={false}
        sx={{ ...styles.container, display: { xs: "flex", md: "none" } }}
      >
        <hr style={{ border: "1px solid #37476526" }} />
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
        <hr style={{ border: "1px solid #37476526" }} />
      </Container> */}
    </>
  );
};

export default ActionCall;
