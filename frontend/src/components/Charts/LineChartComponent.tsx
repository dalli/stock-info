import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartComponentProps {
  data: any[];
  title: string;
  dataKey1: string;
  dataKey2?: string;
  dataKey1Name: string;
  dataKey2Name?: string;
}

const LineChartComponent = ({
  data,
  title,
  dataKey1,
  dataKey2,
  dataKey1Name,
  dataKey2Name
}: LineChartComponentProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey1}
            stroke="#3C50E0"
            strokeWidth={2}
            name={dataKey1Name}
            dot={{ fill: '#3C50E0', r: 4 }}
            activeDot={{ r: 6 }}
          />
          {dataKey2 && (
            <Line
              type="monotone"
              dataKey={dataKey2}
              stroke="#80CAEE"
              strokeWidth={2}
              name={dataKey2Name}
              dot={{ fill: '#80CAEE', r: 4 }}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
