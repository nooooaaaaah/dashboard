import React from 'react';
import {
  Category,
  ChartComponent,
  DataLabel,
  LineSeries,
  Legend,
  Tooltip,
  ColumnSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts';
import { lineGraphTemperatureData } from '../../data/dummy';

const LineChart = () => {
  return (
    <div>
      <ChartComponent
        primaryXAxis={'Category'}
        primaryYAxis={'(value)F'}
        dataSource={lineGraphTemperatureData}>
        <inject
          services={[
            ColumnSeries,
            LineSeries,
            Legend,
            Tooltip,
            DataLabel,
            Category,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            xName='Time'
            yName='Temperature(F)'
            name='Temperature'
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
