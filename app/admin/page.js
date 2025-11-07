import StatCard from '../components/StatCard';
import RecentActivity from '../components/RecentActivity';
import Chart from '../components/Chart';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', icon: '👥' },
    { title: 'Revenue', value: '$45,678', change: '+8%', icon: '💰' },
    { title: 'Orders', value: '567', change: '+23%', icon: '📦' },
    { title: 'Products', value: '89', change: '+5%', icon: '🛒' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <Chart />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
