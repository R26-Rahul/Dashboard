import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun, X } from 'lucide-react'
import React, { useState } from 'react'

function Header({ onToggleSidebar, onToggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        onToggleSidebar?.();
    };
    return (
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
            <div className='flex items-center justify-between'>
                {/* Left section */}
                <div className='flex items-center space-x-4'>
                    <button 
                        onClick={toggleMenu}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            isMenuOpen 
                                ? 'bg-blue-500 text-white shadow-lg' 
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                    >
                        {isMenuOpen ? <X /> :( <Menu className={`w-5 h-5 transition-transform duration-200 `} />
                        )}
                    </button>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>Dashboard</h1>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>Welcome back, Alex! Here's what's happening today</p>
                    </div>
                </div>

                {/* Center - Search */}
                <div className='flex-1 max-w-md mx-8'>
                    <div className='relative'>
                        <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                        <input 
                            type="text" 
                            placeholder='Search anything...'
                            className='w-full pl-10 pr-12 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                        />
                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'>
                            <Filter className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                {/* Right section */}
                <div className='flex items-center space-x-2'>
                    {/* New button */}
                    <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all'>
                        <Plus className='w-4 h-4' />
                        <span className='text-sm font-medium'>NEW</span>
                    </button>

                    {/* Theme toggle */}
                    <button 
                        onClick={onToggleTheme}
                        className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                    > 
                        <Sun className='w-5 h-5' />
                    </button>

                    {/* Notifications */}
                    <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Bell className='w-5 h-5' />
                        <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
                            3
                        </span>
                    </button>

                    {/* Settings */}
                    <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'> 
                        <Settings className='w-5 h-5' />
                    </button>

                    {/* User Profile */}
                    <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700'>
                        <img 
                            src='https://avatars.githubusercontent.com/u/109171650?s=400&u=cd22f110484081347a3f56f329e142fe4f62cd10&v=4' 
                            alt="User profile"
                            className='w-8 h-8 rounded-full ring-2 ring-blue-500 object-cover'
                        />
                        <div className='hidden md:block'>
                            <p className='text-sm font-medium text-slate-800 dark:text-white'>Rahul Rai</p>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                        </div>
                        <button className='p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors'>
                            <ChevronDown className='w-4 h-4 text-slate-400' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header