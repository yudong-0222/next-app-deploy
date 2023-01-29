import React from 'react'
import Instagramimg from './Instagramimg'
import Img01 from 'public/images/ww.png'
import Img02 from 'public/images/nt.jpg'
import Img03 from 'public/images/nt2.png'
import Img04 from 'public/images/wh.jpg'
import Img05 from 'public/images/ws1.jpg'
import Img06 from 'public/images/ws2.jpg'


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Join our Discord and contact with staff & players!</p>
      <button href='/' className='px-8 py-2 border mt-3 mb-6 btn2'>Join</button>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
        <Instagramimg socialImg={Img01}/>
        <Instagramimg socialImg={Img02}/>
        <Instagramimg socialImg={Img03}/>
        <Instagramimg socialImg={Img04}/>
        <Instagramimg socialImg={Img05}/>
        <Instagramimg socialImg={Img06}/>
      </div>
    </div>
  )
}

export default Instagram