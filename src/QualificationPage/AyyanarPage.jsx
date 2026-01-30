import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import ExperienceLayout from "./ExperienceLayout";
import { GraduationCap, Trophy, BookOpen } from "lucide-react";

const AyyanarPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartTheme = {
    foreColor: "#78716c", // stone-500
    fontFamily: "Inter, sans-serif",
  };

  const colors = [
    "#D4B996", // tan
    "#B08968", // tan-dark
    "#a8a29e", // stone-400
    "#78716c", // stone-500
    "#57534e", // stone-600
    "#d6d3d1", // stone-300
  ];

  const barOptions = {
    chart: {
      toolbar: { show: false },
      foreColor: chartTheme.foreColor,
      fontFamily: chartTheme.fontFamily,
      background: "transparent"
    },
    colors: colors,
    plotOptions: {
      bar: { 
        distributed: true,
        borderRadius: 4,
        columnWidth: "60%",
      },
    },
    xaxis: {
      categories: ["Tamil", "English", "Maths", "Physics", "Chemistry", "CS"],
      title: { text: "Subjects", style: { color: "#78716c", fontWeight: 500 } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (val) => parseInt(val),
        style: { colors: "#78716c" },
      },
      title: { text: "Marks", style: { color: "#78716c", fontWeight: 500 } },
      grid: { borderColor: "#e7e5e4", strokeDashArray: 4 },
    },
    grid: { borderColor: "#e7e5e4", strokeDashArray: 4 },
    tooltip: { theme: "light" },
    dataLabels: { enabled: false }
  };

  const donutOptions = {
    chart: {
      toolbar: { show: false },
      foreColor: chartTheme.foreColor,
      fontFamily: chartTheme.fontFamily,
      background: "transparent"
    },
    colors: colors,
    labels: ["Tamil", "English", "Maths", "Physics", "Chemistry", "CS"],
    dataLabels: { enabled: false },
    stroke: { show: false },
    legend: { position: "bottom", markers: { radius: 12 } },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Average",
              color: "#78716c"
            }
          }
        }
      }
    }
  };

  const hsc2Series = [86, 81, 50, 69, 80, 81];
  const hsc1Series = [77, 67, 50, 69, 66, 87];
  const sslcSeries = [88, 80, 82, 91, 95];

  const achievements = [
    {
      title: "SSLC Excellence",
      description: "Achieved 87.2% in Secondary School Leaving Certificate with strong performance in Mathematics and Science.",
      icon: Trophy
    },
    {
      title: "HSC Consistency",
      description: "Completed Higher Secondary Education with a focus on Computer Science and Mathematics, laying the foundation for engineering.",
      icon: BookOpen
    }
  ];

  return (
    <ExperienceLayout
      companyName="Ayyanar Matriculation"
      role="Secondary & Higher Secondary"
      duration="May 2016 – Mar 2019"
      location="Sivakasi"
      type="education"
      icon={GraduationCap}
      technologies={["Mathematics", "Physics", "Chemistry", "Computer Science", "Biology"]}
      achievements={achievements}
    >
      <div className="space-y-12">
        {[
          {
            series: hsc2Series,
            title: "HSC (+2)",
            percentage: "75.5%",
            duration: "May 2018 – Mar 2019",
            categories: ["Tum", "Eng", "Mat", "Phy", "Che", "CS"] 
          },
          {
            series: hsc1Series,
            title: "HSC (+1)",
            percentage: "70%",
            duration: "May 2017 – Mar 2018",
            categories: ["Tum", "Eng", "Mat", "Phy", "Che", "CS"]
          },
          {
            series: sslcSeries,
            title: "SSLC (10th)",
            percentage: "87.2%",
            duration: "May 2016 – Apr 2017",
            categories: ["Tum", "Eng", "Mat", "Sci", "Soc"] 
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display">{item.title}</h3>
                <p className="text-sm text-stone-500 font-mono">{item.duration}</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-tan/10 border border-tan/20">
                <span className="text-sm font-bold text-tan-dark">Score: {item.percentage}</span>
              </div>
            </div>
            
            <div className="flex justify-center w-full h-[300px]">
              <Chart
                options={{
                  ...barOptions,
                  xaxis: { ...barOptions.xaxis, categories: item.categories || barOptions.xaxis.categories }
                }}
                series={[{ name: "Marks", data: item.series }]}
                type="bar"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </ExperienceLayout>
  );
};

export default AyyanarPage;
