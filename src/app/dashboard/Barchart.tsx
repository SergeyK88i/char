'use client'
// import "./globals.css";
// import React from 'react';
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { useState } from "react";
import { initTasks, getStartEndDateForProject } from "@/app/data/data";
import { ViewSwitcher } from "@/app/dashboard/ViewSwitcher";

export default function App() {
  const [view, setView] = useState<ViewMode>(ViewMode.Month);
  const [tasks, setTasks] = useState<Task[]>(initTasks());

  const [isChecked, setIsChecked] = useState(false);
  let columnWidth = 60;

  let rowHeight = 35;
  if (view === ViewMode.Month) {
    columnWidth = 100;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className=" w-full md:col-span-10 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      {/* <h3 className="px-1">Мониторинг</h3> */}
      <ViewSwitcher
        onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      
      <Gantt 
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
        rowHeight={rowHeight}
        locale="ru"
        
        
      />
      
    </div>
  );
}








// import React, {useState, useEffect} from "react";
// import { Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );
// export default function Barchart(){
//     const [chartData, setChartData] = useState({
//         datasets: [],
//     });
//     const [chartOptions, setChartOptions] = useState ({});

//     useEffect(() => {
//         setChartData({
//             labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
//             datasets: [
//                 {
//                     label: 'Sales $',
//                     data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
//                     borderColor: 'rgb(53, 162, 235)',
//                     backgroundColor: 'rgb(53, 162, 235, 0.4',
//                 },
//             ]
//         })
//         setChartOptions({
//             plugins: {
//                 legend: {
//                     position:'top',
//                 },
//                 title: {
//                     display: true,
//                     text: 'daily Revenue'
//                 }
//             },
//             maintainAspectRatio: false,
//             responsive: true
//         })
//     })
//     return (
//     <>
//         <div className=" w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
//             {/* <Bar data={chartData} options={chartOptions}></Bar> */}
//         </div>
//     </>
//     );
// };