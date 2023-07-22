import React from 'react'
import Navbar from '../../components/Navbar2'
import NewCard from '../../components/NewCard'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'



export async function getStaticProps() {

  const contentful = require('contentful')

  const client = createClient({
    space: process.env.DB_SPACE_ID,
    accessToken: process.env.DB_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: 'nutritionPlan' })

  return {
    props : {
      plans: res.items
    }
  }
}




function NutritionPlans({ plans }) {

    console.log({plans})

    const router = useRouter()
const currentPath = router.route
console.log('het huidige gekke padje is: ' + currentPath)

  return (
    <>
   <Navbar />


    <main className='absolute mx-3'>

   <div className='text-3xl relative w-full'>

   </div>
   <div className='relative w-full grid grid-cols-3 gap-4 content-center align-top py-7'>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
    <div className='mx-4 '>
        Lorem Ipsum Hebban Alla Vologe
    </div>
   </div>

   <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-stretch justify-items-center mx-4 md:mx-10 relative w-full'>
    {plans.map((plan)=>
    {
        return <div key={plan.id}>
          <NewCard

            cardTitle={plan.fields.programTitle}
            cardDescription={plan.fields.programTitle}
            cardSubheader={'Duration: ' + plan.fields.programTitle + ' weeks'}
            cardUrl={currentPath + '/' + plan.fields.slug} />
          <p>{console.log(plan.id)}</p>
        </div>
      }
    )}
    </div>
    </main>
    </>
  )
}

export default NutritionPlans