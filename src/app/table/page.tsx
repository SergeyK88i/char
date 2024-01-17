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
        name: "C",
        block: "KIB",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "3",
        amount: 500,
        statusEpic: "In Progress",
        name: "D",
        block: "RB",
        view_table: "view",
        changeStatus: "Init TKK load"
      },
      {
        id: "2",
        amount: 500,
        statusEpic: "In Progress",
        name: "F",
        block: "RB",
        view_table: "view",
        changeStatus: "PSI"
      },
      {
        id: "1",
        amount: 500,
        statusEpic: "Todo",
        name: "Земля",
        block: "KIB",
        view_table: "view",
        changeStatus: "IFT"
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
