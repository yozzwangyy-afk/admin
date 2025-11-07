export default function StatCard({ title, value, change, icon }) {
  const isPositive = change.startsWith('+')
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          <p className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last month
          </p>
        </div>
        <div className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  )
}
