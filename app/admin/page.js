import StatCard from '@/components/StatCard'
import RecentActivity from '@/components/RecentActivity'
import Chart from '@/components/Chart'

export default function DashboardPage() {
  const stats = [
    { title: 'Total Users', value: '12,402', change: '+12%', icon: '👥' },
    { title: 'Revenue', value: '$45,678', change: '+8%', icon: '💰' },
    { title: 'Orders', value: '1,567', change: '+23%', icon: '📦' },
    { title: 'Products', value: '289', change: '+5%', icon: '🛒' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Revenue Overview</h2>
            <Chart />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
