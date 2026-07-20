'use client'
import React from 'react'
import{FC} from "react"
import { CookingPot,Waves,Bath,Square, Bed } from 'lucide-react'

interface VillaInfosProps {
     surface:number,
    bedrooms:number,
    bathrooms:number,
    hasPool:boolean
    hasKitchen:boolean
}
const VillaInfos:FC<VillaInfosProps>=({surface,bedrooms,bathrooms,hasPool,hasKitchen})=>{
  return (
    <div className='max-w-200 mx-auto p-6 bg-white shadow-lg rounded-md'>
        <h2 className='text-2xl font-semibold mb-4'>Informations</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-2">
                {hasPool && <Waves className='text-blue-500'/>}
                <span className="text-lg font-medium">Piscine</span>
            </div>
            <div className="flex items-center space-x-2">
                {hasKitchen && <CookingPot className='text-green-500'/>}
                <span className="text-lg font-medium">cuisine amenagee</span>
            </div>
            <div className="flex items-center space-x-2">
                <Bath className='text-purple-500'/>
                <span className="text-lg font-medium">{bathrooms} salle(s) de bain</span>
            </div>
            <div className="flex items-center space-x-2">
                <Bed className='text-yellow-500'/>
                <span className="text-lg font-medium">{bedrooms} chambre(s) </span>
            </div>
            <div className="flex items-center space-x-2">
                <Square className='text-gray-500'/>
                <span className="text-lg font-medium">{surface} m</span>
            </div>
         </div>
         <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dignissimos quaerat aspernatur nisi molestias optio nulla nam vel sapiente nesciunt cupiditate, numquam officiis minima dolores saepe fugiat, enim, odio veritatis.</p>
    </div>
  )
}
export default VillaInfos
