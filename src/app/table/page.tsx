import Viewinfo from "../components/Viewinfo";
import ViewinfoYellow from "../components/ViewinfoYellow";
import { getAllData, getById } from "../dashboard/DownloadData";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

 export async function getData(): Promise<Payment[]> {
  
  return [
   
    {
        id: "4",
        
        status: "In Progress",
        name: "Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PSI",
        person: "Грибова Вера Матвеевна",
        duedate: "2024-06-30",
        days_shift: 4,
      },
      {
        id: "10",
        
        status: "In Progress",
        name: "Проактивные Инвестиционные Решения",
        corporate_unit: "РБ",
        view_table: "view",
        change: "Init TKK load",
        person: "Грибова Вера Матвеевна",
        duedate: "2024-5-15",
        days_shift: 4,
      },
      {
        id: "2",
        
        status: "In Progress",
        name: "Инновационные Финансовые Ресурсы",
        corporate_unit: "КИБ",
        view_table: "view",
        change: "PSI",
        person: "Грибова Вера Матвеевна",
        duedate: "2024-06-30",
        days_shift: 30,
      },
      {
        id: "1",
        
        status: "In Progress",
        name: "Экспертное Финансовое Консультирование",
        corporate_unit: "КИБ",
        view_table: "view",
        change: "Init TKK load",
        person: "Грибова Вера Матвеевна",
        duedate: "2024-06-29",
        days_shift: 25,
      },
      {
        id: "5",
        
        status: "Done",
        name: "Партнерство Экономического Процветания",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PE",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "6",
        
        status: "Done",
        name: "Глобальные Финансовые Консультанты",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PE",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "7",
        
        status: "In Progress",
        name: "Стратегическое Управление Активами",
        corporate_unit: "РБ",
        view_table: "view",
        change: "OE",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "8",
        
        status: "In Progress",
        name: "Альянс Инвестиционных Решений",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PSI",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "9",
        
        status: "In Progress",
        name: "Кредитные решения ABC",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PSI",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "3",
        
        status: "In Progress",
        name: "Кредитные решения BCD",
        corporate_unit: "РБ",
        view_table: "view",
        change: "IFT",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 7,
      },
      {
        id: "11",
        
        status: "In Progress",
        name: "Бесплатный сыр",
        corporate_unit: "РБ",
        view_table: "view",
        change: "IFT",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 5,
      },
      {
        id: "12",
        
        status: "Todo",
        name: "Global Wealth Consultants",
        corporate_unit: "РБ",
        view_table: "view",
        change: "Todo",
        person: "",
        duedate: "",
        days_shift: 0,
      },
      {
        id: "13",
        
        status: "Todo",
        name: "Smart Financial Strategies",
        corporate_unit: "РБ",
        view_table: "view",
        change: "Todo",
        person: "",
        duedate: "",
        days_shift: 0,
      },
      {
        id: "14",
        
        status: "In Progress",
        name: "Profit Maximizers Alliance",
        corporate_unit: "РБ",
        view_table: "view",
        change: "IFT",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "15",
        
        status: "In Progress",
        name: "Инвестиционная Мастерская",
        corporate_unit: "РБ",
        view_table: "view",
        change: "IFT",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "16",
        
        status: "In Progress",
        name: "Инвестиционная стратегия",
        corporate_unit: "РБ",
        view_table: "view",
        change: "IFT",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
      {
        id: "17",
        
        status: "In Progress",
        name: "Глобальное Инвестиционное Сотрудничество",
        corporate_unit: "РБ",
        view_table: "view",
        change: "PSI",
        person: "Крылова Марина Ярославовна",
        duedate: "2024-05-25",
        days_shift: 0,
      },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()
  // let data = await getAllData();
// console.log("данные для таблицы:", data);
// const dataID = await getById("1");
// console.log("данные для таблицы c id 1 :", dataID);
  return (
  
  
  <div className="container mx-auto p5-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4">
      <div className="mb-1">
        <Viewinfo data={data}/>
      </div>
      <div className="mb-1">
        <ViewinfoYellow data={data}/>
      </div>
      <div>  
        <DataTable columns={columns} data={data} />
      </div>
    
    </div>
  
    
  )
}
