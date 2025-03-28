import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "../assets/usagedummy";

// 📌 Colors for different days in the Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A", "#550088", "#FF3333"];

// 📌 Custom label function to show day names inside segments
const renderCustomizedLabel = ({ name, cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Position label in the middle
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
      {name} {/* 📌 Displays day name */}
    </text>
  );
};

export const EnergyPieChart = () => {
  return (
    // 📌 Makes the Pie Chart responsive
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        {/* 📌 Shows tooltips when hovering over slices */}
        <Tooltip />

        {/* 📌 The Pie component
            - `dataKey="kWh"`: Uses kWh as the data source
            - `nameKey="name"`: Uses the day name for labeling
            - `cx="50%"`, `cy="50%"`: Centers the pie chart
            - `outerRadius={100}`: Defines the size of the chart
            - `label`: Displays labels on the slices
        */}
        <Pie data={data} dataKey="kWh" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={renderCustomizedLabel}> // 📌 Use custom function for labels inside
          {/* 📌 Assigns different colors to each slice */}
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
