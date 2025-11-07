export default function RecentActivity() {
  const activities = [
    { user: 'John Doe', action: 'placed new order', time: '2 min ago' },
    { user: 'Sarah Smith', action: 'updated profile', time: '5 min ago' },
    { user: 'Mike Johnson', action: 'cancelled order', time: '10 min ago' },
    { user: 'Emily Davis', action: 'made payment', time: '15 min ago' },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
          <div className="flex-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user}</span> {activity.action}
            </p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
