

export default function DashboardLayout({children, 
    analytics, 
    commodities, 
    watchlist}:{children:React.ReactNode; analytics:React.ReactNode, 
        commodities:React.ReactNode; watchlist:React.ReactNode}) {
  return (
    <div>
        <div>{children}</div>
        <div className="flex">
            <div className="flex flex-col flex-wrap">
                <div>{analytics}</div>
                <div>{commodities}</div>
            </div>
            <div className="flex flex-1">{watchlist}</div>
        </div>
    </div>
  )
}
