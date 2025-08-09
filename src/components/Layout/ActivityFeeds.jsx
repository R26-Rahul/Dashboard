import { Clock, ShoppingCart, User, Users } from 'lucide-react'
import React from 'react'
const Activites = [
    {
        id: 1,
        type: 'user',
        icon: User,
        title: 'New user registered',
        description: 'John Smith created an account',
        time: '2 minuntes ago',
        color: 'text-blue-500',
        bgcolor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
        id: 2,
        type: 'order',
        icon: ShoppingCart,
        title: 'New order received',
        description: 'orders #3847 forn $2,453',
        time: '2 minuntes ago',
        color: 'text-blue-500',
        bgcolor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
        id: 3,
        type: 'users',
        icon: Users,
        title: 'New user registered',
        time: '2 minuntes ago',
        color: 'text-blue-500',
        bgcolor: 'bg-blue-100 dark:bg-blue-900/30',
    },
]

function ActivityFeeds() {
    return (
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ' >
            <div className='p-6 border border-slate-200/50 dark:border-slate-700/50'>
                <div >
                    <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                        Activity Feeds
                    </h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                        Recent System Activites
                    </p>
                </div>
                <button className='text-blue-500 hover:text-blue-700 font-medium'>
                    view All
                </button>
            </div>
            <div className='p-6'>
                {
                    Activites.map((Activites) => (
                        <div className='space-y-4'>
                            <div key={Activites.id} className='flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                                <div className={`p-2 rounded-lg ${Activites.bgcolor}`}>
                                    <Activites.icon className={`w-4 h-4 ${Activites.color}`} />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h4 className='text-sm text-slate-600 dark:text-slate-400 truncate'>{Activites.title}</h4>
                                    <p className='text-sm text-slate-600 dark:text-slate-400 truncate'>{Activites.description}</p>
                                    <div className='flex items-center-safe space-x-1 mt-1'>
                                        <Clock className='w-3 h-3 text-slate-400' />
                                        <span className='text-xs text-slate-500 dark:text-slate-400'>{Activites.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActivityFeeds