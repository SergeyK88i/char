"use client"
import { useState } from "react";
import { Posts } from "./Posts";
import { Button } from "@/components/ui/button";

export default function Viewinfo({data}:any){
    const [details, setDetails] = useState(false)
    const a = data;
    console.log("ViewinfoYellow:",a)
    const filteredData = data.filter((obj: { days_shift: number; }) => obj.days_shift === 7);
    // console.log("Viewinfo filter:",filteredData)
    // console.log("Viewinfo dlinnnnaaaa:",filteredData.length)
    const btnBgClassName = filteredData.length > 0 ? "bg-yellow-600"  : "bg-gradient-to-r from-violet-300 to-violet-400" 
    const btnClasses = ['hover:bg-yellow-700',btnBgClassName]
    const date = new Date;
    const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
const year = date.getFullYear();

    return (
        <div>
            {filteredData.length > 0 &&(
            <Button 
                className={`${btnClasses.join(' ')} w-full`}
                onClick={() => setDetails(prev => !prev)}
            >
                {filteredData.length > 0 ? ` Кол-во истоников не обновивших ДК ( ${filteredData.length} ) информация актуальна на дату: ${day}-${month}-${year}` : "Сдвиг ОЭ нет"}
            </Button>
        )}
            {details && <div>
                <Posts posts={filteredData}/>
            </div>}
            
            
        </div>
        
    )
}