import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FundingChart({ data }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="center" hide />
          <YAxis />
          <Tooltip />
          <Bar dataKey="funding" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
