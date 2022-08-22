import { Container } from "@chakra-ui/react";
import React from "react";

interface IResponsiveContainer {
  children: React.ReactNode
}

export function ResponsiveContainer({ children }: IResponsiveContainer) {
  return (
    <Container maxW="55rem" >
      {children}
    </Container>
  );
}