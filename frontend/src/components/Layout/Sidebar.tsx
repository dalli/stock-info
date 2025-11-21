import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  BarChart3,
  Settings,
  Users,
  FileText,
  Calendar,
  Mail
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/stocks', icon: TrendingUp, label: 'Stocks' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/messages', icon: Mail, label: 'Messages' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-[#1C2434] duration-300 ease-linear">
      {/* Logo */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="text-primary" size={32} />
          <span className="text-2xl font-bold text-white">Stock Info</span>
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-400">MENU</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-gray-700 ${
                        isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
