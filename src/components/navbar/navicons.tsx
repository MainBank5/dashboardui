import { LayoutDashboard, 
    Layers, 
    BarChart2, 
    Building2,
    Sprout,
    CreditCardIcon,
} from "lucide-react";

import Link from "next/link";
import { ReactElement } from "react";
type LinksType = {
    name:string;
    path: string;
    icon:ReactElement;
}[]
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
     <div className="flex flex-wrap py-4 w-full">
        <ul  className="flex flex-col gap-4 flex-grow justify-between items-center">
            {Links.map((link, index) => (
                <li key={index} className="w-full flex justify-between items-center">
                    <Link href={link.path} className=" relative flex self-center flex-grow">{link.icon} <span className="px-4 self-center text-center"> {link.name}</span></Link>
                </li>
            ))}
        </ul>
     </div>
   )
 }
 