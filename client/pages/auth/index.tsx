import { Box, Heading } from "@chakra-ui/react";
import {ButtonGreen} from "../../styles/ui-components/Chakra-Button";
import Image from "next/image";

export default function Index() {
  return <SignUp />;
}

function SignUp() {
  return (
    <Box>
      <Heading>LOG-IN</Heading>

      <div style={{ textAlign: "center" }}>
        <ButtonGreen>
          <span style={{ position: "relative", top: "2px" }}>
            <Image width={15} height={15} src="/metamask.png" alt="icon"/>
          </span>{" "}
          Login with Wallet
        </ButtonGreen>
      </div>
    </Box>
  );
}
