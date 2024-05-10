import { LayoutDashboard, Layers, BarChart2, Building2, Sprout, CreditCardIcon, Settings} from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


type LinksType = {name:string; path: string; icon:ReactElement; }[]

const Links:LinksType  = [
    {name:"Dashboard", path:"/dashboard", icon:<LayoutDashboard/>},
    {name:"Banking", path:"/banking", icon:<Layers/>},
    {name:"Investments", path:"/investments", icon:<BarChart2/>},
    {name:"Assets", path:"/assets", icon:<Building2/>},
    {name:"Savings", path:"/savings", icon :<Sprout/> },
    {name:"Balance", path:"/balance", icon:<CreditCardIcon/>},
]

 
export default function Navicons({ expanded }: { expanded: boolean }) {
    return (
        <div>
            <div className="flex flex-col gap-2 flex-grow w-full">
                {Links.map((link, index) => (
                    <Link key={index} href={link.path}  className={`relative overflow-hidden w-full group transition-colors ${buttonVariants({ variant: "ghost" })}`} >
                       
                            {link.icon} 
                            <span className={ cn('overflow-hidden transition-all', {"w-32 p-4": expanded === true}, {"w-0":expanded===false} )}>
                                {link.name}
                            </span>
                        {!expanded && <div className="absolute overflow-hidden left-full rounded-md px-1 ml-6 py-1 bg-slate-600 text-sm
                        invisible opacity-0 -translate-x-10 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                        ">{link.name}</div>}
                    </Link>
                ))}

                
            </div>
        </div>
    )
}
