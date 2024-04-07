'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function Savings() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>$1,244</CardTitle>
        <CardDescription>Monthly Spending</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[300px]">
        <Line
          data={{
            labels: [
              '2023-01',
              '2023-02',
              '2023-03',
              '2023-04',
              '2023-05',
              '2023-06',
              '2023-07',
            ],
            datasets: [
              {
                label: 'Savings Goal',
                data: [100, 120, 115, 134, 168, 132, 200],
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </CardContent>
    </Card>
  );
}
