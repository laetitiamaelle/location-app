import React from 'react'
import {Button} from "@/components/ui/button"
export default function Header({href}:{href:String}) {
 const identifiant =`#${href}`
  return (
    <header className='relative h-screen flex items-center justify-center bg-fixed bg-cover'
    style={{
        backgroundImage:`url('/img-home.jpg')`
    }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Villa loveDream</h1>
              <p className="test-lg md:text-2xl mb-8 text-white">
                Voyagez vers une destination de reve
              </p>
              <a href={identifiant}></a><Button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-p]">Reservez-maintenant!</Button>
            </div>

        

    </header>
  )
}
