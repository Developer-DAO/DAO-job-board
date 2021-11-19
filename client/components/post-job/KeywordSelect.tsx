import {skills} from '../../constants/skills';

import {Box, Heading, Container, Flex, Text, Link, Image, SimpleGrid, HStack, Tag, TagLabel} from "@chakra-ui/react"

export default function KeywordSelect() {

  return (
    <Box>

      {skills.map((skill, index) => (
        <Container key={index}>
          <p>{skill}</p>
        </Container>
      ))}

    </Box>
  )
}
