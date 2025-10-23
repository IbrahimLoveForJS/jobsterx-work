import Chart from "../components/Chart";
import DashboardCards from "../components/DashboardCards";
import JobApplication from "../components/JobApplication";
import PlatformActivity from "../components/PlatformActivity";
import Heading from "../components/Heading";

function Dashboard() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-6 pb-6 space-y-6">
        <DashboardCards />
        <JobApplication />
        <PlatformActivity />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
