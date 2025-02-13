const ReachOut = () => {
  return (
    <section className="bg-secondary-100 py-[10rem] relative">
      <img
        src="/images/last-section.webp"
        alt=""
        className="absolute top-0 bottom-0 h-full w-full pointer-events-none right-0"
      />
      <div className="content wrapper relative z-[20] sm:!max-w-300px !max-w-[600px] mx-auto">
        <h4 className="text-secondary-800 md:text-3xl text-pretty text-center font-semibold text-4xl ">
          We truly have the best affordable and trusted services for your
          business
        </h4>

        <button className="bg-gray-50 font-semibold block mt-24 mx-auto w-max px-12 py-4 text-xl rounded-[3rem] text-black">
          Reach out
        </button>
      </div>
    </section>
  );
};
export default ReachOut;
