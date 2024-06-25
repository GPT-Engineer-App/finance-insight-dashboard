import React, { useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack, HStack, Select } from "@chakra-ui/react";
import { FaCalendarAlt } from 'react-icons/fa';
import MetricCard from '../components/MetricCard';
import Chart from '../components/Chart';

const Index = () => {
  const [dateRange, setDateRange] = useState('7d');

  // Placeholder data for metrics
  const metrics = [
    { title: 'Revenue', value: '$500,000', trend: '+5%', icon: 'FaDollarSign' },
    { title: 'Expenses', value: '$300,000', trend: '-2%', icon: 'FaFileInvoiceDollar' },
    { title: 'Cash Flow', value: '$200,000', trend: '+8%', icon: 'FaChartLine' },
    { title: 'Profit Margin', value: '40%', trend: '+3%', icon: 'FaPercentage' },
    { title: 'ROI', value: '15%', trend: '+1%', icon: 'FaChartPie' },
  ];

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Heading as="h1" size="xl">Financial Dashboard</Heading>
          <HStack>
            <FaCalendarAlt />
            <Select value={dateRange} onChange={handleDateRangeChange}>
              <option value="7d">Last 7 days</option>
              <option value="1m">Last month</option>
              <option value="3m">Last 3 months</option>
              <option value="1y">Last year</option>
            </Select>
          </HStack>
        </HStack>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </SimpleGrid>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>Historical Trends</Heading>
          <Chart dateRange={dateRange} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;