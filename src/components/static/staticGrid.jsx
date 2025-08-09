import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign, IndianRupee, ShoppingCart, User, Users } from 'lucide-react'
import React from 'react'

const stats = [
    {
        title: 'Total Revenue',
        value: '₹124,5%',
        change: "+ 12.5%",
        trend: 'up',
        icon: DollarSign,
        color: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
        title: 'Total Revenue',
        value: '₹124,5%',
        change: "+ 10.5%",
        trend: 'up',
        icon: IndianRupee,
        color: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
        title: 'Total Revenue',
        value: '$124,5%',
        change: "- 6.5%",
        trend: 'down',
        icon: Users,
        color: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
        title: 'Total Revenue',
        value: '$124,5%',
        change: "+ 2.5%",
        trend: 'up',
        icon: ShoppingCart,
        color: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: "text-emerald-600 dark:text-emerald-400"
    },
]

function StaticGrid() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2'>
            {stats.map((stats, index) => {
                return (
                    <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group' key={index}>
                        <div className='flex items-start justify-between'>
                            <div className='flex-1'>
                                <div className='flex items-center'>
                                    <div>
                                        <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 '>
                                            {stats.title}
                                        </p>
                                        <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4 '>
                                            {stats.value}
                                        </p>
                                    </div>
                                    <div className={`p-3 flex-1 flex justify-end rounded-xl group-hover:scale-110 transition-all duration-300`}>
                                        {<stats.icon className={` w-6 h-6 ${stats.textColor}`} />}
                                    </div>
                                </div>
                                <div className='flex items-center  '>
                                    {stats.trend === 'up' ? (<ArrowUpRight className='w-4 h-4 text-emerald-500' />) : (<ArrowDownRight className='w-4 h-4 text-red-500' />)}
                                    <span className={`text-sm font-semibold ${stats.trend === 'up' ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
                                    <span className='text-sm text-slate-500 dark:text-slate-400 ' >  VS Last Months</span>
                                </div>
                            </div>
                        </div>
                        {/* Progressbar */}
                        <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                            <div className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ${stats.color} `} style={{ width: stats.trend === 'up' ? '75%' : '45%' }} >
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default StaticGrid
