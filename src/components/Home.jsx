import React from 'react';
import Logo from "../Assets/logo.svg";
import image from "../Assets/image-web-3-desktop.jpg";

export default function Home() {

    let links = [
        { name: "Home", link: "/#about" },
        { name: "New", link: "/#services" },
        { name: "Popular", link: "/#pricing" },
        { name: "Trending", link: "/" },
        { name: "Categories", link: "/" },
      ];

  return (
    <div>

<div className="md:px-10 py-4 px-7 flex justify-between items-center sticky top-0 z-50">
          <img src={Logo} alt="" className="mx-36" />

          <nav className="sticky top-0 py-2 z-50 ">
            <ul className="md:flex pl-9 md:pl-0 flex gap-8 z-50">
              {links.map((link) => (
                <li className="font-semibold text-black  text-[22px] leading-[29px] my-7 md:my-0 z-50 md:ml">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <button className="btn  text-white text-[22px] font-semibold leading-[29px] border border-white my-0 py-2 px-3 md:ml-8 rounded md-static mx-36">
                Resume
              </button>
            </ul>
          </nav>
        </div>

        <div className='mt-20 w-3/4 ml-48 flex gap-8 h-[80%]'>
            <div>
            <span >
                <img src={image} alt="" />
            </span>
            <main className='flex gap-44 mt-10'>
            <span>
                <h1 className='text-7xl font-bold leading-2'>The Bright <br /> Future of <br /> Web 3.0?</h1>
                
            </span>

            <span>
                <h1 className='text-2xl font-normal leading-10'>We dive into the next evolution of the web that <br /> claims to put the power of the platforms back <br /> into the hands of the people. But is it really <br /> fulfilling its promise?</h1>

                <button className='mt-10 border-2 border-black px-10 text-3xl font-normal py-2'>Read More</button>

            </span>
            </main>
            </div>

            <div className='w-1/4 border-2 border-black px-6 '>
                <span className=''>
                    <h1 className='mt-10 text-4xl font-bold mb-2'>New</h1>
                    <h1 className='mb-2 font-bold text-lg'>Hydrogen VS Electric Cars</h1>
                    <h1 className='mb-4 text-[13px]'> Will hydrogen-fueled cars ever catch up to EVs?</h1>

                       <hr />
                </span>

                <span className=''>
                    <h1 className='mb-2 mt-4 font-extrabold text-base'>The Downsides of AI Artistry</h1>
                    <h1 className='mb-4 text-[13px]'> Will hydrogen-fueled cars ever catch up to EVs?</h1>

                       <hr />
                </span>

                <span className=''>
                    <h1 className='mb-2 mt-4 font-bold text-lg'>Is Vc Funding Drying Up?</h1>
                    <h1 className='mb-4 text-[13px]'>Private funding by VC firms is down 50% YOY. We take a look at what that means. </h1>

                       <hr />
                </span>

                <span className=''>
                    <h1 className='mb-2 mt-4 font-extrabold text-base'>The Downsides of AI Artistry</h1>
                    <h1 className='mb-4 text-[13px]'> Will hydrogen-fueled cars ever catch up to EVs?</h1>

                       <hr />
                </span>

                <span className=''>
                    <h1 className='mb-2 mt-4 font-bold text-lg'>Is Vc Funding Drying Up?</h1>
                    <h1 className='mb-4 text-[13px]'>Private funding by VC firms is down 50% YOY. We take a look at what that means. </h1>

                       <hr />
                </span>
                <span className=''>
                    <h1 className='mb-2 mt-4 font-extrabold text-base'>The Downsides of AI Artistry</h1>
                    <h1 className='mb-4 text-[13px]'> Will hydrogen-fueled cars ever catch up to EVs?</h1>

                       <hr />
                </span>


               
            </div>
        </div>















    </div>
  )
}
