import dynamic from 'next/dynamic';
import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { FullPage } from 'components';
import { NextPage } from 'next';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacity: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 40, 2, 4],
  },
];

const Dashboard: NextPage = () => {
  return (
    <FullPage>
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        alignContent="flex-start"
      >
        <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Incritos da semana
          </Text>
          <Chart type="area" height={160} options={options} series={series} />
        </Box>
        <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="lg" mb="4">
            Taxa de abertura
          </Text>
          <Chart type="area" height={160} options={options} series={series} />
        </Box>
      </SimpleGrid>
    </FullPage>
  );
};

export default Dashboard;
