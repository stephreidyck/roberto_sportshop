import React from 'react'



function Cardcopy( props ) {

  return (
    <div
  class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-700">
  <a href="#!">
    <div className='container w-130 overflow-hidden h-100'>

    <img
      class="rounded-t-lg object-cover"
      src={props.cardImage}
      alt=""
      width='500'
      height='600'
      />
      </div>
  </a>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {props.cardTitle}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {props.cardDescription}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Duration: {props.programDuration} weeks
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-bold leading-normal text-white bg-blue-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      See More
    </button>
  </div>
</div>
  )
}

export default Cardcopy