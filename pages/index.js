import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

// Banner Component with props for For SALE AND RENT
const Banner = ({
  purpose,
  title1,
  title2,
  description1,
  description2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <Flex
      flexwrap="wrap"
      justifyContent="center"
      alignItems="center"
      margin="10"
    >
      <Image src={imageUrl} width={500} height={300} alt="Banner" />
      <Box padding="5">
        <Text color="blackAlpha.100" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text
          fontSize="lg"
          paddingTop="3"
          paddingBottom="3"
          color="blackAlpha.100"
        >
          {description1}
          <br />
          {description2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <div>
      <h1>Properties</h1>
      <Box>
        <Banner
          purpose="Rent a Home"
          title1="Rental Homes for"
          title2="Everyone"
          description1="Explore Condominiums, HDBs, Landed Housing"
          description2="and more"
          buttonText="Explore Rental"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
      </Box>

      {/* Render Dyanmic Content from RapidAPI */}
      {/* Fetch Properties and map over them */}
      <Flex></Flex>
      <Banner
        purpose="Buy a Home"
        title1="Find, Buy, Invest your"
        title2="Dream Home"
        description1="Explore Condominiums, HDBs, Landed Housing"
        description2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
    </div>
  );
}
