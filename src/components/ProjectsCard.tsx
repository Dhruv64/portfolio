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

interface projectcardprops {
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
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
            return <Badge key={indx}>{itm}</Badge>
          })
        }
        </div>
      </CardContent>
      
    </Card>
  );
};

export default ProjectCards;
