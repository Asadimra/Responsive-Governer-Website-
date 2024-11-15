import Image from "next/image";
export default function Hero() {
  return (
    <div className="bg-white">
      <div className=" pt-12  lg:flex  ">
        <div className="w-full   text-center lg:ml-16 lg:text-left   ">
          <h1 className="font-bold text-4xl  md:text-5xl  lg:text-6xl  lg:font-extrabold text-sky-900 ">
            Governor Sindh
          </h1>
          <h1 className="font-normal text-2xl md:text-3xl lg:text-4xl ">
            Kamran Khan Tessori
          </h1>
          <h1 className="mt-5 font-semibold text-2xl  lg:text-4xl  text-sky-500">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer
            (GenEng)
          </h1>
          <p className="my-5 font-extrabold text-xl md:text-2xl  lg:text-3xl  text-sky-700">
            Earn upto $5,000/Month
          </p>
          <p className="my-5 font-extrabold text-xl md:text-3xl  lg:text-4xl text-sky-700 ">
            Now Admission are open <br />
            in Hyderabad
          </p>
          <div className="lg:flex ">
            <button className="px-20 py-3 lg:px-9  rounded-lg text-white text-xl   font-semibold bg-sky-900  ">
              Apply Now
            </button>
            <p className="mt-2 font-extrabold lg:font-black text-2xl md:text-3xl lg:text-4xl text-sky-700 lg:ml-20">
              562,143
            </p>
          </div>
          <p className="lg:ml-64">Accepted Application</p>
        </div>
        <Image
          className="mt-4 m-auto"
          src="/K.png"
          alt=""
          height={200}
          width={500}
        />
      </div>
      <p className="text-sky-900  mt-8 font-extrabold text-3xl text-center">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur{" "}
        <br /> Developing Billion-Dollar Valued Developers and Solopreneurs
      </p>
      <p className=" m-4 mt-8 font-medium text-sm lg:m-11 hyphens-auto lg:text-xl">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="mx-10  flex flex-col  md:justify-around  md:flex-row ">
        <Image
          className="pb-4 md:w-52 lg:w-96 rounded-lg"
          src="/image1.jpg"
          alt=""
          height={100}
          width={250}
        />
        <Image
          className=" pb-4 md:w-52 lg:w-96 rounded-lg"
          src="/image2.jpg"
          alt=""
          height={100}
          width={250}
        />
        <Image
          className="pb-4 md:w-52 lg:w-96 rounded-lg"
          src="/image3.jpg"
          alt=""
          height={100}
          width={250}
        />
      </div>
    </div>
  );
}
