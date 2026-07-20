'use client'
import { useState } from 'react';
import React from 'react'
import { CalendarFold } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar'
import { set } from 'date-fns';

 const PRICE_PER_NIGHT=130;
export default function Reservations( {id}:{id:string}) {
    const [startDate,setStartDate]=useState<Date|undefined>()
    const [endDate,setEndDate]=useState<Date|undefined>()
    const [isSubitted,setIsSubitted]=useState<boolean>(false)
     const handleStartDateSelect=(date:Date|undefined)=>{
        setStartDate(date)
        if(endDate && date && date > endDate){
            setEndDate(undefined)
        }
     }
     const handleEndDateSelect=(date:Date|undefined)=>{
       
        if(startDate && date && date >=startDate){
             setEndDate(date)
        }
     }
     const calculateNights=()=>{
        if(startDate && endDate){
            const timeDiff=endDate.getTime()-startDate.getTime();
            return Math.ceil(timeDiff/(1000*3600*24))
        }
        return 0;
     }
     const totalNights=calculateNights();
     const totalPrice=totalNights* PRICE_PER_NIGHT*650;

     const handleReservations=()=>{
        setIsSubitted(true)
     }
          console.log(startDate);
            console.log(endDate)
  return (
    
    <div className='max-w-300 mx-auto p-6 bg-white rounded-xl space-y-8'id={id} >
       <h2 className='text-3xl font-bold text-gray-800'>Reserver votre sejour</h2>
         <div className="space-y-4">
            <CalendarFold className='text-gray-500 h-5 w-5'/>
            <p className='font-medium text-lg text-gray-700'>Selectionner vos date:</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap8 max-w-xl mx-auto">
            <div>
                <p className='text-sm font-medium text-gray-600'> Date de debut</p>
               <Calendar 
               mode="single"
               selected={startDate}
               onSelect={handleStartDateSelect}
               className='rounded-md border shadow-sm mt-2'
               />
            </div>
            {startDate && (
                <div>
                <p className='text-sm font-medium text-gray-600'> Date de fin</p>
               <Calendar 
               mode="single"
               selected={endDate}
               onSelect={handleEndDateSelect}
               className='rounded-md border shadow-sm mt-2'
               />
            </div>

            )}
         </div>
         {totalNights > 0 &&(
            <div className="p-4 bg-gray-200 border-l-6 border-blue-400  text-blue-700 rounded-lg">
                <p className="text-lg font-semibold">{`nombre de nuits: ${totalNights}`}</p>
                <p className="text-lg">{`prix total :${totalPrice} fcfa`}</p>
            </div>
         )}
         <Button 
         onClick={handleReservations}
         disabled={!startDate||!endDate|| isSubitted}
         className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg">
            {isSubitted ? (
                 <div className='flex items-center justify-center space-x-2'>
                    <CalendarFold className='w-5 h-5 text-green-400'/>
                    <span>Reservation confirme</span>
                 </div>
            ):(
                "reserver"
            )}
         </Button>
         {isSubitted &&(
            <p className='mt-4 text-center text-green-600 font-medium'>votre reservation est prete</p>
         )

         }
    </div>
  )
}
 