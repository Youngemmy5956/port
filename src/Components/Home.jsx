import React from 'react'
import Logo from "../Assets/logo.svg"

export default function Home() {

    let links = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/" },
        { name: "Courses", link: "/" },
        { name: "Testimonial", link: "/" },
        { name: "Community", link: "/" },
      ];

  return (
    <div>

<div className="md:px-10 py-4 px-7 flex justify-between items-center sticky top-0 bg-[#004DB3] z-50">
        <img src={Logo} alt="" className="mx-36" />

        <nav className="sticky top-0 py-2 z-50 ">
          <ul className="md:flex pl-9 md:pl-0 flex gap-6">
            {links.map((link) => (
              <li className="font-semibold my-7 md:my-0 md:ml">
                <a href="/">{link.name}</a>
              </li>
            ))}
            <button className="btn bg-white  my-0 py-2 px-3 md:ml-8 rounded md-static mx-36">
              Contact Me
            </button>
          </ul>
        </nav>
      </div>













    </div>
  )
}
