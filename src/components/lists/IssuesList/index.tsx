import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Issue } from '~/@types';
import { IssueCard } from '~/components/cards/IssueCard';

interface IIssuesListProps {
  issues: Issue[]
}

export const IssuesList: React.FC<IIssuesListProps> = ({ issues }) => {
  return (
    <Flex
      as="section"
      mt="3rem"
      gap="1rem"
      wrap="wrap"
    >
      {
        issues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))
      }
    </Flex>
  );
}