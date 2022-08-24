import { Flex, Text } from '@chakra-ui/react';
import { Input } from '../../inputs/Input';

export function SearchIssue() {


  return (
    <Flex flexDir="column" gap="0.75rem" mt="4.5rem">
      <Flex justify="space-between">
        <Text textStyle="title-s" color="base.subtitle">Publicações</Text>
        <Text textStyle="text-s" color="base.span">6 publicações</Text>
      </Flex>
      <Input />
    </Flex>
  );
}