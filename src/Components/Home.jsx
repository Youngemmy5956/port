import React from "react";
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

export default function Home() {
  let links = [
    { name: "About Me", link: "/" },
    { name: "Services", link: "/" },
    { name: "Resume", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact Me", link: "/" },
  ];

  return (
    <div>
      <section class="body">
        <div className="md:px-10 py-4 px-7 flex justify-between items-center sticky top-0 z-50">
          <img src={Logo} alt="" className="mx-36" />

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
            <img src={signeds} alt="" />
            <p className="font-normal text-[40px] leading[38px] items-center text-[#FFB400] Great">
              Hello
            </p>
            <p className="font-bold text-[43px] leading-[124%] Inter text-white">
              I’m Nwamini Emmanuel <br /> a{" "}
              <b className="text-[#FFB400]">Full Stack</b> MERN Developer{" "}
            </p>
            <p className="text-[16px] font-normal leading[24%] text-[#E0E0E0] mt-8">
              <img src={signed} alt="" />
              I’m passionate about building innovative codebased disruptive{" "}
              <br /> web and mobile solutions using stacks like javascript,
              Jquery, <br /> Github, HTML, CSS, PHP etc.{" "}
              <img src={sign} alt="" />
            </p>

            <button
              className="text-white font-medium text-[28px] leading-[41px] border-4 
            border-[#691C44] flex py-2 px-2 mt-14"
            >
              Hire Me <img src={arrow} alt="" className="ml-3 mt-3" />{" "}
            </button>
            <img src={emmys} alt="" />
          </span>

          <span>
            <img src={sign} alt="" />
            <img src={emmy} alt="" className="" />
            <img src={signed} alt="" />
            <img src={emmys} alt="" className="ml-96" />
          </span>
        </main>
      </section>

      <main class="main">
        <section className="ml-96 pt-52 gap-32 flex">
          <span className="">
            <img src={elispe} alt="" />
            <img src={elispe1} alt="" className="-mt-60" />
          </span>

          <span className="text-white">
            <p className="font-bold text-[30px] mt-8 leading-[124%] Inter">
              About Me
            </p>
            <div className="w-[20%] border-4 border-[#943265]"></div>
            <p className="font-normal text-[20px] leading-[30px] mt-8">
              I AM NWAMINI EMMANUEL, A Freelancer ,Web-Developer, Software
              Engineer, <br /> Crypto-Trader and A Teacher . I’m passionate
              about building innovative <br /> codebased disruptive web and
              mobile solutions using stacks like javascript, <br /> Jquery,
              Github, HTML, CSS, PHP etc. I enjoyed learning new things and{" "}
              <br /> working with group of developers around me and the world.
              I,m fast about <br /> thinking of new ideas, as well as, solving
              real life problems with the use of the <br /> underlisted skills i
              possess.
            </p>

            <button className="mt-10 border-4 border-[#943265] px-8 py-2 bg-[#943265] rounded-lg font-medium text-[20px]">
              Download Cv
            </button>
          </span>
        </section>

        <section className="text-white mt-40 ml-96">
          <p className="text-[#943265] font-bold text-[20px] leading-[24px]">
            What i do
          </p>
          <p className="font-bold text-[30px] leading-[124%]">My Services</p>
          <div className="w-[5%] border-4 border-[#943265]"></div>
          <p className="font-normal text-[16px] leading-[24px] pt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis <br /> enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </section>
      </main>

      <section className="bg-white mt-20 mb-24 ">
        <span className="">
          <span className="">
            <p className="text-[#943265] font-bold text-[30px] leading-[130%] ml-96">
              Check Out Our <br /> Pricing Packages
            </p>
            <div className="w-[5%] border-4 border-[#FFB400] mt-2 ml-96"></div>
          </span>
          <span className="flex flex-col">
            <button className="font-bold ml-96 -mb-80 text-[#FFB400] border-4 rounded border-white text-[20px] leading-6">
              <button className="bg-[#FFB400] font-bold text-[20px] leading-6 px-6 py-1 text-white rounded-full ">
                Monthly
              </button>
              Yearly
            </button>
          </span>
        </span>

        <img src={maps} alt=" " className="ml-[500px]" />

        <span className="flex gap-10 -mt-[500px] ml-96 text-white">
          <div className="bg-[#000A2C] w-[25%] h-[20%]">
            <span className="flex px-2 py-8 gap-6">
              <img src={bronze} alt="" className="pb-[500px]" />
              <span className="mt-4">
                <p className="font-bold text-[30px] leading-5">Bronze Plan</p>
                <p className="font-normal text-[60px] leading-[130%]">
                  $150.00
                </p>
                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    UI Design
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    web development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    Logo development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />5 Websites
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    unlimited user
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    20 gB bandwith
                  </p>
                  <hr className="w-full" />
                </span>

                <button className="mt-10 px-6 py-2 bg-[#EA1383] border border-[#EA1383] ml-[60px] rounded-full">
                  Popular
                </button>
              </span>
            </span>
          </div>

          <div className="bg-[#EA1383] w-[25%] h-[20%]">
            <span className="flex px-2 py-8 gap-6">
              <img src={silver} alt="" className="pb-[500px]" />
              <span className="mt-4">
                <p className="font-bold text-[30px] leading-5">Silver Plan</p>
                <p className="font-normal text-[60px] leading-[130%]">
                  $150.00
                </p>
                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    UI Design
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    web development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    Logo development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />5 Websites
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    unlimited user
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    20 gB bandwith
                  </p>
                  <hr className="w-full" />
                </span>

                <button className="mt-10 px-6 py-2 bg-[#000A2C] border border-[#EA1383] ml-[60px] rounded-full">
                  Popular
                </button>
              </span>
            </span>
          </div>

          <div className="bg-[#000A2C] w-[25%] h-[20%]">
            <span className="flex px-2 py-8 gap-6">
              <img src={gold} alt="" className="pb-[500px]" />
              <span className="mt-4">
                <p className="font-bold text-[30px] leading-5">Gold Plan</p>
                <p className="font-normal text-[60px] leading-[130%]">
                  $150.00
                </p>
                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    UI Design
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    web development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    Logo development
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />5 Websites
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    unlimited user
                  </p>
                  <hr className="w-full" />
                </span>

                <span className="">
                  <p className="flex mt-10 gap-4 text-[20px]">
                    {" "}
                    <img src={ckeck} alt="" />
                    20 gB bandwith
                  </p>
                  <hr className="w-full" />
                </span>

                <button className="mt-10 px-6 py-2 bg-[#EA1383] border border-[#EA1383] ml-[60px] rounded-full">
                  Popular
                </button>
              </span>
            </span>
          </div>
        </span>
      </section>

      <section className="text-white bg-[#000A2D] pl-96 pb-32 gap-48 flex">
        <span className="">
          <span className="pt-20">
            <span className="flex pt-20">
              <img src={Logo2} alt="" className="" />
              <p className="font-bold text-[30px] leading-[124%]">EMMYtech</p>
            </span>
            <p className="font-normal text-[12px] leading-4">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
              do amet sint. Velit officia <br /> consequat duis enim velit
              mollit.{" "}
            </p>
            <span className="flex gap-6 mt-6">
              <img src={face} alt="" />
              <img src={insta} alt="" />
              <img src={twit} alt="" />
              <img src={lins} alt="" />
              <img src={yout} alt="" />
              <img src={drib} alt="" />
            </span>
          </span>
        </span>

        <span className="mt-20">
          <p className="font-bold text-[18px] leading-[124%]">Contact Me</p>
          <p className="flex gap-4 mt-4">
            {" "}
            <img src={mapin} alt="" /> 234 Church StreetPort Road, <br />{" "}
            Ibadan, Oyo State nigeria
          </p>{" "}
          <br />
          <p className="flex  gap-4">
            {" "}
            <img src={mail} alt="" /> nwaminiemmanuel@gmail.com
          </p>{" "}
          <br />
          <p className="flex  gap-4">
            {" "}
            <img src={phone} alt="" /> +234 905 956 5389
          </p>{" "}
          <br />
        </span>

        <span className="mt-20">
          <p className="font-bold text-[18px] leading-[124%]">Newsletters</p>
          <p className=" mt-4">
            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
            do amet sint. Velit officia <br /> consequat duis enim velit mollit.{" "}
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

      <section>
        
      </section>
    </div>
  );
}
