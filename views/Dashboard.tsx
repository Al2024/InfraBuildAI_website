
import React from 'react';
import { IBCard, IBBadge } from '../components/UI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', usage: 4000, latency: 120 },
  { name: 'Tue', usage: 3000, latency: 132 },
  { name: 'Wed', usage: 2000, latency: 101 },
  { name: 'Thu', usage: 2780, latency: 134 },
  { name: 'Fri', usage: 1890, latency: 90 },
  { name: 'Sat', usage: 2390, latency: 110 },
  { name: 'Sun', usage: 3490, latency: 125 },
];

const MetricCard: React.FC<{ title: string; value: string; trend: string; isPositive: boolean }> = ({ title, value, trend, isPositive }) => (
  <IBCard className="p-0">
    <div className="flex justify-between items-start mb-2">
      <span className="text-sm font-medium text-slate-400">{title}</span>
      <IBBadge color={isPositive ? 'success' : 'error'}>{trend}</IBBadge>
    </div>
    <div className="text-3xl font-bold text-white">{value}</div>
  </IBCard>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Infrastructure Overview</h1>
          <p className="text-slate-400">Real-time status of your global clusters.</p>
        </div>
        <div className="flex gap-2">
          <IBBadge color="success" className="flex items-center gap-1.5 px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </IBBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="API Requests" value="2.4M" trend="+12.5%" isPositive={true} />
        <MetricCard title="Avg Latency" value="108ms" trend="-4.2%" isPositive={true} />
        <MetricCard title="Error Rate" value="0.04%" trend="+0.01%" isPositive={false} />
        <MetricCard title="Active Nodes" value="142" trend="stable" isPositive={true} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <IBCard className="lg:col-span-2" title="Traffic Volume" subtitle="Requests per day across all endpoints">
          <div className="h-80 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#f8fafc' }}
                  itemStyle={{ color: '#818cf8' }}
                />
                <Area type="monotone" dataKey="usage" stroke="#6366f1" fillOpacity={1} fill="url(#colorUsage)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </IBCard>

        <IBCard title="Recent Events" subtitle="Infrastructure logs">
          <div className="space-y-4 mt-2">
            {[
              { time: '12:45', msg: 'Cluster US-East scaled +4 nodes', type: 'info' },
              { time: '11:20', msg: 'Deployment successful: v2.4.1', type: 'success' },
              { time: '09:15', msg: 'Minor spike in API error rate', type: 'warning' },
              { time: '08:02', msg: 'Backup completed (42.5 GB)', type: 'info' },
              { time: '07:44', msg: 'New region provisioned: EU-North', type: 'success' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4 text-sm border-b border-slate-800 pb-3 last:border-0">
                <span className="text-slate-500 font-mono w-12">{log.time}</span>
                <span className="text-slate-300">{log.msg}</span>
              </div>
            ))}
          </div>
        </IBCard>
      </div>
    </div>
  );
};

export default Dashboard;
