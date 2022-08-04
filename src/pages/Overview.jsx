import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { LineChart, SparkLine } from '../components';

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
    <div className='mt-16'>
      <div className=''>
        <LineChart/>
      </div>
    </div>
  );
};

export default Overview;
