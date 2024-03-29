import { LayoutDashboard, Layers, BarChart2, Building2, Sprout, CreditCardIcon, Settings} from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


type LinksType = {name:string; path: string; icon:ReactElement; }[]

const Links:LinksType  = [
    {name:"Dashboard", path:"/", icon:<LayoutDashboard/>},
    {name:"Banking", path:"/banking", icon:<Layers/>},
    {name:"Investments", path:"/investments", icon:<BarChart2/>},
    {name:"Assets", path:"/assets", icon:<Building2/>},
    {name:"Savings", path:"/savings", icon :<Sprout/> },
    {name:"Balance", path:"/balance", icon:<CreditCardIcon/>},
]

 
export default function Navicons({}) {
   return (
     <div className="flex flex-wrap py-2 w-full">
        <div  className="flex flex-col gap-2 flex-grow justify-between items-center">
            {Links.map((link, index) => (
                <li key={index} className={` w-full ${buttonVariants({ variant: "ghost" })}`} >
                    <Link href={link.path} className=" relative flex self-center w-full flex-grow">{link.icon} <span className={`px-4 self-center text-left `}> {link.name}</span></Link>
                </li>
            ))}

           <div className={`border-t-2 my-4 w-full flex flex-grow self-center justify-between ${buttonVariants( {variant:"ghost"} )}`}>
            <p className="relative py-6 font-semibold flex items-center w-full flex-grow"><Settings/> <span className="px-4 self-center text-left font-semibold">Settings</span></p>
           </div> 
        </div>
        
     </div>
   )
 }
 