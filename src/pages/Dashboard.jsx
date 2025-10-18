import DashboardCards from "../components/DashboardCards";
import JobApplication from "../components/JobApplication";
import PlatformActivity from "../components/PlatformActivity";


function Dashboard() {
  return <div className="space-y-24 px-6 pb-6">
    <DashboardCards />
    <JobApplication />
    <PlatformActivity />
  </div>;
}

export default Dashboard;
