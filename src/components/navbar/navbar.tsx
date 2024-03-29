"use client"
import Image from "next/image"
import logo from '../../../public/logoipsum-317.svg';
import { ChevronFirst, ChevronLast } from "lucide-react";
import Navicons from "./navicons";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex flex-col w-full h-screen border-r-2">
        <div className="flex flex-col justify-between items-center p-6">

            <div className="flex justify-between items-center m-4 w-full flex-grow">
                 <a href="/"><Image src={logo} width={120} height={120} alt="mylogo" className={cn('object-cover overflow-hidden transition-all',{"w-32":expanded===true, "w-0":expanded===false})}/></a>

                <Button variant="secondary" onClick={() => setExpanded(!expanded) }>
                   {expanded ? <ChevronFirst size={30}/> : <ChevronLast size={30} />}
                </Button> 
            </div>
           <div className="flex-grow w-full">
             <Navicons/>
           </div>
        </div>
    </div>
  )
}
