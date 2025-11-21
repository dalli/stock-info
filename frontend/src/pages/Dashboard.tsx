import { DollarSign, TrendingUp, Users, Activity } from 'lucide-react';
import StatsCard from '../components/Cards/StatsCard';
import LineChartComponent from '../components/Charts/LineChartComponent';
import BarChartComponent from '../components/Charts/BarChartComponent';
import StocksTable from '../components/Dashboard/StocksTable';

const Dashboard = () => {
  // Sample data
  const statsData = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      iconBgColor: 'bg-blue-500'
    },
    {
      title: 'Total Profit',
      value: '$28,456',
      change: '+8.2%',
      isPositive: true,
      icon: TrendingUp,
      iconBgColor: 'bg-green-500'
    },
    {
      title: 'Total Users',
      value: '3,456',
      change: '+2.1%',
      isPositive: true,
      icon: Users,
      iconBgColor: 'bg-purple-500'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '-3.4%',
      isPositive: false,
      icon: Activity,
      iconBgColor: 'bg-orange-500'
    }
  ];

  const lineChartData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 2000, profit: 9800 },
    { name: 'Apr', revenue: 2780, profit: 3908 },
    { name: 'May', revenue: 1890, profit: 4800 },
    { name: 'Jun', revenue: 2390, profit: 3800 },
    { name: 'Jul', revenue: 3490, profit: 4300 },
  ];

  const barChartData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
  ];

  const stocksData = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 178.52, change: 2.34, change_percent: 1.33, volume: 45234567 },
    { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.87, change: -1.23, change_percent: -0.85, volume: 23456789 },
    { id: 3, symbol: 'MSFT', name: 'Microsoft Corp.', price: 412.45, change: 5.67, change_percent: 1.39, volume: 34567890 },
    { id: 4, symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.25, change: 3.21, change_percent: 1.83, volume: 28901234 },
    { id: 5, symbol: 'TSLA', name: 'Tesla Inc.', price: 242.84, change: -4.56, change_percent: -1.84, volume: 67890123 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <LineChartComponent
          data={lineChartData}
          title="Revenue & Profit Overview"
          dataKey1="revenue"
          dataKey2="profit"
          dataKey1Name="Revenue"
          dataKey2Name="Profit"
        />
        <BarChartComponent
          data={barChartData}
          title="Weekly Sales"
          dataKey="sales"
          dataKeyName="Sales"
        />
      </div>

      {/* Stocks Table */}
      <StocksTable stocks={stocksData} />
    </div>
  );
};

export default Dashboard;
