//Router
import { useRouter } from "next/router";

//CSS & UI
import { Box, NameSection } from "../../styles";

export default function DeveloperPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <Box>
      <NameSection>New Dev</NameSection>
    </Box>
  );
}
