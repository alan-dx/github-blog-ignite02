import { Flex, Image, Text } from "@chakra-ui/react";
import { FaBuilding, FaGithub, FaUserFriends } from "react-icons/fa";
import { InfoBadge } from "../InfoBadge";

export function Profile() {
  return (
    <Flex
      gap="2rem"
      p="2rem"
      bg="base.profile"
      w="100%"
      borderRadius="10px"
      boxShadow="0px 2px 28px rgba(0,0,0,0.2)"
    >
      <Image w="9.25rem" borderRadius="8px" src="https://www.github.com/alan-dx.png" alt="Foto de perfil do usuário" />
      <Flex flexDir="column" justify="flex-end">
        <Text as="h1" textStyle="title-l" color="base-title" >Alex Williamson</Text>
        <Text textStyle="text-m" color="base.text" mt="0.625rem">
          Lorem nulla qui quis minim. Sit commodo reprehenderit eiusmod reprehenderit magna. Nisi ullamco anim elit exercitation elit qui cillum proident.
        </Text>
        <Flex as="footer" gap="1.5rem" mt="1.5rem" >
          <InfoBadge icon={FaGithub} text="cammerrol" />
          <InfoBadge icon={FaBuilding} text="Rocketseat" />
          <InfoBadge icon={FaUserFriends} text="32 seguidores" />
        </Flex>
      </Flex>
    </Flex>
  );
}