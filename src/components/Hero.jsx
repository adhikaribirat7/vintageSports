
import Button from "../Button";
import hero from "../assets/ronaldo.jpg.png";

const Hero = () => {
  return (
    <>
      <div className="w-full mt-1 sm:col-span-12 bg-bg-grey flex sm:flex-row flex-col col-span-7">
        <div className="col-span-7  flex  justify-center gap-4  items-center">
          <div className="w-4/5 flex  flex-col md:gap-4">
            <span className="md:text-7xl text-6xl w-3/4 font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </span>
            <span className="text-gray-400 font-semibold text-xl">
              Browse through our diverse range of meticulosly crafted grments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <Button />
          </div>
        </div>
        <div className="sm:col-span-5 col-span-12 ">
          <img src={hero} className="" alt="" />
        </div>
        {/* <div className="col-span-12 bg-black w-full flex justify-evenly items-center gap-4   ">
          <SiNike className="text-white sm:text-8xl text-4xl" />
          <SiAdidas className="text-white sm:text-8xl text-4xl" />
          <SiThenorthface className="text-white sm:text-8xl text-4xl" />
          <SiUnderarmour className="text-white sm:text-8xl text-4xl" />
        </div> */}
        {/* <NewArrivals   /> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Hero;
