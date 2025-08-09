import { Component, Zap, BarChart3, Calendar, CreditCard, FileText, LayoutDashboard, MessagesSquare, Package, ShoppingBag, Users, Settings, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const menuItems = [
    {
        id: 'dashboard',
        icon: LayoutDashboard,
        labelName: "Dashboard",
        active: true,
        badge: "New"
    },
    {
        id: "analytics",
        icon: BarChart3,
        labelName: 'Analytics',
        submenu: [
            { id: "overview", labelName: 'Overview' },
            { id: "report", labelName: 'Report' },
            { id: "insights", labelName: 'Insights' }
        ],
    },
    {
        id: "users",
        icon: Users,
        labelName: 'Users',
        count: "2.4k",
        submenu: [
            { id: "all-users", labelName: 'All Users' },
            { id: "roles", labelName: 'Roles & Permission' },
            { id: "activity", labelName: 'User Activity' }
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        labelName: 'E-commerce',
    },
    {
        id: "inventory",
        icon: Package,
        labelName: 'Inventory',
        count: "847"
    },
    {
        id: "messages",
        icon: MessagesSquare,
        labelName: 'Messages',
        badge: "34"
    },
    {
        id: "calendar",
        icon: Calendar,
        labelName: 'Calendar',
        count: "8"
    },
    {
        id: "reports",
        icon: FileText,
        labelName: 'Reports',
        count: "8"
    },
    {
        id: "setting",
        icon: Settings,
        labelName: 'Settings',
    },
];

const payload = {
    userName: "Rahul Rai",
    imgUrl: "https://avatars.githubusercontent.com/u/109171650?s=400&u=cd22f110484081347a3f56f329e142fe4f62cd10&v=4",
};

function Sidebar({ collapsed = false, currentPage = 'dashboard', onToggle, onPageChange }) {
    const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

    const toggleExpanded = (itemId) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        } else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };

    return (
        <div className={`${collapsed ? "w-20" : "w-72"} transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
            {/* Logo */}
            <div className='px-4 py-5 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-xl'>
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    {/* Conditional rendering */}
                    {!collapsed && (
                        <div>
                            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
                {menuItems.map((item) => {
                    const isExpanded = expandedItems.has(item.id);
                    const isActive = currentPage === item.id || item.active;
                    
                    return (
                        <div key={item.id}>
                            <button 
                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                    isActive 
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25" 
                                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                }`}
                                onClick={() => {
                                    if (item.submenu) {
                                        toggleExpanded(item.id);
                                    } else {
                                        onPageChange?.(item.id);
                                    }
                                }}
                            >
                                <div className='flex items-center space-x-3'>
                                    <item.icon className='w-5 h-5' />
                                    {/* Conditional rendering */}
                                    {!collapsed && (
                                        <>
                                            <span className='font-medium'>{item.labelName}</span>
                                            {/* If data available then print the data */}
                                            {item.badge && (
                                                <span className='px-2 py-1 text-xs bg-red-500 text-white rounded-full'>
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.count && (
                                                <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 dark:text-slate-300 rounded-full'>
                                                    {item.count}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                                {!collapsed && item.submenu && (
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                )}
                            </button>
                            
                            {/* Sub menus */}
                            {!collapsed && item.submenu && isExpanded && (
                                <div className="ml-8 mt-2 space-y-1">
                                    {item.submenu.map((subItem) => (
                                        <button
                                            key={subItem.id}
                                            className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                                                currentPage === subItem.id
                                                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                                            }`}
                                            onClick={() => onPageChange?.(subItem.id)}
                                        >
                                            {subItem.labelName}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* User Profile */}
            {!collapsed && (
                <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
                        <img 
                            src={payload.imgUrl} 
                            alt="user" 
                            className='w-10 h-10 rounded-full ring-2 ring-blue-500' 
                        />
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-medium text-slate-800 dark:text-white'>{payload.userName}</p>
                            <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administrator</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;




