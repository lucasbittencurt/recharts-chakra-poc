import React, { ReactNode } from "react";
import Head from "next/head";

import { Container, Flex, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW="xl">
      <Flex pb={2} direction="column">
        {children}
      </Flex>
      <hr />
      <Flex justify="space-between">
        <Text fontSize="xs">Made by Lucas Filipe Bittencurt</Text>
        <Text fontSize="xs">lucas.bittencurt@nearform.com</Text>
      </Flex>
    </Container>
  </div>
);

export default Layout;
