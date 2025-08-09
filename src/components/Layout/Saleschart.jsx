import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    {
        name: 'Electronics',
        value: 45,
        color: '#3b82f6'
    },
    {
        name: 'Clothing',
        value: 30,
        color: '#8b5cf6'
    },
    {
        name: 'Books',
        value: 15,
        color: '#18b981'
    },
    {
        name: 'Others',
        value: 10,
        color: '#f59e8b'
    },
]



const Saleschart = () => {
    return (
        <div className='bg-white/80 dark:bg-slate-900 backdrop-b-xl rounded-blur-xl border-slate-200/50 dark:border-slate-700/50 border rounded-b-2xl p-6'>
            <div className='mb-6'>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                    Sales by Cateogry
                </h3>
                <p className='text-sm text-slate-800 dark:text-white'>
                    Production Distrbution
                </p>
            </div>
            <div className='h-50'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={40}
                            paddingAngle={5}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`${entry.color}`} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{
                            backgroundColor: 'rgba(255,255,255, 0.95)',
                            border: 'none',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }} />

                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='space-y-3'>
                {data.map((item, index) => {
                    return (
                        <div className='flex items-center justify-between' key={index}>
                            <div className='flex items-center space-x-3'>
                                <div className='w-3 h-3 rounded-full ' style={{ background: item.color }} />
                                <span className='text-sm font-semibold text-slate-600 dark:text-slate-400'>{item.name}</span>
                            </div>
                            <div className='text-shadow-amber-400 text-sm font-semibold text-slate-600 dark:text-white'>
                                 {item.value}%
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Saleschart