import { ReactElement } from "react";
import Image from "next/image";

import { Container } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    height: { xs: "15vh", sm: "20vh", md: "30vh", lg: "40vh" },
    width: "100%",
  },
};

const ActionCall: React.FC = (): ReactElement => {
  return (
    // <div className={actionCall.ActionCall}>
    <Container maxWidth={false} sx={styles.container}>
      <Image
        src="/images/action-call.png"
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        objectPosition="0 75%"
      />
    </Container>
  );
};

export default ActionCall;
