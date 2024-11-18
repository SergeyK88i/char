
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

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.document-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.document-layout {
  display: flex;
  gap: 20px;
}

.navigation {
  width: 25%;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 10px;
}

.nav-button {
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #d0d0d0;
}

.nav-button.active {
  background-color: #007bff;
  color: white;
}

.content {
  width: 75%;
}

.section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.section-content h1 {
  font-size: 1.8rem;
  color: #333;
  margin-top: 0;
}

.section-content p {
  line-height: 1.6;
}

.section-content ul, .section-content ol {
  padding-left: 20px;
}

.section-content table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.section-content th, .section-content td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.section-content th {
  background-color: #f2f2f2;
}

.section-footer {
  text-align: right;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #777;
}

/* Новые стили для элементов кода */
.section-content code {
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 2px 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  color: #d63384;
}

.section-content pre {
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 15px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  line-height: 1.4;
}

.section-content pre code {
  background-color: transparent;
  padding: 0;
  color: #333;
}


'use client'
import React, { useEffect, useState } from 'react';
import { originalconfluenceData } from './confluenceData';
import { Section } from './Section';

function parseConfluenceHtml(html: string): string[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const sections = Array.from(doc.querySelectorAll('h1')).map(header => {
    let content = header.outerHTML;
    let nextElement = header.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'H1') {
      content += nextElement.outerHTML;
      nextElement = nextElement.nextElementSibling;
    }
    return content;
  });
  return sections;
}

function filterTableRows(html: string, type: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tables = doc.querySelectorAll('table');
  
  tables.forEach(table => {
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
      const firstCell = row.querySelector('td:first-child');
      if (firstCell) {
        const cellText = firstCell.textContent?.trim(); // Получаем текст первой ячейки

        if (type === 'page' && cellText === 'Dataspace') {
          row.remove(); // Удаляем строку, если type равен page и первая колонка "Dataspace"
        } else if (type === 'hiber' && cellText === 'Hibernate') {
          row.remove(); // Удаляем строку, если type равен hiber и первая колонка "Hibernate"
        }
      }
    });
  });
  
  return doc.body.innerHTML;
}

export default function ConfluenceDocument() {
  const [confluenceData, setConfluenceData] = useState(originalconfluenceData);
  const [sections, setSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const filteredHtml = filterTableRows(confluenceData.body.storage.value, confluenceData.type);
    setConfluenceData(prevData => ({
      ...prevData,
      body: {
        ...prevData.body,
        storage: {
          ...prevData.body.storage,
          value: filteredHtml
        }
      }
    }));
  }, []);

  useEffect(() => {
    setSections(parseConfluenceHtml(confluenceData.body.storage.value));
  }, [confluenceData]);

  return (
    <div className="container">
      <h1 className="document-title">{confluenceData.title}</h1>
      <div className="document-layout">
        <nav className="navigation">
          <ul className="nav-list">
            {sections.map((_, index) => (
              <li key={index} className="nav-item">
                <button
                  onClick={() => setActiveSection(index)}
                  className={`nav-button ${activeSection === index ? 'active' : ''}`}
                >
                  Раздел {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="content">
          <Section content={sections[activeSection]} index={activeSection} />
        </div>
      </div>
    </div>
  );
}
