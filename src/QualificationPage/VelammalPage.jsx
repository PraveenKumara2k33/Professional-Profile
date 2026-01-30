import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import ExperienceLayout from "./ExperienceLayout";
import { GraduationCap, BookOpen, Star } from "lucide-react";

const VelammalPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

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
    "#E6D5C3", // tan-light
    "#1c1917", // stone-900
  ];

  const barChartOptions = {
    chart: {
      id: "semester-performance",
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
      categories: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"],
      title: {
        text: "Semester",
        style: { color: "#78716c", fontWeight: 500 },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 10,
      tickAmount: 5,
      title: {
        text: "GPA",
        style: { color: "#78716c", fontWeight: 500 },
      },
      grid: {
        borderColor: "#e7e5e4", // stone-200
        strokeDashArray: 4,
      },
    },
    grid: {
      borderColor: "#e7e5e4",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "light",
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      },
    },
    dataLabels: { enabled: false }
  };

  const donutChartOptions = {
    chart: {
      id: "semester-performance-mobile",
      toolbar: { show: false },
      foreColor: chartTheme.foreColor,
      fontFamily: chartTheme.fontFamily,
      background: "transparent"
    },
    colors: colors,
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Average",
              color: "#78716c",
              formatter: () => "8.56"
            }
          }
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    legend: { 
      position: "bottom",
      markers: { radius: 12 },
      itemMargin: { horizontal: 10, vertical: 5 }
    },
  };

  const series = [7.1, 9, 8.4, 9.5, 9.1, 7.9, 8, 8.6];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Graduated with First Class Distinction, maintaining a consistent high GPA across all semesters culminating in an 8.56 CGPA.",
      icon: Star
    },
    {
      title: "Research Publication",
      description: "Authored and published a significant paper titled 'Black Box for Vehicle to Track Performance and Driving Behavior' in a recognized journal.",
      icon: BookOpen
    }
  ];

  const technologies = [
    "Data Structures", "Algorithms", "OS", "DBMS", 
    "Artificial Intelligence", "OOPs", "Computer Networks"
  ];

  return (
    <ExperienceLayout
      companyName="Velammal Institute of Technology"
      role="B.Tech Information Technology"
      duration="Aug 2019 – May 2023"
      location="Chennai"
      type="education"
      icon={GraduationCap}
      technologies={technologies}
      achievements={achievements}
    >
      <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm mb-12">
        <h3 className="text-center text-lg font-bold text-stone-900 mb-8 font-display">Academic Performance Trend</h3>
        <div className="flex justify-center items-center w-full min-h-[300px]">
          {isMobile ? (
            <Chart
              options={donutChartOptions}
              series={series}
              type="donut"
              width="100%"
              height="350"
            />
          ) : (
            <Chart
              options={barChartOptions}
              series={[{ name: "GPA", data: series }]}
              type="bar"
              width="600"
              height="400"
            />
          )}
        </div>
      </div>
    </ExperienceLayout>
  );
};

export default VelammalPage;
