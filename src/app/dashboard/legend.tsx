import React from "react"
// import {data} from '@/app/data/data'
import { GrMonitor } from "react-icons/gr";

export default function Legend() {
    return(
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] bg-white">
            <h1>Source</h1>
            {/* <ul>
                {data.map((order, id) => (
                    <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer">
                        <div>
                        <GrMonitor />

                        </div>
                        <div className="pl-4 font-normal">
                            <p>${order.total}</p>
                        </div>
                    </li>
                ))}
            </ul> */}
        </div>
        
    )
}