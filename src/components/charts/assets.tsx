"use client"

import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const BarchartLayout = () => {
  const data = {
    labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], 
    datasets:[
      {
        label:'369',
        data:[10, 15, 9, 20, 25, 30, 15],
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
      }
    ]
  }

  const options = {
    responsive:true,
    plugins:{
      legend:{display:false},
      title:{display:false},
      tooltip:{enabled:true},
    },
    maintainAspectRation:false,
  }

  return (
    <>
      <Card>
    <CardHeader>
      <CardTitle>$ 32,000</CardTitle>
      <CardDescription>Assets</CardDescription>
    </CardHeader>
    <CardContent className='dark:text-white'>
      <Bar
      data={data}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: false
      }}
    ></Bar>
    </CardContent>
    
  </Card>
    </>
  )
}


export default BarchartLayout;