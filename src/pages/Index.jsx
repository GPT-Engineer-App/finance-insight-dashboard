import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import MetricCard from '../components/MetricCard';
import Chart from '../components/Chart';

const Index = () => {
  // Placeholder data for metrics
  const metrics = [
    { title: 'Revenue', value: '$500,000', trend: '+5%' },
    { title: 'Expenses', value: '$300,000', trend: '-2%' },
    { title: 'Cash Flow', value: '$200,000', trend: '+8%' },
    { title: 'Profit Margin', value: '40%', trend: '+3%' },
    { title: 'ROI', value: '15%', trend: '+1%' },
  ];

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Financial Dashboard</Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </SimpleGrid>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>Historical Trends</Heading>
          <Chart />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;