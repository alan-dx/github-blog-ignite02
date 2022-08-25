import { Flex, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useRouter } from 'next/router';
import React from 'react';
import { Issue } from '~/@types';

interface IIssueCardProps {
  issue: Issue
}

export const IssueCard: React.FC<IIssueCardProps> = ({ issue }) => {

  const router = useRouter()

  function handleNavigateToPostPage() {
    router.push(`/post/${issue.number}`)
  }

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
      onClick={handleNavigateToPostPage}
    >
      <Flex>
        <Text as="strong" flex="1" mr="1rem" display="block" textStyle="title-m" color="base.title">{issue.title}</Text>
        <Text as="small" whiteSpace="nowrap" textStyle="text-s" color="base.span" mt="0.3rem">{formatDistanceToNow(new Date(issue.created_at), {
          locale: ptBr,
          addSuffix: true
        })}</Text>
      </Flex>
      <Text textStyle="text-m" color="base.text" mt="1.25rem" noOfLines={4}>
        {issue.body.substring(2, issue.body.indexOf('.**') + 1)}
      </Text>
    </Flex>
  );
}