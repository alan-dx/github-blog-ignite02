import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      align="center"
      justifyContent={{
        base: 'center',
        lg: 'space-between'
      }}
      as="header"
      bgGradient='linear(to-b, base.profile, base.post)'
      h="18.5rem"
    >
      <Image display={{ base: 'none', lg: 'block' }} src="/images/header-left-effect.svg" alt="" />
      <Image src="/images/logo.svg" alt="" />
      <Image display={{ base: 'none', lg: 'block' }} src="/images/header-right-effect.svg" alt="" />
    </Flex>
  );
}