const StayUpdated = () => {
  return (
    <section className="py-20 overflow-hidden text-white">
      <div className="wrapper">
        <div className="big-box grid place-items-center">
          <div className="content relative overflow-hidden bg-primary-500 sm:py-[5rem]  py-[10rem] md:w-full md:px-10 w-[90%]  rounded-2xl">
            <img
              src="/images/vector-bg.webp"
              alt=""
              className="absolute  pointer-events-none h-full w-full inset-0 bottom-0  right-0"
            />
            <h4 className="text-4xl sm:text-xl z-[100] mb-8 text-center font-semibold">
              Stay Updated with the Latest <br /> from Asiusdeloy LTD
            </h4>
            <p className="text-primary-100 z-[5] text-center mb-8">
              Sign up for our newsletter to receive updates on our projects,
              services, <br /> and industry insights straight to your inbox
            </p>

            <div className="input flex relative z-[10] justify-between bg-white mx-auto p-1 max-w-[400px] pl-8 rounded-full ">
              <input
                placeholder="Input E-Mail address"
                className="outline-none placeholder:text-gray-800 flex-1 border-none text-gray-800 focus:outline-none"
                type="email"
                name=""
                id=""
              />
              <span className="button cursor-pointer size-[3rem] grid place-items-center rounded-full bg-black">
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1899 2.37465C20.2381 1.82447 19.8311 1.33938 19.281 1.29118L10.3153 0.505631C9.76513 0.457426 9.28005 0.864354 9.23184 1.41453C9.18364 1.96471 9.59057 2.44979 10.1407 2.498L18.1102 3.19626L17.4119 11.1657C17.3637 11.7159 17.7707 12.201 18.3208 12.2492C18.871 12.2974 19.3561 11.8905 19.4043 11.3403L20.1899 2.37465ZM1.44933 18.478L19.8364 3.05349L18.551 1.52124L0.163951 16.9458L1.44933 18.478Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StayUpdated;
