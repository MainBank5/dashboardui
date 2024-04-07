


export default function DashboardLayout({children, analytics,watchlist }:{children:React.ReactNode; 
    analytics:React.ReactNode, watchlist:React.ReactNode}) {
  return (
    <div >
        {children}
       <div className="grid grid-cols-2 gap-6">
        {analytics}
        {watchlist}
       </div>
    </div>
  )
}
