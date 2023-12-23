import React from "react"
// import {data} from '@/app/data/data'
import { GrMonitor } from "react-icons/gr";
import myData from '@/app/data/source.json'
import Link from "next/link";

export default function RecentOrders() {
    return(
        <div className="w-full col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <h1>Источники</h1>
            <ul>
                {
                myData.map((data,id) => (
                        <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer">
                            
                            <div>
                                <GrMonitor />

                            </div>
                            <div className="pl-4 font-normal">
                            {/* <Link href={`/dashboard/${post.id}`}>{post.title}</Link> */}
                               <Link href={`/dashboard/${data.id}`}>{data.name}</Link> 
                                {/* <p>{data.id}</p> */}

                            </div>
                        </li>
                    ))
                }
            </ul>
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