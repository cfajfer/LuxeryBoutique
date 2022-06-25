import { ReactElement } from "react";
import Image from "next/image";

import { Container } from "@mui/material";
import actionCall from "../../styles/actionCall.module.scss";

const ActionCall: React.FC = (): ReactElement => {
  return (
    // <div className={actionCall.ActionCall}>
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
        height: { xs: "15vh", sm: "20vh", md: "30vh", lg: "40vh" },
        width: "100%",
      }}
    >
      <Image
        src="/images/action-call.png"
        alt="Header Image"
        layout="fill"
        className={actionCall.heroImage}
      />
    </Container>
  );
};

export default ActionCall;
