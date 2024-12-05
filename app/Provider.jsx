import React from 'react'
import Header from './_components/ui/Header'

function Provider({children}) {
  return (
    <>
     <Header/>
     <div className='mt-28'>
    <div>{children}</div>
    </div>


    </>
  )
}

export default Provider