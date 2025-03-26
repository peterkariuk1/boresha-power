import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { data } from "../assets/usagedummy";

export const EnergyBarChart = () => {
  return (
    // 📌 Makes the chart responsive to different screen sizes
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        {/* 📌 Bar chart with kWh as the data key and color #8884d8 */}
        <Bar dataKey="kWh" fill="#facb22b7" />
      </BarChart>
    </ResponsiveContainer>
  );
};
