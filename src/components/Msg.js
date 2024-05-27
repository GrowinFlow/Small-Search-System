import React from 'react'

function Msg(props) {
  return (
    <>
    <div className=" h-[75vh] overflow-auto overflow-x-auto relative top-8 scroll-bar flex items-center justify-center">

    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.msg}</span> </h1>
    </div>
    </>
  )
}

export default Msg