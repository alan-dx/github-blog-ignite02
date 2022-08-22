import { Flex, Icon, Text } from "@chakra-ui/react";

interface IInfoBadge {
  icon: any
  text: string
}

export function InfoBadge({ icon, text }: IInfoBadge) {
  return (
    <Flex align="center" gap="0.5rem" >
      <Icon as={icon} opacity="0.3" />
      <Text textStyle="text-m" as="span" color="base.subtitle">{text}</Text>
    </Flex>
  );
}