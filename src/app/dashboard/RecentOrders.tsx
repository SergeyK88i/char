import React from "react"
// import {data} from '@/app/data/data'
import { GrMonitor } from "react-icons/gr";
import myData from '@/app/data/source.json'
import Link from "next/link";

async function getData() {
    const response = await fetch("https://my-json-server.typicode.com/SergeyK88i/testDB/source", {
        next: {
            revalidate: 3
        }
    });
    return response.json();
}

export default async function RecentOrders() {
    const myData = await getData();
    return(
        <div className="w-full col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <h1>Источники</h1>
            <ul>
                {
                myData.map((data: any,id: any) => (
                        <li 
                        key={id}
                        className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer"
                        
                        >
                        
                            <div>
                                <GrMonitor />

                            </div>
                            <div className="pl-4 font-normal">
                           
                               <Link href={`/dashboard/${data.id}`}>{data.name}</Link> 
                                

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