import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { LineChart, SparkLine } from '../components/Charts';

import product9 from '../data/product9.jpg';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const Overview = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-300 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg'></div>
      </div>
    </div>
  );
};

export default Overview;
