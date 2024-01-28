import { getAllData } from "../dashboard/DownloadData";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

//  export async function getData(): Promise<Payment[]> {
//   return [
   
//     {
//         id: "4",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PSI",
//         person: "Грибова Вера Матвеевна"
//       },
//       {
//         id: "3",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Проактивные Инвестиционные Решения",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "Init TKK load",
//         person: "Грибова Вера Матвеевна"
//       },
//       {
//         id: "2",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Инновационные Финансовые Ресурсы",
//         block: "КИБ",
//         view_table: "view",
//         changeStatus: "PSI",
//         person: "Грибова Вера Матвеевна"
//       },
//       {
//         id: "1",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Экспертное Финансовое Консультирование",
//         block: "КИБ",
//         view_table: "view",
//         changeStatus: "OE",
//         person: "Грибова Вера Матвеевна"
//       },
//       {
//         id: "5",
//         amount: 500,
//         statusEpic: "Done",
//         name: "Партнерство Экономического Процветания",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PE",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "6",
//         amount: 500,
//         statusEpic: "Done",
//         name: "Глобальные Финансовые Консультанты",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PE",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "7",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Стратегическое Управление Активами",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "OE",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "8",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Альянс Инвестиционных Решений",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PSI",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "9",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Кредитные решения ABC",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PSI",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "10",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Кредитные решения BCD",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "IFT",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "11",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Бесплатный сыр",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "IFT",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "12",
//         amount: 500,
//         statusEpic: "Todo",
//         name: "Global Wealth Consultants",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "Todo",
//         person: ""
//       },
//       {
//         id: "13",
//         amount: 500,
//         statusEpic: "Todo",
//         name: "Smart Financial Strategies",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "Todo",
//         person: ""
//       },
//       {
//         id: "14",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Profit Maximizers Alliance",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "IFT",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "15",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Инвестиционная Мастерская",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "IFT",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "16",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Инвестиционная стратегия",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "IFT",
//         person: "Крылова Марина Ярославовна"
//       },
//       {
//         id: "17",
//         amount: 500,
//         statusEpic: "In Progress",
//         name: "Глобальное Инвестиционное Сотрудничество",
//         block: "РБ",
//         view_table: "view",
//         changeStatus: "PSI",
//         person: "Крылова Марина Ярославовна"
//       },
//     // ...
//   ]
// }

export default async function DemoPage() {
  // const data = await getData()
  const data = await getAllData();

  return (
    <div className="container mx-auto py-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
