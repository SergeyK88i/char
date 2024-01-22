"use client"
import { useEffect, useState } from "react";
import { getAllData } from "./DownloadData";
import { Posts } from '@/app/components/Posts';
import { Select } from "../components/Select";
import { Skeleton } from "@/components/ui/skeleton"



export default function RecentOrders() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getAllData().then(setPosts).finally(() => setLoading(false))
    } , [])
    return (
        // <div className="w-full col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
       <div>
            
            {loading ? (
                // <h3>Loading... </h3>
                <Skeleton className="w-[500px] h-[40px] rounded-lg" />
                
            ) : (
                // <Posts posts={posts} />
                <Select posts={posts}/>
                )
            }
            
            
        </div>
        
    )
}