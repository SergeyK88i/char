"use client"

import * as React from "react"
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { AiOutlineCheck } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
// const frameworks = [
//     {
//         "id": 1,
//         "name": "Экспертное",
//         "ci": "00000001",
//         "label": "Земля"
//     },
//     {
//         "id": 2,
//         "name": "Луна",
//         "ci": "00000002",
//         "label": "Луна"
//     },
//     {
//         "id": 3,
//         "name": "юпитер",
//         "ci": "00000003",
//         "label": "Юпитер"
//     },
//     {
//         "id": 4,
//         "name": "солнце",
//         "ci": "00000004",
//         "label": "Солнце"
//     }
// ]
type Props = {
    posts: any[]
}
const Select =({posts}: Props) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      
      <PopoverTrigger asChild>
      
        <Button
        
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[500px] justify-center"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {/* <CiSearch /> */}
          {value 
            ? 'Найти источник' : posts.find((framework) => framework.name.toLowerCase() === value.toLocaleLowerCase())?.label ||  "Найти источник"}
          {/* если значение истина - выводится название источника */}
          {/* {value
            ? posts.find((framework) => framework.name.toLowerCase() === value.toLowerCase())?.label
            : "Найти источник"} */}


          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command>
          <CommandInput placeholder="Введите имя источника" className="h-9" />
          <CommandEmpty>Источник не найден</CommandEmpty>
          <CommandGroup>
            {posts.map((framework) => (

                <Link href={`/dashboard/${framework.id}`}>
                      <CommandItem
                        key={framework.name}
                        value={framework.name}
                        
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {framework.name}
                        {/* <Link href={`/dashboard/${framework.id}`}>{framework.name}</Link> */}
                        {/* <AiOutlineCheck
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === framework.name ? "opacity-100" : "opacity-0"
                          )}
                        /> */}
                        
                      </CommandItem>
                </Link>

            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export {Select}
