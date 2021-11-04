//Router
import { useRouter } from "next/router";

//CSS & UI
import styled from "styled-components";
import {
  Box,
  ItemTop,
  LinkCover,
  NameSection,
  ProfileImageCover,
  ProfileImage,
} from "../../styles/styles";

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
