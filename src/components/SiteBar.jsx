import React from 'react'
import { AddIcon, CloseIcon } from '../assets/images/Icons'
import Acc from '../assets/images/acc.svg'

function SiteBar() {
  return (
    <div className='w-[17%] h-[100vh] bg-black py-[29px] px-5 space-y-[23px]'>
      <div className="flex items-center justify-between">
        <span className='text-[20px] leading-[25px] font-bold text-[#CCCCCC]'>Friend Activity</span>
        <div className="flex items-center">
          <button><AddIcon /></button>
          <button><CloseIcon /></button>
        </div>
      </div>
      <p className='text-[18px] leading-[24px] text-[#CCCCCC]'>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className='space-y-5'>
        <img src={Acc} alt="img" width={179} height={62} />
        <img src={Acc} alt="img" width={179} height={62} />
        <img src={Acc} alt="img" width={179} height={62} />
      </div>
      <p className='text-[18px] leading-[24px] text-[#CCCCCC]'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button className='w-[233px] py-5 block bg-white text-[18px] leading-[22px] font-bold rounded-[40px]'>SETTINGS</button>
    </div>
  )
}

export default SiteBar