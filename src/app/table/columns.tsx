"use client"

import { ColumnDef } from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  statusEpic: "In Progress" | "Done" | "Open" | "Todo"
  name: string
  block: string
  view_table: string
  changeStatus: "IFT" | "PSI" | "Init TKK load" 
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        
        header: ({ table }) => (
            <div className="flex items-center">
            
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            
          />
          <p className="px-4">ALL</p>
          </div>
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          
        ),
        enableSorting: false,
        enableHiding: false,
        

    },
    // {
    //   accessorKey: "amount",
    //   header: () => <div className="text-right">Amount</div>,
    //   cell: ({ row }) => {
    //     const amount = parseFloat(row.getValue("amount"))
    //     const formatted = new Intl.NumberFormat("en-US", {
    //       style: "currency",
    //       currency: "USD",
    //     }).format(amount)
  
    //     return <div className="text-right font-medium">{formatted}</div>
    //   },
    // },
      {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
          className="px-0"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Источник
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "block",
      header: ({ column }) => {
        return (
          <Button
          className="px-0"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Блок
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
        accessorKey: "statusEpic",
        header: ({ column }) => {
          return (
            <Button
            className="px-0"
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Статус эпика
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
    
      {
        accessorKey: "changeStatus",
        header: ({ column }) => {
          return (
            <Button
            className="px-0"
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Статус Источника
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        id: "actions",
        // accessorKey: "view_table",
        header: "",
        cell: ({row}) => {
          
            const p = row.original
            console.log(p.id);
            return (
              
              <Link href={`http://localhost:3000/dashboard/${p.id}`}>
                <Button className="bg-blue-500 hover:bg-blue-400">
                    view_table
                </Button >
              </Link>
            )
        }
      },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //       const payment = row.original
     
    //       return (
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="h-8 w-8 p-0">
    //               <span className="sr-only">Open menu</span>
    //               <MoreHorizontal className="h-4 w-4" />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end">
    //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //             <DropdownMenuItem
    //               onClick={() => navigator.clipboard.writeText(payment.id)}
    //             >
    //               Copy payment ID
    //             </DropdownMenuItem>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuItem>View customer</DropdownMenuItem>
    //             <DropdownMenuItem>View payment details</DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       )
    //     },
    //   },
  ]
  
  