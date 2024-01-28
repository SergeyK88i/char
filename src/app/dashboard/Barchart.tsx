'use client'
// import "./globals.css";
// import React from 'react';
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { useState } from "react";
import { initTasks, getStartEndDateForProject } from "@/app/data/data";
import { ViewSwitcher } from "@/app/dashboard/ViewSwitcher";
import RecentOrders from "./RecentOrders";
import { Button } from "@/components/ui/button";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type Props = {
  data: any[]
  downloadPDF: ()=>void;
}

export default function App({data,downloadPDF}:Props, ) {
  // export default function App({data}:Props, ) {
  const [view, setView] = useState<ViewMode>(ViewMode.Month);
  const [tasks, setTasks] = useState<Task[]>(initTasks(data));

  const [isChecked, setIsChecked] = useState(false);
  let columnWidth = 60;
  
  let rowHeight = 35;
  if (view === ViewMode.Month) {
    columnWidth = 170;
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
    <>
      <div className=" flex flex-row items-center  w-full md:col-span-12 relative lg:h-[6vh] h-[6vh] m-auto p-4 border rounded-lg bg-white">
        
        <ViewSwitcher
          onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
          onViewListChange={setIsChecked}
          isChecked={isChecked}
        />
        <RecentOrders />
        {/* <Button className="ml-2 bg-gradient-to-r from-emerald-500 to-lime-600 "> Сохранить в PDF </Button> */}
        <Button onClick={downloadPDF} className="ml-2 bg-gradient-to-r from-emerald-500 to-lime-600 flex items-center "> Сохранить в PDF </Button>
      </div>

      <div  className="flex flex-row items-start w-full md:col-span-12 relative lg:h-[60vh] h-[60vh] m-auto p-4 pt-0 border rounded-lg bg-white overflow-auto">
      <div>
          <ul className="font-bold">
            <li className=" h-[50px] pb-1 pr-5 m-0 flex justify-end items-end" > </li>
            <li className="m-0 pr-5 h-[35px] flex justify-end items-center">K1</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K2</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K3</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K4</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K5</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K6</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">K7</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">РОВ</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center w-[125px] text-right">initLoad-TKK</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">Старт ОЭ</li>
            <li className="m-0 pr-5  h-[35px] flex justify-end items-center">Старт ПЭ</li>
          </ul>
      </div>
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
          barFill={80} //определяем высоту прогресс
          // arrowIndent={1000} сдвиг вправо значение 'name'
          // todayColor={"red"}
          fontSize="12"
          
          
        />
      </div>
    </>
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