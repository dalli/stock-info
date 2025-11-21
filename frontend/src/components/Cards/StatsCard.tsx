import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  iconBgColor?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  iconBgColor = 'bg-primary'
}: StatsCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{value}</h3>
          {change && (
            <p className={`mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span className="font-medium">{change}</span>
              <span className="text-gray-600 ml-1">vs last month</span>
            </p>
          )}
        </div>
        <div className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBgColor} bg-opacity-10`}>
          <Icon className={`${iconBgColor.replace('bg-', 'text-')}`} size={28} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
