import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start  overflow-hidden">
      <Badge className="mb-5">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3 mb-16">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            May 2023
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Technology in <br /> Electronics and Communication
              Engineering
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              Nirma University, Ahmedabad, India <br />
              <span className="text-sm">
                Related Coursework: Data Structures, Applied Statistics, Machine
                Learning, Computer Networks, Internet of Things
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Expected May 2025
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Master of Science in <br />
              Software Engineering Systems
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                I am currently Studying Bachelor of Computer Application form Doranda College Ranchi a Goverment College of Ranchi. 
                The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
