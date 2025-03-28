import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { data } from "../assets/usagedummy";

export const EnergyBarChart1 = () => {
  return (
    // 📌 Makes the chart responsive to different screen sizes
    <ResponsiveContainer width="80%" height={150}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="kWh" fill="#d395ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};
