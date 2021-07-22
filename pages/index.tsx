import Link from "next/link";
import { Button, Text, Link as UILink, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Charts PoC">
    <Flex direction="column" pt={2}>
      <Text fontSize="xl">Charts PoC with Recharts</Text>
      <Flex pt={4} pb={4}>
        <UILink as={Link} href="/body-weights">
          <Button size="xs" colorScheme="blue">
            Body Weights
          </Button>
        </UILink>
      </Flex>
    </Flex>
  </Layout>
);

export default IndexPage;
