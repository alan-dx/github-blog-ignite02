import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaBuilding, FaGithub, FaUserFriends } from "react-icons/fa";
import { UserInfo } from "../../../@types/UserInfo";
import { InfoBadge } from "../InfoBadge";

interface IProfileProps {
  user: UserInfo
}

export const Profile: React.FC<IProfileProps> = ({ user }) => {

  return (
    <Flex
      gap="2rem"
      p="2rem"
      bg="base.profile"
      w="100%"
      borderRadius="10px"
      boxShadow="0px 2px 28px rgba(0,0,0,0.2)"
    >
      <Image w="9.25rem" borderRadius="8px" src={user.avatar_url} alt="Foto de perfil do usuário" />
      <Flex flexDir="column" justify={{ base: `flex-start`, md: 'flex-end' }}>
        <Text as="h1" textStyle={["title-s", null, "title-l"]} color="base-title" >{user.name}</Text>
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