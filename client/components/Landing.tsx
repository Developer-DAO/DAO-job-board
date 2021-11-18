import { Image, Heading, Container, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import {
  ButtonRed,
  ButtonGreen,
  ButtonBlue,
} from "../styles/ui-components/Chakra-Button";

export default function Landing() {
  const { t } = useTranslation("common");
  return (
    <Container>
      <Container w="auto" h="auto" m="auto" mt="2.5%">
        <Image
          borderRadius="180px"
          w="200"
          h="200"
          src="/DevDAO.png"
          alt="icon"
          m="auto"
        />
      </Container>

      <Container textAlign="center">
        <Heading m="10px" fontSize="28px">
          {t("landing.looking_for_talent")}
        </Heading>
        <Link href="/developers">
          <ButtonGreen>{t("landing.search_devs")}</ButtonGreen>
        </Link>

        <Link href="/post-job">
          <ButtonBlue>{t("landing.post_job")}</ButtonBlue>
        </Link>

        <Link href="/post-gig">
          <ButtonRed>{t("landing.post_gig")}</ButtonRed>
        </Link>

        <Heading m="10px" fontSize="28px">
          {t("landing.looking_for_work")}
        </Heading>
        <Link href="/jobs">
          <ButtonGreen>{t("landing.search_gig")}</ButtonGreen>
        </Link>

        <Link href="/gigs">
          <ButtonRed>{t("landing.search_gig")}</ButtonRed>
        </Link>
      </Container>
    </Container>
  );
}
