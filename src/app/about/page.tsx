import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
const page = () => {

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Software Engineer And Web Developer</Heading>

        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am a Software Engineer based in Boston, Massachussets. I love
          crafting cool web projects and contributing to open-source projects. With a
          keen eye for detail and a commitment to create pixel perfect designs,
          I excel at creating seamless and responsive interfaces that leave a
          lasting impression.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between max-lg:flex-col mt-7 ">
        <Aboutfooter />
      </div>
 
    </div>
  );
};

export default page;
