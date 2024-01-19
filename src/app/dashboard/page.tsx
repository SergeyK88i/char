import Header from "../components/Header";
import Barchart from "./Barchart";
import RecentOrders from "./RecentOrders";
import Image from 'next/image'
// import TopDashboard from "./TopDashboard";


export default function Dashoard() {
    return(
        
        <>
    <div>
      
      
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4 ">
        
        <div style={{ marginTop: "-150px" }} >
        <RecentOrders />
        </div>
      </div>
    </div>
      
{/* 
      <div className="lg:col-span-6 col-span-1 flex justify-center items-center w-full bg-white  border p-4 rounded-lg"> 
      
      <Image
          className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/treemap-chart-colored.svg"
          alt="Psikod2.js Logo"
          width={200}
          height={150}
          priority
        />  
      </div> */}
        {/* <Barchart /> */}
        
      {/* </div> */}
      
</>

    
    
    
    )
}