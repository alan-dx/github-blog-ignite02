import { Flex, Text } from '@chakra-ui/react';

export function IssueCard() {
  return (
    <Flex
      bg="base.post"
      flexDir="column"
      maxW={{ base: "100%", lg: "26rem" }}
      borderRadius="10px"
      p="2rem"
      borderWidth="2px"
      borderColor="transparent"
      _hover={{
        borderColor: "base.span",
        cursor: "pointer"
      }}
    >
      <Flex>
        <Text as="strong" flex="1" mr="1rem" display="block" textStyle="title-m" color="base.title">JavaScript data types and data structures</Text>
        <Text as="small" whiteSpace="nowrap" textStyle="text-s" color="base.span" mt="0.3rem">Há 1 dia</Text>
      </Flex>
      <Text textStyle="text-m" color="base.text" mt="1.25rem" noOfLines={4}>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available
      </Text>
    </Flex>
  );
}