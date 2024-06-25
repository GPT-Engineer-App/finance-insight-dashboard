import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

const MetricCard = ({ title, value, trend }) => {
  const isPositive = trend.startsWith('+');

  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} shadow="md">
      <Stat>
        <StatLabel fontSize="lg">{title}</StatLabel>
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