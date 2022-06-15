import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Header, ThemeSettings, Sidebar } from './components';
// import all the pages
import {
  Overview,
  Batch,
  Batches,
  Calendar,
  ColorPicker,
  Dashboard,
  Notes,
  Tasks,
  Tent,
  Area,
  Bar,
  ColorMapping,
  HumidityChart,
  Line,
  Pie,
  Stacked,
  TemperatureChart,
} from './pages';

import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top Left'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'yellow-600', borderRadius: '100%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              {' '}
              <Sidebar />{' '}
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* Overview */}
              <Route path='/' element={<Overview />} />
              <Route path='/overview' element={<Overview />} />

              {/* pages */}
              <Route path='/batches' element='Batches' />
              <Route path='/batches/batch/:batchid' element={<Batch />} />
              <Route
                path='/batches/batch/:batchid/tent/:tentid'
                element={<tent />}
              />

              {/* Apps */}
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/notes' element={<Notes />} />

              {/* Dashboard */}
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
