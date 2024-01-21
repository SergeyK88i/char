
import { Task } from "gantt-task-react";



export const initTasks = (data: any) => {
  // const currentDate = new Date();
  const [K1_startYear, K1_startMonth, K1_startDay] = data?.tasks[0].planned_end.split("-")
  const [K1_endYear, K1_endMonth, K1_endDay] = data?.tasks[0].duedate.split("-")
  console.log("Вотъ распличенная переменная год", );
  

  const tasks: Task[] = [
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
    //   name: "Some Project",
    //   id: "ProjectSample",
    //   progress: 80,
    //   type: "project",

    //   hideChildren: false
    // },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      // end: new Date(
      //   currentDate.getFullYear(),
      //   currentDate.getMonth(),
      //   2,
      //   12,
      //   28
      // ),
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: data?.tasks[0].duedate,
      id: "Task 0",
      progress: 100,
      type: "task",
      project: "ProjectSample"
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "K2",
      id: "Task 1",
      progress: 100,
      // dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }

    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "K3",
      id: "Task 2",
      progress: 100,
      // dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample"
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11, 0, 0),
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "К4",
      id: "Task 3",
      progress: 100,
      // dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample"
    },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    //   name: "DevOps. К4",
    //   id: "Task 4",
    //   type: "task",
    //   progress: 100,
    //   // dependencies: ["Task 2"],
    //   project: "ProjectSample"
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Автотесты. К4",
    //   id: "Task 6",
    //   // progress: currentDate.getMonth(),
    //   progress: 100,
    //   // type: "milestone",
    //   type: "task",
    //   // dependencies: ["Task 4"],
    //   project: "ProjectSample"
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Мониторинг. К4",
    //   id: "Task 9",
    //   progress: 100,
    //   // isDisabled: true,
    //   type: "task",
    //   dependencies: ["Task 0"],
    // },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      name: "К5",
      id: "Task 10",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 9"],
    },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
    //   name: "ПСИ. К5",
    //   id: "Task 11",
    //   progress: 100,
    //   // isDisabled: true,
    //   type: "task",
    //   // dependencies: ["Task 10"],
    // },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "К6",
      id: "Task 12",
      progress: 100,
      
      type: "task",
      
    },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "К7",
      id: "Task 14",
      progress: 100,
      
      type: "task",
      
    },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "РоВ",
      id: "Task 15",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 14"],
    },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "InitLoad-TTK",
      id: "Task 16",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 15"],
    },
    {
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "Старт ОЭ",
      id: "Task 17",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 16"],
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      
      // start: new Date(2023, 7, 10),
      // end: new Date(2023, 7, 10),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16,0,0),
      start: new Date(K1_startYear,K1_startMonth, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth, K1_endDay ),
      name: "Старт ПЭ",
      id: "Task 18",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 17"],
    }
  ];
  return tasks;
};

export const getStartEndDateForProject = (tasks: Task[], projectId: string) => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};
