import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Link from "next/link";
import React from "react";
import { FaCalendar, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Issue } from "../../../@types";
import { InfoBadge } from "../InfoBadge";

interface IProfileProps {
  issue: Issue
}

export const PostTitle: React.FC<IProfileProps> = ({ issue }) => {
  if (!issue.user) {
    return null
  }

  return (
    <Flex
      as="section"
      layerStyle="base-large-card"
    >
      <Flex w="100%" flexDir="column" justify={{ base: `flex-start`, md: 'flex-end' }}>
        <Flex as="header" align="center" justify="space-between" >
          <Box
            borderBottomWidth='1px'
            borderBottomColor="transparent"
            _hover={{ borderBottomColor: 'blue.500', cursor: 'pointer' }}
          >
            <Link href={`/`} passHref>
              <Text
                as="a"
                textStyle="link"
                color="blue.500"
              >
                <Icon mr="2" as={FaChevronLeft} />
                VOLTAR
              </Text>
            </Link>
          </Box>
          <Box
            borderBottomWidth='1px'
            borderBottomColor="transparent"
            _hover={{ borderBottomColor: 'blue.500', cursor: 'pointer' }}
          >
            <Link href={issue.url} passHref>
              <Text
                as="a"
                textStyle="link"
                target="_blank"
                rel="noopener noreferrer"
                color="blue.500"

              >
                VER NO GITHUB
                <Icon ml="2" as={FaExternalLinkAlt} />
              </Text>
            </Link>
          </Box>
        </Flex>
        <Text as="h1" textStyle={["title-s", null, "title-l"]} color="base.title" mt="1.25rem" >{issue.title}</Text>
        <Flex as="footer" gap={{ base: `0.75rem`, md: '1.5rem' }} mt="0.5rem" wrap="wrap" >
          <InfoBadge icon={FaGithub} text={issue.user.login} />
          <InfoBadge
            icon={FaCalendar}
            text={formatDistanceToNow(new Date(issue.created_at), {
              locale: ptBr,
              addSuffix: true
            })}
          />
          <InfoBadge icon={FaComment} text={issue.comments + ` comentários`} />
        </Flex>
      </Flex>
    </Flex>
  );
}