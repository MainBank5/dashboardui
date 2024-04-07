

export default function DashboardLayout({children, analytics, }:{children:React.ReactNode; 
    analytics:React.ReactNode, }) {
  return (
    <div className="">
        <div>{children}</div>
        <div className=" w-full">
            <div>{analytics}</div>   
        </div>
    </div>
  )
}
