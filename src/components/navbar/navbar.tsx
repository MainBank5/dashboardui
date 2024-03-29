import Image from "next/image"
import logo from '../../../public/logoipsum-317.svg';
import { ChevronFirst, ChevronLast } from "lucide-react";
import Navicons from "./navicons";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full h-screen border-r-2">
        <div className="flex flex-col justify-between items-center p-4">

            <div className="flex justify-between items-center m-4">
                 <Image src={logo} width={120} height={120} alt="mylogo" className="object-cover"/>
                 
                 <ChevronFirst size={30}/>
            </div>
           <div className="flex-grow">
             <Navicons/>
           </div>
        </div>
    </div>
  )
}
