const SecondSection = () => {
  return (
    <section className="py-10 lg:pt-0">
      <div className="wrapper flex gap-10">
        <div className="first lg:hidden  basis-1/2">
          <img
            className="h-[40vw] min-h-[500px] rounded-lg object-right object-cover"
            src="/images/crater-image.webp"
            alt=""
          />
        </div>
        <div className="second basis-1/2 lg:basis-full flex flex-col lg:gap-6 justify-between">
          <h3 className="text-gray-950 font-semibold text-lg">
            The oilfield services industry remains a cornerstone of energy
            production, enabling the exploration, extraction, and production of
            vital oil and natural gas resources.
          </h3>
          <img
            className=" hidden lg:block h-[500px] rounded-lg object-right object-cover"
            src="/images/crater-image.webp"
            alt=""
          />
          <div className="second ">
            <p className="text-black font-semibold mb-4">
              An oil recruiting firm
            </p>
            <h5 className="text-gray-700">
              Our Oilfield Services Consultancy and Recruitment is designed to
              meet the unique demands of this sector. Leveraging our expertise,
              we provide permanent and contract professionals from around the
              globe to address all your oilfield service staffing needs.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
