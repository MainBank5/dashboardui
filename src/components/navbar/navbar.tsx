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
    <div className="relative h-screen border-r-2">
      <div className="flex flex-col justify-between items-center p-4 pb-6 w-full flex-grow">

        <div className="flex justify-between items-center m-4 w-full flex-grow">
          <a href="/"><Image src={logo} width={200} height={200} alt="mylogo" className={cn('object-cover overflow-hidden transition-all', { "w-32 pr-4": expanded === true, "w-0": expanded === false })} /></a>

          <Button variant="secondary" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </Button>
        </div>
        
        <div className=" w-full">
          <Navicons expanded={expanded} />
        </div>
        
        
      </div>
    </div>
  )
}
