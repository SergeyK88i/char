import Header from "../components/Header";
import Barchart from "./Barchart";
import RecentOrders from "./RecentOrders";
import Image from 'next/image'
// import TopDashboard from "./TopDashboard";


export default function Dashoard() {
    return(
        
        <>
    {/* <main className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 via-green-100 to-blue-100'> */}
      
      
      <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 via-green-100 to-blue-100 p-4 grid md:grid-cols-10 grid-cols-1 gap-2">
        
        <div className="lg:col-span-4 col-span-1 flex justify-between w-full bg-white">
        <RecentOrders />
        </div>
        
       
        
      

      <div className="lg:col-span-6 col-span-1 flex justify-center items-center w-full bg-white  border p-4 rounded-lg"> 
      {/* <p>TreeMap + фильтры</p> */}
      <Image
          className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/treemap-chart-colored.svg"
          alt="Psikod2.js Logo"
          width={200}
          height={150}
          priority
        />  
      </div>
        {/* <Barchart /> */}
        
      </div>
      
</>

    
    
    
    )
}