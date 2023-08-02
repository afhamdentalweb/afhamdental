import React from 'react'

const Introduction = () => {
  return (
    <div className='bg-mygreen-500 bg-green-pattern bg-cover'>
        <div className="container mx-auto px-5 flex flex-col md:flex-row md:space-x-12 md:items-center lg:justify-between">
            <div className="py-12 md:w-1/2 lg:w-5/12">
                <div className='relative '>
                    <div className='bg-white p-7 rounded-md'>
                        <h5 className='font-signika-negative font-bold text-2xl mb-2 text-[#0e0e0e]'>Hallo dokter, untuk yang punya kasus bleaching!!</h5>
                        <p className=" text-[#0e0e0e]">Kini saatnya dokter berinvestasi bahan bleaching  DSP yang sudah digunakan di hampir seluruh dunia</p>
                    </div>
                    <span className='absolute -bottom-3 -left-11 w-0 h-0 border-l-[32px] border-l-transparent border-t-[80px] border-t-white border-r-[16px] border-r-transparent rotate-[60deg] z-[2]'></span>
                </div>
            </div>
            <div className='space-y-2 pt-8 pb-20 md:w-1/2 md:py-56 lg:w-6/12'>
                <p className="text-white text-2xl font-semibold">Memperkenalkan</p>
                <h5 className="font-signika-negative font-bold text-4xl text-myorange-500 md:text-3xl">DSP WHITE CLINIC 35% H²O² RED </h5>
                <p className="text-white font-light">Bahan bleaching yang diindikasikan untuk gigi vital dan non-vital dengan perubahan warna gigi secara signifikan, natural dan dapat bertahan dalam jangka waktu yang panjang.</p>
            </div>
        </div>
    </div>
  )
}

export default Introduction