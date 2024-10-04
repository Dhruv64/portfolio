import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
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
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
        </div>
    </div>
  );
};

export default page;
