export default function RecentActivity() {
  const activities = [
    { user: 'John Doe', action: 'placed new order', time: '2 min ago', type: 'order' },
    { user: 'Sarah Smith', action: 'updated profile', time: '5 min ago', type: 'profile' },
    { user: 'Mike Johnson', action: 'cancelled order', time: '10 min ago', type: 'cancel' },
    { user: 'Emily Davis', action: 'made payment', time: '15 min ago', type: 'payment' },
    { user: 'Alex Wilson', action: 'registered new account', time: '20 min ago', type: 'register' },
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'order': return '🛒'
      case 'profile': return '👤'
      case 'cancel': return '❌'
      case 'payment': return '💰'
      case 'register': return '👋'
      default: return '📝'
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-lg">{getIcon(activity.type)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900 truncate">
              <span className="font-medium">{activity.user}</span> {activity.action}
            </p>
            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
