import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Icon } from "@chakra-ui/react";
import { FaDollarSign, FaFileInvoiceDollar, FaChartLine, FaPercentage, FaChartPie } from 'react-icons/fa';

const iconMap = {
  FaDollarSign,
  FaFileInvoiceDollar,
  FaChartLine,
  FaPercentage,
  FaChartPie
};

const MetricCard = ({ title, value, trend, icon }) => {
  const isPositive = trend.startsWith('+');
  const IconComponent = iconMap[icon];

  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} shadow="md">
      <Stat>
        <StatLabel fontSize="lg">
          <Icon as={IconComponent} mr={2} />
          {title}
        </StatLabel>
        <StatNumber fontSize="2xl">{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={isPositive ? 'increase' : 'decrease'} />
          {trend}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default MetricCard;