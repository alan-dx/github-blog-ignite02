import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Input } from '~/components/inputs/Input';

interface ISearchIssue {
  handleFilterIssues: (_searchTerm: string) => Promise<void>
  searchCount: number
}

export function SearchIssue({ handleFilterIssues, searchCount }: ISearchIssue) {

  const [searchInput, setSearchInput] = React.useState('')

  return (
    <Flex flexDir="column" gap="0.75rem" mt="4.5rem">
      <Flex justify="space-between">
        <Text textStyle="title-s" color="base.subtitle">Publicações</Text>
        <Text textStyle="text-s" color="base.span">{searchCount} publicações</Text>
      </Flex>
      <Input
        placeholder='Buscar conteúdo'
        onChange={e => { setSearchInput(e.target.value) }}
        value={searchInput}
        onBlur={() => {
          handleFilterIssues(searchInput)
        }}
      />
    </Flex>
  );
}