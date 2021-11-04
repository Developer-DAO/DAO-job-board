import { Box, Title } from "../../styles";
import Button from "../../styles/ui-components/Button";
import Image from "next/image";

export default function Index() {
  return <SignUp />;
}

function SignUp() {
  return (
    <Box>
      <Title>TO BE FINISHED</Title>

      <div style={{ textAlign: "center" }}>
        <Button styling="positive">
          <span style={{ position: "relative", top: "2px" }}>
            <Image width={15} height={15} src="/metamask.png" />
          </span>{" "}
          Login with Wallet
        </Button>
      </div>
    </Box>
  );
}
