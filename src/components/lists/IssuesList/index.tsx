import { Flex } from '@chakra-ui/react';
import { IssueCard } from '../../cards/IssueCard';

export function IssuesList() {
  return (
    <Flex
      as="section"
      mt="3rem"
      gap="1rem"
      wrap="wrap"
    >
      <IssueCard />
      <IssueCard />
      <IssueCard />
      <IssueCard />
      <IssueCard />
    </Flex>
  );
}