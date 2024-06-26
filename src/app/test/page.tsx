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

const frameworks = [
    {
        "id": "1",
        "name": "земля",
        "ci": "00000001",
        "label": "Земля"
    },
    {
        "id": "2",
        "name": "луна",
        "ci": "00000002",
        "label": "Луна"
    },
    {
        "id": "3",
        "name": "юпитер",
        "ci": "00000003",
        "label": "Юпитер"
    },
    {
        "id": "4",
        "name": "солнце",
        "ci": "00000004",
        "label": "Солнце"
    }
]

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[500px] justify-between"
        >
          {value 
            ? 'найти источник' : frameworks.find((framework) => framework.name === value)?.label ||  "seach..."}
          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="input ..." className="h-9" />
          <CommandEmpty>NO .</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
                
              <CommandItem
                key={framework.name}
                value={framework.name}
                
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {/* {framework.name} */}
                <Link href={`/dashboard/${framework.id}`}>{framework.label}</Link>
                <AiOutlineCheck
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.name ? "opacity-100" : "opacity-0"
                  )}
                />
                
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
