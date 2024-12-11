
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import WorkImg from '../image/workout.png'
import CalorieImg from '../image/calorie.png'
import ActivityImg from '../image/activity.png'
// import ProcessImg from '../image/process chart.png'

export default function Dashboard () {
  // Sample chart data for the Progress Chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories Burned",
        data: [300, 400, 350, 500, 450, 600, 700],
        borderColor: "#A30000",
        backgroundColor: "rgba(254, 0, 0,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="min-h-screen bg-tertiary font-hero-font" id="dashboard">
      {/* Header */}
      <header className="dashboard-color text-white py-4 text-center mb-5">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Fitness Tracker Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Workout Status */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <img
              src={WorkImg}
              alt="Workout"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Workout Status</h2>
              <p className="text-color">Completed Workouts: <span className="font-semibold">12</span></p>
              <p className="text-color">Total Hours: <span className="font-semibold">15 hrs</span></p>
              <p className="text-color">Active Days: <span className="font-semibold">5</span></p>
            </div>
          </div>

          {/* Calorie Tracker */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <img
              src={CalorieImg}
              alt="Calories"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">Calorie Tracker</h2>
              <p className="text-color">Calories Burned: <span className="font-semibold">2,300</span></p>
              <p className="text-color">Calories Consumed: <span className="font-semibold">1,800</span></p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <img
              src={ActivityImg}
              alt="Activities"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">Recent Activities</h2>
              <ul className="text-color">
                <li>- Morning Run: 5 km</li>
                <li>- Yoga Session: 30 mins</li>
                <li>- Strength Training: 45 mins</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Progress Chart</h2>
          <div className="h-64">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};

