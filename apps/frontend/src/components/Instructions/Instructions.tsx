import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "orange-bus.png",
    title: "Use public transport",
    description: "Take public buses & trains to your destination.",
  },
  {
    icon: "bus-ticket.png",
    title: "Take photo of the ticket",
    description: "Take a photo of your ticket and AI will review.",
  },
  {
    icon: "B3TR-Token-250x200.png",
    title: "Earn rewards",
    description: "Earn B3TR for using public transport.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 3 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
