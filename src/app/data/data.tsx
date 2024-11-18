
import { Task } from "gantt-task-react";
import { IoIosArrowRoundForward } from "react-icons/io";


export const initTasks = (data: any) => {
  // const currentDate = new Date();
  const [K1_startYear, K1_startMonth, K1_startDay] = data?.tasks[0].planned_end.split("-")
  const [K1_endYear, K1_endMonth, K1_endDay] = data?.tasks[0].duedate.split("-")
  // console.log("Вотъ распличенная переменная год", );
  const [K2_startYear, K2_startMonth, K2_startDay] = data?.tasks[1].planned_end.split("-")
  const [K2_endYear, K2_endMonth, K2_endDay] = data?.tasks[1].duedate.split("-")

  const [K3_startYear, K3_startMonth, K3_startDay] = data?.tasks[2].planned_end.split("-")
  const [K3_endYear, K3_endMonth, K3_endDay] = data?.tasks[2].duedate.split("-")

  const [K4_startYear, K4_startMonth, K4_startDay] = data?.tasks[3].planned_end.split("-")
  const [K4_endYear, K4_endMonth, K4_endDay] = data?.tasks[3].duedate.split("-")

  const [K5_startYear, K5_startMonth, K5_startDay] = data?.tasks[4].planned_end.split("-")
  const [K5_endYear, K5_endMonth, K5_endDay] = data?.tasks[4].duedate.split("-")

  const [K6_startYear, K6_startMonth, K6_startDay] = data?.tasks[5].planned_end.split("-")
  const [K6_endYear, K6_endMonth, K6_endDay] = data?.tasks[5].duedate.split("-")

  const [K7_startYear, K7_startMonth, K7_startDay] = data?.tasks[6].planned_end.split("-")
  const [K7_endYear, K7_endMonth, K7_endDay] = data?.tasks[6].duedate.split("-")

  const [ROV_startYear, ROV_startMonth, ROV_startDay] = data?.story[0].planned_end.split("-")
  const [ROV_endYear, ROV_endMonth, ROV_endDay] = data?.story[0].duedate.split("-")

  const [InitLoad_startYear, InitLoad_startMonth, InitLoad_startDay] = data?.story[1].planned_end.split("-")
  const [InitLoad_endYear, InitLoad_endMonth, InitLoad_endDay] = data?.story[1].duedate.split("-")

  const [OE_startYear, OE_startMonth, OE_startDay] = data?.story[2].planned_end.split("-")
  const [OE_endYear, OE_endMonth, OE_endDay] = data?.story[2].duedate.split("-")
  
  const [PE_startYear, PE_startMonth, PE_startDay] = data?.story[3].planned_end.split("-")
  const [PE_endYear, PE_endMonth, PE_endDay] = data?.story[3].duedate.split("-")


  const [p1, p2, p3] = data?.tasks[0].planned_end.split("-");
  const [p4, p5, p6] = data?.tasks[0].duedate.split("-");
  const v1 = data?.tasks[0].planned_end;
  const v2 = data?.tasks[0].duedate;
  
  const K1_combinedString = `${K1_startDay ?? ""}.${K1_startMonth ?? ""} -> ${K1_endDay ?? ""}.${K1_endMonth ?? ""}`;
  const K2_combinedString = `${K2_startDay ?? ""}.${K2_startMonth ?? ""} -> ${K2_endDay ?? ""}.${K2_endMonth ?? ""}`;
  const K3_combinedString = `${K3_startDay ?? ""}.${K3_startMonth ?? ""} -> ${K3_endDay ?? ""}.${K3_endMonth ?? ""}`;
  const K4_combinedString = `${K4_startDay ?? ""}.${K4_startMonth ?? ""} -> ${K4_endDay ?? ""}.${K4_endMonth ?? ""}`;
  const K5_combinedString = `${K5_startDay ?? ""}.${K5_startMonth ?? ""} -> ${K5_endDay ?? ""}.${K5_endMonth ?? ""}`;
  const K6_combinedString = `${K6_startDay ?? ""}.${K6_startMonth ?? ""} -> ${K6_endDay ?? ""}.${K6_endMonth ?? ""}`;
  const K7_combinedString = `${K7_startDay ?? ""}.${K7_startMonth ?? ""} -> ${K7_endDay ?? ""}.${K7_endMonth ?? ""}`;
  const ROV_combinedString = `${ROV_startDay ?? ""} -> ${ROV_endDay ?? ""}.${ROV_endMonth ?? ""}`;
  const InitLoad_combinedString = `${InitLoad_startDay ?? ""}.${InitLoad_startMonth ?? ""} -> ${InitLoad_endDay ?? ""}.${InitLoad_endMonth ?? ""}`;
  const OE_combinedString = `${OE_startDay ?? ""}.${OE_startMonth ?? ""} -> ${OE_endDay ?? ""}.${OE_endMonth ?? ""}`;
  const PE_combinedString = `${PE_startDay ?? ""}.${PE_startMonth ?? ""} -> ${PE_endDay ?? ""}.${PE_endMonth ?? ""}`;
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
      start: new Date(K1_startYear,K1_startMonth - 1, K1_startDay),
      end: new Date(K1_endYear, K1_endMonth - 1, K1_endDay ),
      // name: data?.tasks[0].duedate,
      name: K1_combinedString,
      id: "Task 0",
      progress: 100,
      type: "task",
      // project: "ProjectSample",
      styles: { progressColor: '#138808', progressSelectedColor: '#138808' }
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      start: new Date(K2_startYear,K2_startMonth - 1, K2_startDay),
      end: new Date(K2_endYear, K2_endMonth - 1, K2_endDay ),
      name: K2_combinedString,
      id: "Task 1",
      progress: 100,
      // dependencies: ["Task 0"],
      type: "task",
      // project: "ProjectSample",
      styles: { progressColor: '#138808', progressSelectedColor: '#138808' }

    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      start: new Date(K3_startYear,K3_startMonth - 1, K3_startDay),
      end: new Date(K3_endYear, K3_endMonth - 1, K3_endDay ),
      name: K3_combinedString,
      id: "Task 2",
      progress: 100,
      // dependencies: ["Task 1"],
      type: "task",
      // project: "ProjectSample",
      styles: { progressColor: '#138808', progressSelectedColor: '#138808' }
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11, 0, 0),
      start: new Date(K4_startYear,K4_startMonth - 1, K4_startDay),
      end: new Date(K4_endYear, K4_endMonth - 1, K4_endDay ),
      name: K4_combinedString,
      id: "Task 3",
      progress: 100,
      // dependencies: ["Task 2"],
      type: "task",
      // project: "ProjectSample",
      styles: { progressColor: '#ff9d07', progressSelectedColor: '#ff9d07' }
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
      start: new Date(K5_startYear,K5_startMonth - 1, K5_startDay),
      end: new Date(K5_endYear, K5_endMonth - 1, K5_endDay ),
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      name: K5_combinedString,
      id: "Task 10",
      progress: 0,
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
      start: new Date(K6_startYear,K6_startMonth - 1, K6_startDay),
      end: new Date(K6_endYear, K6_endMonth - 1, K6_endDay ),
      name: K6_combinedString,
      id: "Task 12",
      progress: 0,
      
      type: "task",
      
    },
    {
      start: new Date(K7_startYear,K7_startMonth - 1, K7_startDay),
      end: new Date(K7_endYear, K7_endMonth - 1, K7_endDay ),
      name: K7_combinedString,
      id: "Task 14",
      progress: 0,
      // dependencies: ["Task 1"],
      
      type: "task",
      
    },
    {
      start: new Date(ROV_startYear,ROV_startMonth - 1, ROV_startDay),
      end: new Date(ROV_endYear, ROV_endMonth - 1, ROV_endDay ),
      name: ROV_combinedString,
      id: "Task 15",
      progress: 0,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 14"],
    },
    {
      start: new Date(InitLoad_startYear,InitLoad_startMonth - 1, InitLoad_startDay),
      end: new Date(InitLoad_endYear, InitLoad_endMonth - 1, InitLoad_endDay ),
      name: InitLoad_combinedString,
      id: "Task 16",
      progress: 0,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 15"],
    },
    {
      start: new Date(OE_startYear,OE_startMonth - 1, OE_startDay),
      end: new Date(OE_endYear, OE_endMonth - 1, OE_endDay ),
      name: OE_combinedString,
      id: "Task 17",
      progress: 100,
      // isDisabled: true,
      type: "task",
      // dependencies: ["Task 16"],
      styles: { progressColor: '#ff6654', progressSelectedColor: '#ff6654' }
    },
    {
      // start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      
      // start: new Date(2023, 7, 10),
      // end: new Date(2023, 7, 10),
      // end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16,0,0),
      start: new Date(PE_startYear, PE_startMonth - 1, PE_startDay ),
      end: new Date(PE_endYear, PE_endMonth - 1, PE_endDay ),
      name: PE_combinedString,
      id: "Task 18",
      progress: 0,
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
