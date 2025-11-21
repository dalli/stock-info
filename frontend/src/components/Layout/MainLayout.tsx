import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ml-72">
        <Header />
        <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
