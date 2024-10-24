import React from "react";
import Image from "next/image";
import laptop from '../../images/laptop.png'

const Hero = () => {
  return (
    <div>
      <section>
        <br /><br /><br />
       <h1 className=" font-thin text-4xl	px-6 text-gray-400 hover:text-teal-100">     FAST,SIMPLE AND EASY</h1> 
      
      <div>
       <div className="lg:max-w-lg lg:w-full md:w-2 w-5 float-right  ">
          <Image src="/images/laptop.png" width={1200} height={1600} alt="laptop image"  className=" object-cover object-center rounded mx-auto"/>
          </div>
          </div>


        <h1 className="text-7xl space-x-80 font-bold p-1 m-1 px-5 text-teal-400 hover:text-blue-300 ">BUILD YOUR</h1>
        <h1 className="  text-7xl font-bold p-1 m-3 px-16 text-teal-400	hover:text-blue-300">OWN WEBSITE</h1>
        <pre className=" text-start text-orange-300	">       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, <br />    consectetur dignissimos enim, accusantium esse error quas aut labore <br />odit magnam similique tempora neque, eligendi corporis ratione aliquid eveniet.<br/>   Alias, itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. </pre>
        <ul>
          <li className="text-green-200 p-1 px-12 text-2xl font-thin pt-4 mt-2 hover:text-red-400">1 _ Web Development</li>
          <li className="text-green-200 p-1 px-12 text-2xl font-thin hover:text-yellow-300">2 _ Native Apps</li>
          <li className="text-green-200 p-1 px-12 text-2xl font-thin hover:text-red-300">3 _ Domain Services</li>
        </ul>
        
      </section>


    </div>
  );
};

export default Hero;
