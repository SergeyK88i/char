"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  VisibilityState,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import React from "react"
import Link from "next/link"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
      )
    const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  // фильтр по прогрессу
  function handleFilterStatus(arg: string){
    let allColumns = table.getAllColumns();
    // console.log("allColumns: ",allColumns);
    let fName = allColumns.filter(el=>el.id === "statusEpic")[0];
    // console.log("fName: ",fName);
    fName.setFilterValue(arg)
    }
  function handleFilterBlock(arg: string){
      let allColumns = table.getAllColumns();
        // console.log("allColumns: ",allColumns);
      let fName = allColumns.filter(el=>el.id === "block")[0];
        // console.log("fName: ",fName);
      fName.setFilterValue(arg)
    }

   
//   React.useEffect(() => {
//     handleFilter("In Progress") },[]);
const handleResetFilters = () => {
    handleFilterBlock("");
    handleFilterStatus("");
  };

const handle_1 = () => {
    handleFilterBlock("");
    handleFilterStatus("In Progress");
}
const handle_2 = () => {
    handleFilterStatus("");
    handleFilterBlock("RB");
}
const handle_3 = () => {
    handleFilterStatus("");
    handleFilterBlock("KIB");
}
  return (
<div>
<>
<Button onClick={() => handle_1()} className="bg-blue-400 hover:bg-blue-500">Status</Button>
<Button onClick={() => handle_2()} className="mx-1 bg-blue-400 hover:bg-blue-500">РБ</Button>
{/* <input type="checkbox" onChange={() => handle_2()} className="mx-1 bg-blue-400 hover:bg-blue-500" /> */}
<Button onClick={() => handle_3()} className="bg-blue-400 hover:bg-blue-500">КИБ</Button>
{/* <Button onClick={() => handleFilterBlock("KIB")} className="bg-blue-400 hover:bg-blue-500">КИБ</Button> */}
<Button onClick={() => handleResetFilters()} className="mx-1 bg-blue-400 hover:bg-blue-500">Все</Button>

</>
<DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
</DropdownMenu>
<div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
</div>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                
              >
                
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    
                  </TableCell>
                ))}
                
              </TableRow>
              
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    <div className="flex items-center justify-end space-x-2 py-4">
    {/* <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </Button> */}
    {/* <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </Button> */}
  </div>
</div>
  )
}
