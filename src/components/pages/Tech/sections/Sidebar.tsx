const Sidebar = () => {
  return (
    <section className=" mx-auto  overflow-hidden">
      <div className="wrapper pb-10 lg:border-none  border-x border-[#BEBEBE]">
        <div className="items w-[94%] lg:w-full mx-auto">
          <div className="first pl-[10%] max-w-[600px]">
            <h5 className="text-gray-800 mb-6">
              Implementing and maintaining essential infrastructure to support
              transportation networks and urban development.
            </h5>
          </div>
          <div className="image-wrapper items-start sm:flex-col w-full flex gap-4">
            <div className="image sm:h-auto h-[50vw] overflow-hidden rounded-md basis-1/2">
              <img
                src="/images/first-frame.webp"
                alt="construction-image"
                className="h-full object-cover w-full"
              />
            </div>

            <div className="basis-1/2 sm:h-auto h-[80vw]  overflow-hidden rounded-md w-full">
              <img
                src="/images/second-frame.webp"
                alt="construction-image"
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
