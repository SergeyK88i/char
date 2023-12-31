import Barchart from "../Barchart"
import RecentOrders from "../RecentOrders"
// import TopDashboard from "../TopDashboard"

export default function ChildLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"  >
         
         {children}
      <div className="p-4 grid md:grid-cols-12 grid-cols-1 gap-2">
        
        <Barchart />
        <RecentOrders />
        
        
      </div>
        </div>
      
    )
  }