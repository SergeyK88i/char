import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        id: "8",
        amount: 100,
        statusEpic: "Done",
        name: "STMNT",
        block: "KIB",
        view_table: "view",
        stend: "IFT"

    },
    {
        id: "9",
        amount: 50,
        statusEpic: "Done",
        name: "GBK",
        block: "RB",
        view_table: "view",
        stend: "IFT"
    },
    {
        id: "10",
        amount: 500,
        statusEpic: "Done",
        name: "BSACCEPT",
        block: "KIB",
        view_table: "view",
        stend: "IFT"
      },
      {
        id: "11",
        amount: 500,
        statusEpic: "In Progress",
        name: "ABC",
        block: "RB",
        view_table: "view",
        stend: "PSI"
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
