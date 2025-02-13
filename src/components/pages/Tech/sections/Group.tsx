"use client";
import Button from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/hooks/useWindowSize";
import { Ui } from "./Weird";
export const Group = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <div className="mt-5 flex items-center lg:flex-col gap-10">
      <Ui />
      <div className={"second lg:py-20 lg:w-screen lg:mx-[50vw] lg:bg-white"}>
        <div className={`item ${isMobile && "wrapper"}`}>
          <h6 className="text-3xl sm:text-2xl max-w-[400px] mb-8 font-bold">
            Are you ready to transform your business with our IT service
          </h6>
          <Button
            primary
            className="bg-secondary-700 text-white"
            text="Get started"
          />
        </div>
      </div>
    </div>
  );
};
