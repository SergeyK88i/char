import Link from "next/link";
import Image from "next/image";
// import {RxSketchLogo} from "react-icons/rx"
import { FaTeamspeak } from "react-icons/fa";
import { ImBarcode } from "react-icons/im";
import { ImDatabase } from "react-icons/im";
import { GrMonitor } from "react-icons/gr";
import { TfiHome } from "react-icons/tfi";




export default function Slidebar ({children}) {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between
            ">
                <div className="flex flex-col items-center ">
                    <Link href="/">
                        <div className="bg-purple-800 hover:bg-green-700 text-white p-3 rounded-lg inline-block">
                        <TfiHome  size={20}/>
                        </div>    
                    </Link>
                    <span className="border-b-[1px] border-gray-300 w-full p-2 m-2 "></span>

                    <Link href="/dashboard">
                        <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                            
                        <GrMonitor size={20}/>
                        </div>    
                    </Link>
                    <Link href="/table">
                        <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                            
                            <ImDatabase size={20}/>
                        </div>    
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    )
}