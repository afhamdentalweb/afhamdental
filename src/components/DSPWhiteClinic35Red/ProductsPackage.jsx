import React from 'react'

const ProductPackage = () => {
  return (
    <div className='bg-mygreen-500 bg-green-pattern bg-cover'>
        <div className="container mx-auto space-y-12 px-5 py-28">
            <h5 className='font-signika-negative font-bold text-4xl text-myorange-500 uppercase text-center'>Whats will you get in the package?</h5>
            <img src="img/products-in-package.png" alt="DSP WHITE CLINIC 35% H²O² RED " className='mx-auto w-full max-w-3xl' onContextMenu={event => event.preventDefault()} />
        </div>
    </div>
  )
}

export default ProductPackage