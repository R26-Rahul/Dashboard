import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'
const recentOrders = [
    {
        id: '#1322',
        customer: 'Rahul Rai',
        product: 'MacBook Pro 16',
        amount: '₹ 2,303',
        status: 'completed',
        date: '2025-01-02'
    },
    {
        id: '#1322',
        customer: 'Rahul Rai',
        product: 'MacBook Pro 16',
        amount: '₹ 2,303',
        status: 'completed',
        date: '2025-01-02'
    },
    {
        id: '#1322',
        customer: 'Mukesh',
        product: 'MacBook Pro 16',
        amount: '₹ 2,303',
        status: 'cancelled',
        date: '2025-01-02'
    },
    {
        id: '#1323',
        customer: 'Ram singh',
        product: 'MacBook Pro 16',
        amount: '₹ 2,303',
        status: 'pending',
        date: '2025-01-02'
    },
    {
        id: '#1322',
        customer: 'sharma',
        product: 'MacBook Pro 16',
        amount: '₹ 2,303',
        status: 'completed',
        date: '2025-01-02'
    },
]

const topProducts = [
    {
        name: 'MacBook Pro 16',
        sales: 1246,
        revenue: "₹ 2,340",
        trend: 'up',
        change: '+12%'
    },
    {
        name: 'MacBook Pro 16',
        sales: 1246,
        revenue: "₹ 2,340",
        trend: 'up',
        change: '+12%'
    },
    {
        name: 'MacBook Pro 16',
        sales: 1246,
        revenue: "₹ 2,340",
        trend: 'down',
        change: '- 12%'
    },
    {
        name: 'MacBook Pro 16',
        sales: 1246,
        revenue: "₹ 2,340",
        trend: 'up',
        change: '+12%'
    },
]
function Tablesection() {

    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-xl p-2";
            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-xl p-2";
            case "cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-xl p-2";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400 rounded-xl p-2";
        }
    }
    return (
        <div className='space-y-6'>
            <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Recent Orders
                            </h3>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                                Latest customer orders
                            </p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700'>view All</button>
                    </div>
                </div>
                {/* Table */}
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead >
                            <tr>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Order ID
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Product
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Amount
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Status
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index} className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors '>
                                    <td className='p-4'>
                                        <span className='text-sm font-medium text-slate-800 dark:text-white '>
                                            {order.id}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm font-medium text-slate-800 dark:text-white '>
                                            {order.customer}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm font-medium text-slate-800 dark:text-white '>
                                            {order.amount}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <span className={`text-sm font-medium text-slate-800 dark:text-white ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm font-medium text-slate-800 dark:text-white '>
                                            <MoreHorizontal className='w-4 h-4' />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            {/* Top Producats */}
            <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden '>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 '>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-bold text-slate-800 dark:text-white'>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Top Products
                            </h3>
                        </div>
                        <div>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                                Best performing products
                            </p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All </button>
                    </div>
                    {/* Dynamic Data */}
                    <div className='p-6 space-y-4 '>
                        {topProducts.map((products, index) => (
                            <div className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                                <div className='flex-1'>
                                    <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                                        {products.name}
                                    </h4>
                                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                                        {products.sales}
                                    </p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-sm font-semibold text-slate-800 dark:text-white'>
                                        {products.revenue}
                                    </p>

                                    <div className=' flex items-center space-x-1'>
                                        {products.trend === 'up' ?
                                            (<TrendingUp className='w-3 h-3 text-emerald-500' />)
                                            : (<TrendingDown className='w-3 h-3 text-red-500' />)}

                                        <span className={`text-xs font-medium ${products.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{products.change}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Tablesection