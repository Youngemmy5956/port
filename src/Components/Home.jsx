import React from "react";
import Logo from "../Assets/logo.svg";
import emmy from "../Assets/IMG_3638 1.svg";
import arrow from "../Assets/Vectors.svg";

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
            <ul className="md:flex pl-9 md:pl-0 flex gap-8">
              {links.map((link) => (
                <li className="font-semibold text-white text-[22px] leading-[29px] my-7 md:my-0 md:ml">
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
          <p className="font-normal text-[40px] leading[38px] items-center text-[#FFB400] Great">
            Hello
          </p>
          <p className="font-bold text-[43px] leading-[124%] Inter text-white">
            I’m Nwamini Emmanuel <br /> a{" "}
            <b className="text-[#FFB400]">Full Stack</b> MERN Developer{" "}
          </p>
          <p className="text-[16px] font-normal leading[24%] text-[#E0E0E0] mt-8">
            I’m passionate about building innovative codebased disruptive <br />{" "}
            web and mobile solutions using stacks like javascript, Jquery,{" "}
            <br /> Github, HTML, CSS, PHP etc.{" "}
          </p>

          <button
            className="text-white font-medium text-[28px] leading-[41px] border border-[#691C44
               ] flex py-2 px-2 mt-14">
            Hire Me <img src={arrow} alt="" className="ml-3 mt-3" />{" "}
          </button>
        </span>

        <span>
          <img src={emmy} alt="" className="" />
        </span>
       </main>
      </section>

      <section></section>
    </div>
  );
}
