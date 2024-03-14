import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxMDMzMjQzNHww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" h="100vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <Stack spacing={6}>
          <Heading as="h1" size="4xl">
            The Rockstars
          </Heading>
          <Text fontSize="2xl">World Tour 2023</Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="blue" as={Link} href="#tickets">
            Get Tickets
          </Button>
        </Stack>
      </Box>

      {/* About Section */}
      <Box p={10}>
        <Heading as="h2" size="2xl" mb={4}>
          About The Band
        </Heading>
        <Text fontSize="xl">The Rockstars are a high-energy rock band known for their electrifying live performances. With a passion for music and a dedication to their fans, they've been rocking stages around the world for over a decade.</Text>
      </Box>

      {/* Tour Dates Section */}
      <Box p={10} bg="gray.100">
        <Heading as="h2" size="2xl" mb={4}>
          Tour Dates
        </Heading>
        <Stack spacing={4}>
          <Flex justify="space-between">
            <Text>July 15 - New York, NY</Text>
            <Button leftIcon={<FaTicketAlt />} colorScheme="blue">
              Tickets
            </Button>
          </Flex>
          <Flex justify="space-between">
            <Text>July 20 - Los Angeles, CA</Text>
            <Button leftIcon={<FaTicketAlt />} colorScheme="blue">
              Tickets
            </Button>
          </Flex>
          <Flex justify="space-between">
            <Text>July 25 - Chicago, IL</Text>
            <Button leftIcon={<FaTicketAlt />} colorScheme="blue">
              Tickets
            </Button>
          </Flex>
        </Stack>
      </Box>

      {/* Music Section */}
      <Box p={10}>
        <Heading as="h2" size="2xl" mb={4}>
          Latest Release
        </Heading>
        <Flex>
          <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYWxidW0lMjBjb3ZlcnxlbnwwfHx8fDE3MTAzMzI0MzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" boxSize="200px" objectFit="cover" mr={8} />
          <Box>
            <Heading as="h3" size="xl" mb={2}>
              Rocking the World
            </Heading>
            <Text fontSize="lg" mb={4}>
              Check out our latest album featuring hit singles "Rock On" and "Forever Young".
            </Text>
            <Button leftIcon={<FaMusic />} colorScheme="blue">
              Listen Now
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" p={10}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 The Rockstars. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="#">
              <FaInstagram size={24} />
            </Link>
            <Link href="#">
              <FaTwitter size={24} />
            </Link>
            <Link href="#">
              <FaFacebook size={24} />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
