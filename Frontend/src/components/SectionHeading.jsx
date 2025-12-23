import React from "react";

import { Separator } from "@/components/ui/separator";
function SectionHeading({ heading, headingSuffix }) {
  return (
    <>
      <Separator className={"max-w-6xl mx-auto mb-8"}></Separator>
      <div className="text-4xl font-semibold max-w-7xl text-center mb-8">
        {heading}
        <span className="text-primary"> {headingSuffix}</span>
      </div>
    </>
  );
}

export default SectionHeading;
