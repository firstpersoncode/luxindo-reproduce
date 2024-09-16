import React from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Can foreigners buy a property in Bali?",
      answer: "Yes, foreigners can buy property in Bali, but with certain restrictions. They can typically obtain long-term leasehold rights.",
    },
    {
      question: "How does buying a property in Bali work?",
      answer: "The process involves finding a property, negotiating the price, conducting due diligence, and finalizing the transaction with legal assistance.",
    },
    {
      question: "Is buying a property in Bali worth it?",
      answer: "It can be, depending on your goals. Bali's property market has shown growth, and it can provide rental income or serve as a vacation home.",
    },
    {
      question: "What is the price of a property for sale in Bali?",
      answer: "Prices vary widely based on location, size, and type. Villas can range from $100,000 to several million dollars.",
    },
    {
      question: "Are there any taxes or fees I need to consider when buying a property in Bali?",
      answer: "Yes, there are various taxes and fees, including transfer tax, notary fees, and annual property tax.",
    },
  ];

  return (
    <Box mt={16}>
      <Heading as="h2" size="lg" textTransform="uppercase" mb={8}>
        Common Questions About Buying Property in Bali
      </Heading>
      <Accordion allowMultiple>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <h3>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQSection;