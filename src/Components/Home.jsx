import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { AiOutlineGithub } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import Logo from "../Assets/logo.svg";
import Logo2 from "../Assets/emmy logo 2.svg";
import emmy from "../Assets/IMG_3638 1.svg";
import arrow from "../Assets/Vectors.svg";
import sign from "../Assets/Rectangle 523.svg";
import signs from "../Assets/Rectangle 523.svg";
import signss from "../Assets/Ellipse 1.svg";
import signed from "../Assets/Polygon 1.svg";
import signeds from "../Assets/Ellipse 164.svg";
import emmys from "../Assets/Rectangle 82.svg";
import elispe from "../Assets/Ellipse 2.svg";
import elispe1 from "../Assets/Ellipse 1.svg";
import maps from "../Assets/istockphoto-1300013178-612x612 2.svg";
import rect from "../Assets/Rectangle 74.svg";
import rect1 from "../Assets/Rectangle 75.svg";
import gold from "../Assets/Gold.svg";
import silver from "../Assets/silver.svg";
import bronze from "../Assets/bronze.svg";
import ckeck from "../Assets/Check.svg";
import face from "../Assets/Facebook.svg";
import insta from "../Assets/Instagram.svg";
import twit from "../Assets/Twitter.svg";
import lins from "../Assets/Linkeding.svg";
import yout from "../Assets/Youtube.svg";
import drib from "../Assets/Dribbble.svg";
import mapin from "../Assets/map-pin.svg";
import mail from "../Assets/mail.svg";
import phone from "../Assets/phone-call.svg";
import arrow2 from "../Assets/Vectora.svg";
import hero from "../Assets/Rectangle 533.svg";
import hero1 from "../Assets/Rectangle 553.svg";
import phones from "../Assets/smartphone.svg";
import cover from "../Assets/web cover.svg";
import thumb from "../Assets/Thumbnail.svg";
import devn from "../Assets/Screenshot (441).png";
import beere from "../Assets/Screenshot (442).png";
import newel from "../Assets/Screenshot (443).png";
import furn from "../Assets/Screenshot (444).png";
import redt from "../Assets/Rectangle 46.svg";
import ReactPaginate from "react-paginate";
import { Carousel } from "@material-tailwind/react";
import svgs from "../Assets/th-removebg-preview.png";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  let links = [
    { name: "About Me", link: "/#about" },
    { name: "Portfolio", link: "/#services" },
    { name: "Pricing", link: "/#pricing" },
    { name: "Projects", link: "/#services" },
    { name: "Blog", link: "/#pricing" },
    { name: "Contact Me", link: "/#contact" },
  ];

  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader
          className="mt-[23%] ml-[45%]"
          color={"#691C44"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <section>
          <section class="body">
            <div className="md:px-10 py-4 px-7 flex justify-between items-center sticky top-0 z-50">
              <img src={Logo} alt="" className="mx-36 animate-spin" />

              <nav className="sticky top-0 py-2 z-50 ">
                <ul className="md:flex pl-9 md:pl-0 flex gap-8 z-50">
                  {links.map((link) => (
                    <li className="font-semibold text-white text-[22px] leading-[29px] my-7 md:my-0 z-50 md:ml">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                  <button className="btn  text-white text-[22px] font-semibold leading-[29px] border border-white my-0 py-2 px-3 md:ml-8 rounded md-static mx-36">
                    Resume
                  </button>
                </ul>
              </nav>
            </div>

            <main className="flex ml-96 mt-32">
              <span className="">
                <img src={signeds} alt="" className="animate-ping" />
                <p className="font-normal text-[40px] leading[38px] animate-bounce items-center text-[#FFB400] Great">
                  Hello
                </p>
                <p className="font-bold text-[43px] leading-[124%] Inter text-white shadow-2xl">
                  I’m Nwamini Emmanuel <br /> a{" "}
                  <b className="text-[#FFB400] animate-pulse">Full Stack</b>{" "}
                  MERN Developer{" "}
                </p>
                <p className="text-[16px] font-normal leading[24%] text-[#E0E0E0] mt-8">
                  <img src={signed} alt="" className="animate-ping" />
                  I’m passionate about building innovative codebased disruptive{" "}
                  <br /> web and mobile solutions using stacks like javascript,
                  Jquery, <br /> Github, HTML, CSS, PHP etc.{" "}
                  <img src={sign} alt="" className="animate-bounce" />
                </p>

                {/* <span className="flex gap-6 mt-10">
            <img src={svgs} alt="" />
            <img src={sign} alt="" />
            <img src={sign} alt="" />
            </span> */}

                <button
                  className="text-white font-medium text-[28px] leading-[41px] border-4 
            border-[#691C44] flex py-2 px-2 mt-14 hover:animate-bounce"
                >
                  Hire Me <img src={arrow} alt="" className="ml-3 mt-3" />{" "}
                </button>

                <img src={emmys} alt="" className="animate-pulse" />
              </span>

              <span>
                <img src={sign} alt="" className="animate-bounce" />
                <img src={emmy} alt="" className="hover:animate-pulse" />
                <img src={signed} alt="" className="animate-bounce" />
                <img src={emmys} alt="" className="ml-96 animate-bounce" />
              </span>
            </main>

            <span className="flex gap-2">
              <span className="flex gap-6 animate-bounce ml-96">
                <img src={sign} alt="" />
                <img src={sign} alt="" />
                <img src={sign} alt="" />
              </span>

              <span className="flex gap-6 animate-bounce ml-96">
                <img src={signed} alt="" />
                <img src={signed} alt="" />
                <img src={signed} alt="" />
              </span>

              <span className="flex gap-6 animate-bounce ml-96">
                <img src={signeds} alt="" />
                <img src={signeds} alt="" />
                <img src={signeds} alt="" />
              </span>
            </span>
          </section>

          <main class="main">
            <section className="ml-96 pt-52 gap-32 flex">
              <span className="hover:animate-bounce">
                <img src={elispe} alt="" className="" />
                <img src={elispe1} alt="" className="-mt-60" />
              </span>

              <span id="about" className="text-white">
                <p className="font-bold text-[30px] mt-8 leading-[124%] Inter">
                  About Me
                </p>
                <div className="w-[20%] border-4 border-[#943265] animate-bounce"></div>
                <p className="font-normal text-[20px] leading-[30px] mt-8">
                  I AM NWAMINI EMMANUEL, A Freelancer ,Web-Developer, Software
                  Engineer, <br /> Crypto-Trader and A Teacher . I’m passionate
                  about building innovative <br /> codebased disruptive web and
                  mobile solutions using stacks like javascript, <br /> Jquery,
                  Github, HTML, CSS, PHP etc. I enjoyed learning new things and{" "}
                  <br /> working with group of developers around me and the
                  world. I,m fast about <br /> thinking of new ideas, as well
                  as, solving real life problems with the use of the <br />{" "}
                  underlisted skills i possess.
                </p>

                <button className="mt-10 border-4 border-[#943265] px-8 py-2 bg-[#943265] rounded-lg font-medium text-[20px]">
                  Download Cv
                </button>
              </span>
            </section>

            <section id="services" className="text-white mt-40 ">
              <p className="text-[#943265] font-bold text-[20px] ml-96 leading-[24px]">
                What i do
              </p>
              <p className="font-bold text-[30px] ml-96 leading-[124%]">
                My Portfolio
              </p>
              <div className="w-[5%] border-4 border-[#943265] ml-96"></div>
              <p className="font-normal text-[16px] ml-96 leading-[24px] pt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis <br /> enim velit
                mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              <Carousel className="rounded-xl">
                <span className="w-full flex gap-8 mt-20  px-[200px] ">
                  <div className="lg:w-1/3 border-white border-4 px-4 py-6">
                    <img src={cover} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>

                    <span className="gap-10 flex justify-center">
                      <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                        <AiOutlineGithub className="mt-[6px]" />
                        View code
                      </button>

                      <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                        <GrView className="mt-[6px]" />
                        View Live
                      </button>
                    </span>
                  </div>

                  <div className="lg:w-1/3 border-white border-4 px-4 py-6">
                    <img src={thumb} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>
                    </span>

                    <span className="gap-10 flex  justify-center">
                      <button className="mt-10 border-4  gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                        <AiOutlineGithub className="mt-[6px]" />
                        View code
                      </button>
                      <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                        <GrView className="mt-[6px]" />
                        View Live
                      </button>
                    </span>
                  </div>

                  <div className="lg:w-1/3 border-white border-4 px-4 py-6">
                    <img src={devn} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>

                      <span className="gap-10 flex justify-center">
                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <AiOutlineGithub className="mt-[6px]" />
                          View code
                        </button>

                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <GrView className="mt-[6px]" />
                          View Live
                        </button>
                      </span>
                    </span>
                  </div>
                </span>

                <span className="w-full flex gap-8 mt-20  px-[200px] pb-10">
                  <div className="lg:w-1/3 border-white border-4 px-4 py-6">
                    <img src={beere} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>

                      <span className="gap-10 flex justify-center">
                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <AiOutlineGithub className="mt-[6px]" />
                          View code
                        </button>

                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <GrView className="mt-[6px]" />
                          View Live
                        </button>
                      </span>
                    </span>
                  </div>

                  <div className="lg:w-1/3  border-white border-4 px-4 py-6">
                    <img src={newel} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>

                      <span className="gap-10 flex justify-center">
                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <AiOutlineGithub className="mt-[6px]" />
                          View code
                        </button>

                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <GrView className="mt-[6px]" />
                          View Live
                        </button>
                      </span>
                    </span>
                  </div>

                  <div className="lg:w-1/3 border-white border-4 px-4 py-6">
                    <img src={furn} alt="" className="w-[100%] h-[40%]" />
                    <span>
                      <h1 className="text-white text-2xl mt-4 text-center font-bold">
                        Wypa cleaning service
                      </h1>
                      <h1 className="text-white text-xl mt-6">
                        A fully mobile responsive web dashboard built with
                        react, typescript, tailwind and redux for state
                        management.
                      </h1>
                      <h1 className="text-white text-xl mt-8 text-center">
                        React | Redux | Tailwind
                      </h1>

                      <span className="gap-10 flex justify-center">
                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <AiOutlineGithub className="mt-[6px]" />
                          View code
                        </button>

                        <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                          <GrView className="mt-[6px]" />
                          View Live
                        </button>
                      </span>
                    </span>
                  </div>
                </span>
              </Carousel>
            </section>
          </main>

          <section id="pricing" className="bg-black [#040420] pt-10 pb-24 ">
            <span className="">
              <span className="">
                <p className="text-white font-bold text-[30px] leading-[130%] ml-96">
                  Check Out Our <br />
                  News Blog
                </p>
                <div className="w-[5%] border-4 border-[#943265] mt-2 ml-96"></div>
              </span>
            </span>

            <img src={maps} alt=" " className="ml-[500px]" />

            <span className="w-full flex gap-8 px-[200px] -mt-[520px] ">
              <div className="lg:w-1/3 border-[#943265]  border-4 px-4 py-6">
                <img src={thumb} alt="" className="w-[100%] h-[40%]" />
                <span>
                  <h1 className="text-white text-2xl mt-4 text-center font-bold">
                    Wypa cleaning service
                  </h1>
                  <h1 className="text-white text-xl mt-6">
                    A fully mobile responsive web dashboard built with react,
                    typescript, tailwind and redux for state management.
                  </h1>
                </span>

                <span className="gap-10 flex justify-center">
                  <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                    <GrView className="mt-[6px]" />
                    View
                  </button>
                </span>
              </div>

              <div className="lg:w-1/3 border-[#943265]  border-4 px-4 py-6">
                <img src={thumb} alt="" className="w-[100%] h-[40%]" />
                <span>
                  <h1 className="text-white text-2xl mt-4 text-center font-bold">
                    Wypa cleaning service
                  </h1>
                  <h1 className="text-white text-xl mt-6">
                    A fully mobile responsive web dashboard built with react,
                    typescript, tailwind and redux for state management.
                  </h1>
                </span>

                <span className="gap-10 flex  justify-center">
                  <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                    <GrView className="mt-[6px]" />
                    View
                  </button>
                </span>
              </div>

              <div className="lg:w-1/3 border-[#943265] border-4 px-4 py-6 ">
                <img src={thumb} alt="" className="w-[100%] h-[40%]" />
                <span>
                  <h1 className="text-white text-2xl mt-4 text-center font-bold">
                    Wypa cleaning service
                  </h1>
                  <h1 className="text-white text-xl mt-6">
                    A fully mobile responsive web dashboard built with react,
                    typescript, tailwind and redux for state management.
                  </h1>

                  <span className="gap-10 flex justify-center">
                    <button className="mt-10 border-4 gap-2 border-[#943265] px-4 py-2 bg-[#943265] rounded-lg font-medium text-[20px] flex">
                      <GrView className="mt-[6px]" />
                      View
                    </button>
                  </span>
                </span>
              </div>
            </span>

            <div className="flex items-center gap-8">
              <IconButton
                size="sm"
                variant="outlined"
                color="blue-gray"
                onClick={prev}
                disabled={active === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
              </IconButton>
              <Typography color="gray" className="font-normal">
                Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
                <strong className="text-blue-gray-900">10</strong>
              </Typography>
              <IconButton
                size="sm"
                variant="outlined"
                color="blue-gray"
                onClick={next}
                disabled={active === 10}
              >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </IconButton>
            </div>
          </section>

          <section
            id="contact"
            className="text-white bg-[#000A2D] pl-96 pb-24 gap-48 flex"
          >
            <span className="">
              <span className="pt-20">
                <span className="flex pt-20">
                  <img src={Logo2} alt="" className="animate-spin" />
                  <p className="font-bold text-[30px] leading-[124%]">
                    EMMYtech
                  </p>
                </span>
                <p className="font-normal text-[12px] leading-4">
                  Amet minim mollit non deserunt ullamco est sit <br /> aliqua
                  dolor do amet sint. Velit officia <br /> consequat duis enim
                  velit mollit.{" "}
                </p>

                <span className="flex gap-6 mt-6 animate-bounce">
                  <a href=" https://www.facebook.com/emmanuel.nwamini.773">
                    <img src={face} alt="" />{" "}
                  </a>
                  <a href="">
                    <img src={insta} alt="" />
                  </a>
                  <a href="https://twitter.com/onyedicach">
                    {" "}
                    <img src={twit} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuel-godwin-a21081215/">
                    <img src={lins} alt="" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCTj9s1zEqkw1OYtTLhbiTtg">
                    {" "}
                    <img src={yout} alt="" />
                  </a>
                  <a href="">
                    <img src={drib} alt="" />
                  </a>
                </span>
              </span>
            </span>

            <span className="mt-20">
              <p className="font-bold text-[18px] leading-[124%]">Contact Me</p>
              <p className="flex gap-4 mt-4">
                {" "}
                <img src={mapin} alt="" className="animate-pulse" /> 234 Church
                StreetPort Road, <br /> Ibadan, Oyo State nigeria
              </p>{" "}
              <br />
              <p className="flex  gap-4">
                {" "}
                <img src={mail} alt="" className="animate-pulse" />{" "}
                emmanuelgodwin558@gmail.com
              </p>{" "}
              <br />
              <p className="flex  gap-4">
                {" "}
                <img src={phone} alt="" className="animate-pulse" /> +234 905
                956 5389
              </p>{" "}
              <br />
              <hr className="bg-[#000A2D] mt-20 w-full" />
              <p> &copy; 2023 All Rights Reserved.emmanuel</p>
            </span>

            <span className="mt-20">
              <p className="font-bold text-[18px] leading-[124%]">
                Newsletters
              </p>
              <p className=" mt-4">
                Amet minim mollit non deserunt ullamco est sit <br /> aliqua
                dolor do amet sint. Velit officia <br /> consequat duis enim
                velit mollit.{" "}
              </p>{" "}
              <br />
              <button className="bg-white text-[#943265] rounded-full px-6 py-3 flex gap-2">
                Enter your email <img src={arrow2} alt="" />
              </button>
              {/* <input
              type="text"
              placeholder="Enter your email "
              className="border-4 border-[white] bg-white text-[#943265] rounded-full px-2 py-1" 
              
            /> */}
            </span>
          </section>
        </section>
      )}
    </div>
  );
}
