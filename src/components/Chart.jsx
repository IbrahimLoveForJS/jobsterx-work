import { Briefcase, Linkedin } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const careerTimelineData = [
  {
    company: "TechCorp Inc.",
    role: "Senior Developer",
    years: "2021-2024",
    type: "Enterprise",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    years: "2019-2021",
    type: "Startup",
  },
  {
    company: "Freelance Work",
    role: "Consultant",
    years: "2018-2019",
    type: "Freelance",
  },
];

const COLORS = ["#3A0CA3", "#7209B7", "#4361EE"]; // indigo-600, purple-500, pink-500
const industryDistributionData = [
  { name: "Technology", value: 60, color: COLORS[0] },
  { name: "Finance", value: 25, color: COLORS[1] },
  { name: "Health care", value: 15, color: COLORS[2] },
];

const Chart = () => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="semibold"
        fontFamily="montserrat"
        fontSize={18}
        style={{ filter: "drop-shadow(0 0 2px #000)" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const TimelineItem = ({ company, role, years, type, isLast }) => (
    <div className="flex relative items-start">
      {/* Icon with gradient background */}
      <div className="flex flex-col items-center mr-4 relative">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-10"
          style={{
            background: "linear-gradient(180deg, #3A0CA3 70%, #7209B7 100%)",
          }}
        >
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        {/* Connection line */}
        {!isLast && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#3A0CA3]"></div>
        )}
      </div>

      {/* Timeline card */}
      <div className="flex-grow p-4 bg-gray-50 rounded-xl mb-6 shadow-lg flex justify-between items-start transition duration-200 hover:shadow-2xl hover:bg-white">
        <div>
          <h4 className="text-lg font-bold text-gray-800">{company}</h4>
          <p className="text-sm font-semibold text-gray-600">{role}</p>
          <p className="text-xs text-gray-500">{years}</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
          {type}
        </span>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Journey</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Career Timeline */}
        <div className="p-6 rounded-xl shadow-xl bg-white flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Career Timeline
              </h3>
              <p className="text-sm text-gray-500 font-montserrat">
                Your professional growth over the years
              </p>
            </div>
            <button className="flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition">
              <Linkedin className="w-4 h-4 mr-1" /> Share on LinkedIn
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-montserrat inline-block text-xs font-medium px-4  mb-6 bg-white py-3 rounded-full border border-black max-w-[200px]">
              2.0 years average tenure
            </span>
          </div>

          <div className="relative">
            {careerTimelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === careerTimelineData.length - 1}
                className=""
              />
            ))}
          </div>
        </div>

        {/* Industry Distribution */}
        {/* Industry Distribution */}
        <div className="p-6 rounded-xl shadow-xl bg-white flex flex-col items-center">
          {/* Header */}
          <div className="flex justify-between items-center w-full mb-2">
            <h3 className="text-xl font-bold text-black font-montserrat">
              Industry Distribution
            </h3>
            <button className="flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition">
              <Linkedin className="w-4 h-4 mr-1" /> Share on LinkedIn
            </button>
          </div>

          {/* Subtitle below header */}
          <p className="text-sm text-[#5B5B5B] font-montserrat mb-6 w-full">
            Experience breakdown across sectors
          </p>

          {/* Pie Chart */}
          <div className="w-full max-w-xs h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={industryDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }}
                >
                  {industryDistributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke={entry.color}
                      strokeWidth={2}
                      className="cursor-pointer transition-all duration-200 hover:opacity-90"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend below chart */}
          {/* Legend below chart */}
          {/* Legend */}
          <div className="flex justify-between gap-x-4 text-sm font-medium text-gray-700 mb-2">
            {industryDistributionData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
