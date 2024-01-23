import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    // {
    //     id: "8",
    //     amount: 100,
    //     statusEpic: "In Progress",
    //     name: "A",
    //     block: "KIB",
    //     view_table: "view",
    //     changeStatus: "IFT"

    // },
    // {
    //     id: "9",
    //     amount: 50,
    //     statusEpic: "In Progress",
    //     name: "B",
    //     block: "RB",
    //     view_table: "view",
    //     changeStatus: "IFT"
    // },
    {
        id: "4",
        amount: 500,
        statusEpic: "In Progress",
        name: "Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес",
        block: "РБ",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "3",
        amount: 500,
        statusEpic: "In Progress",
        name: "Проактивные Инвестиционные Решения",
        block: "РБ",
        view_table: "view",
        changeStatus: "Init TKK load"
      },
      {
        id: "2",
        amount: 500,
        statusEpic: "In Progress",
        name: "Инновационные Финансовые Ресурсы",
        block: "КИБ",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "1",
        amount: 500,
        statusEpic: "Todo",
        name: "Экспертное Финансовое Консультирование",
        block: "КИБ",
        view_table: "view",
        changeStatus: "Todo"
      },
      {
        id: "5",
        amount: 500,
        statusEpic: "Done",
        name: "Партнерство Экономического Процветания",
        block: "РБ",
        view_table: "view",
        changeStatus: "PE"
      },
      {
        id: "6",
        amount: 500,
        statusEpic: "Done",
        name: "Глобальные Финансовые Консультанты",
        block: "РБ",
        view_table: "view",
        changeStatus: "PE"
      },
      {
        id: "7",
        amount: 500,
        statusEpic: "In Progress",
        name: "Стратегическое Управление Активами",
        block: "РБ",
        view_table: "view",
        changeStatus: "OE"
      },
      {
        id: "8",
        amount: 500,
        statusEpic: "In Progress",
        name: "Альянс Инвестиционных Решений",
        block: "РБ",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "9",
        amount: 500,
        statusEpic: "In Progress",
        name: "Кредитные решения ABC",
        block: "РБ",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "10",
        amount: 500,
        statusEpic: "In Progress",
        name: "Кредитные решения BCD",
        block: "РБ",
        view_table: "view",
        changeStatus: "IFT"
      },
      {
        id: "11",
        amount: 500,
        statusEpic: "In Progress",
        name: "Бесплатный сыр",
        block: "РБ",
        view_table: "view",
        changeStatus: "IFT"
      },
      {
        id: "12",
        amount: 500,
        statusEpic: "Todo",
        name: "Global Wealth Consultants",
        block: "РБ",
        view_table: "view",
        changeStatus: "Todo"
      },
      {
        id: "13",
        amount: 500,
        statusEpic: "Todo",
        name: "Smart Financial Strategies",
        block: "РБ",
        view_table: "view",
        changeStatus: "Todo"
      },
      {
        id: "14",
        amount: 500,
        statusEpic: "In Progress",
        name: "Profit Maximizers Alliance",
        block: "РБ",
        view_table: "view",
        changeStatus: "IFT"
      },
      {
        id: "15",
        amount: 500,
        statusEpic: "In Progress",
        name: "Инвестиционная Мастерская",
        block: "РБ",
        view_table: "view",
        changeStatus: "IFT"
      },
      {
        id: "16",
        amount: 500,
        statusEpic: "In Progress",
        name: "Инвестиционная стратегия",
        block: "РБ",
        view_table: "view",
        changeStatus: "IFT"
      },
      {
        id: "17",
        amount: 500,
        statusEpic: "In Progress",
        name: "Глобальное Инвестиционное Сотрудничество",
        block: "РБ",
        view_table: "view",
        changeStatus: "PSI"
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
