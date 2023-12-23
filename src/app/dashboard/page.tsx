import Header from "../components/Header";
import Barchart from "./Barchart";
import RecentOrders from "./RecentOrders";
import TopDashboard from "./TopDashboard";
import Legend from "./legend";

export default function Dashoard() {
    return(
        
        <>
    <main className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 via-green-100 to-blue-100'>
      
      <Header />
      <TopDashboard />
      <div className="p-4 grid md:grid-cols-12 grid-cols-1 gap-2">
        {/* <Legend />        */}
        <Barchart />
        <RecentOrders />
        {/* <FetchData /> */}
      </div>
      


    </main>
    </>
    )
}