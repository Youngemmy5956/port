import React from 'react';
import Logo from "../Assets/logo.svg"

export default function Home() {

    let links = [
        { name: "About Me", link: "/#about" },
        { name: "Services", link: "/#services" },
        { name: "Pricing", link: "/#pricing" },
        { name: "Projects", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Contact Me", link: "/#contact" },
      ];

  return (
    <div>

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















    </div>
  )
}
