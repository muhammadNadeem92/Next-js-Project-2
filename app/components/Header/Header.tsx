import Link from 'next/link'
import React from 'react'


  const Header = () => {
  return (
    <div>
      <header className="bg-cyan-400 overflow-auto">
        <nav>
          <ul>
            <li className="float-left p-6 "><Link href="./" className="text-white border  p-2 px-2 hover:bg-green-400  ">Home</Link></li>
            <li className="float-left p-6 "><Link href="./about" className="text-white border p-2 px-2 hover:bg-green-400">About</Link></li>
            <li className="float-left p-6 "><Link href="./services" className="text-white border p-2 px-2  hover:bg-green-400">Services</Link></li>
            <li className="float-left p-6 "><Link href="./contact" className="text-white border p-2 px-2 hover:bg-green-400">Contact</Link></li>
            <div>
            <button className="border text-white p-3 m-3 pl-3 float-right rounded hover:bg-green-400">Login</button>
            <button className="border text-white p-3 m-3 float-right rounded hover:bg-green-400">Sign Up</button>
                                
            </div>
           
          </ul>
        </nav>
      </header>

    </div>
  )
}
export default Header
