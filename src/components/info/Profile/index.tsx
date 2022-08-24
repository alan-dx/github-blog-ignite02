import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";
import { UserInfo } from "../../../@types/UserInfo";
import { InfoBadge } from "../InfoBadge";

interface IProfileProps {
  user: UserInfo
}

export const Profile: React.FC<IProfileProps> = ({ user }) => {

  return (
    <Flex
      as="section"
      p="2rem"
      gap="2rem"
      bg="base.profile"
      w="100%"
      borderRadius="10px"
      boxShadow="0px 2px 28px rgba(0,0,0,0.2)"
    >
      <Image w="9.25rem" borderRadius="8px" src={user.avatar_url} alt="Foto de perfil do usuário" />
      <Flex flexDir="column" justify={{ base: `flex-start`, md: 'flex-end' }}>
        <Flex as="header" align="center" justify="space-between" >
          <Text as="h1" textStyle={["title-s", null, "title-l"]} color="base-title" >{user.name}</Text>
          <Box
            borderBottomWidth='1px'
            borderBottomColor="transparent"
            _hover={{ borderBottomColor: 'blue.500', cursor: 'pointer' }}
          >
            <Link href={user.html_url} passHref>
              <Text
                as="a"
                textStyle="link"
                target="_blank"
                rel="noopener noreferrer"
                color="blue.500"

              >
                GITHUB
                <Icon ml="2" as={FaExternalLinkAlt} />
              </Text>
            </Link>
          </Box>
        </Flex>
        <Text display={{ base: `none`, md: 'block' }} textStyle="text-m" color="base.text" mt="0.625rem">
          {user.bio}
        </Text>
        <Flex as="footer" gap={{ base: `0.75rem`, md: '1.5rem' }} mt={["1rem", null, "1.5rem"]} wrap="wrap" >
          <InfoBadge icon={FaGithub} text={user.login} />
          {
            user.company && (
              <InfoBadge icon={FaBuilding} text={user.company} />
            )
          }
          <InfoBadge icon={FaUserFriends} text={user.followers.toString() + ` seguidores`} />
        </Flex>
      </Flex>
    </Flex>
  );
}