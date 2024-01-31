"use client"
import { useState } from "react";
import { Posts } from "./Posts";
import { Button } from "@/components/ui/button";

export default function Viewinfo({data}:any){
    const [details, setDetails] = useState(false)
    const a = data;
    console.log("Viewinfo:",a)
    const filteredData = data.filter((obj: { days_shift: number; }) => obj.days_shift > 20);
    // console.log("Viewinfo filter:",filteredData)
    // console.log("Viewinfo dlinnnnaaaa:",filteredData.length)
    const btnBgClassName = filteredData.length > 0 ? "bg-red-600"  : "bg-gradient-to-r from-violet-300 to-violet-400" 
    const btnClasses = ['hover:bg-red-700',btnBgClassName]
    return (
        <div>
            {filteredData.length > 0 &&(
            <Button 
                className={`${btnClasses.join(' ')} w-full`}
                onClick={() => setDetails(prev => !prev)}
            >
                {filteredData.length > 0 ? `Кол-во сдвигов ОЭ за пределы квартала ( ${filteredData.length} )` : "Сдвиг ОЭ нет"}
            </Button>
        )}
            {details && <div>
                <Posts posts={filteredData}/>
            </div>}
            
            
        </div>
        
    )
}