import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white shadow-md">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        {/* Search Bar */}
        <div className="hidden sm:block">
          <div className="relative">
            <button className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={20} className="text-gray-400" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-gray-300 bg-transparent py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary xl:w-96"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* Notification */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-red-500">
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            </span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button className="flex items-center gap-4">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black">John Doe</span>
                <span className="block text-xs text-gray-500">Admin</span>
              </span>
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
