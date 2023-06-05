import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer height={215} width="99%">
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis tickLine={false} dataKey="name" />
        <YAxis
          type="number"
          domain={[0, 504]}
          tickCount={6}
          axisLine={false}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400, 500]}
        />

        <Line dot={false} type="monotone" dataKey="guest" stroke="#E9A0A0" />
        <Line dot={false} type="monotone" dataKey="user" stroke="#9BDD7C" />
      </LineChart>
    </ResponsiveContainer>
  );
}
