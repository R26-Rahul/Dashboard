import React from 'react'
import StaticGrid from '../static/staticGrid'
import Chartsection from './Chartsection'
import Tablesection from './Tablesection';
import ActivityFeeds from './ActivityFeeds';

function Dashboard() {
    return (
        <>
            <div className='space-y-6'>
                {/* status Grid */}
                <StaticGrid />
                {/* status chart */}
                <Chartsection />
                {/* tablesection */}
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
                    <div className='xl:col-span-2'>
                        <Tablesection />
                    </div>
                    <div>
                        <ActivityFeeds />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
