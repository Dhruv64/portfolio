"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
  value: any;
  num: number
}
const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  return (
  
    <Card className="w-full h-full relative z-20 opacity-[85%]">
      <CardHeader>
        <CardTitle>{value.title}</CardTitle>
       
      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
      <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3">
        {
          value.tags.map((itm:string, indx:number) => {
            // return <Badge key={indx}>{itm}</Badge>
            return <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${itm === 'Nextjs' && 'bg-teal-100 text-teal-800' || itm === 'Streamlit' && 'bg-yellow-100 text-yellow-800 ' || itm === 'Shadcn Ui' && 'bg-blue-100 text-blue-800' || itm === 'Typescript' && 'bg-red-100 text-red-800' || 'bg-gray-100 text-gray-800'}  `} key={indx}>{itm}</span>
          })
        }
        </div>
      </CardContent>
      
    </Card>
  );
};

export default ProjectCards;
