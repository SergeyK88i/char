"use client";
import Link from "next/link";
import Image from "next/image";
// import {RxSketchLogo} from "react-icons/rx"
import { FaTeamspeak } from "react-icons/fa";
import { ImBarcode } from "react-icons/im";
import { ImDatabase } from "react-icons/im";
import { GrMonitor } from "react-icons/gr";
import { TfiHome } from "react-icons/tfi";
import { CiViewTable } from "react-icons/ci";
import { useSession, signIn, signOut } from "next-auth/react"
import { FcDecision } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { GrLogin } from "react-icons/gr";
import { BsBarChartSteps } from "react-icons/bs";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";

export default function Slidebar ({children}: any) {
    const session = useSession();
    console.log(session);
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between
            ">
                {/* <div className="flex flex-col items-center "> */}
<div className="flex flex-col items-start">
                    <div>
                        {session?.data && (
                        <Link href="/">
                            <div className="bg-purple-800 hover:bg-green-700 text-white p-3 rounded-lg inline-block">
                            <TfiHome  size={20}/>
                            </div>    
                        </Link>)}
                    </div>

                    {/* <span className="border-b-[1px] border-gray-300 w-full p-2 m-2 "></span> */}
                    <span className="w-full p-2 m-2 "></span>

                    <div>
                        {session?.data && (
                    <   Link href="/dashboard">
                            <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                            
                            {/* <GrMonitor size={20}/> */}
                            <TbDeviceDesktopSearch size={20} />
                            </div>    
                        </Link>)}
                    </div>
                    
                        <div>
                            {session?.data && (
                            <Link href="/table">
                                <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                                    
                                    {/* <ImDatabase size={20}/> */}
                                    <CiViewTable size={20} />
                                    {/* <TbListSearch size={20} /> */}
                                </div>   
                            
                            
                            </Link>)}
                        </div>
</div>
                        {/* <span className="w-full p-2 mb-20"></span>
                        <span className="w-full p-2 mb-20"></span>
                        <span className="w-full p-2 mb-20"></span>
                        <span className="w-full p-2 mb-19"></span> */}
                        
                    <div className="flex flex-col items-end">
                        <div >
                            {session?.data && (
                                <Link href="/profile">
                                    <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                                        <FcBusinessman size={20}/>
                                    </div>
                                </Link>)}
                        </div>

                        <div>
                            <div className="bg-purple-800 hover:bg-green-700 text-white p-3 my-2 rounded-lg inline-block">
                                {session?.data ? (
                                <Link href="#" onClick={() => signOut ({
                                    callbackUrl: "/" })}>
                                     <CiLogout size={20}/>
                                </Link>
                                ) : (<Link href="/signin">
                                {/* <FcDecision size={20}/> */}
                                    <GrLogin size={20}/>
                                 </Link>)}
                            </div> 
                        
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <main className="ml-20 w-full">{children}</main>
           
        </div>
    )
}