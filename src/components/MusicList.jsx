import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function MusicList({item}) {
  const navigate = useNavigate()
  const {setPlay, setPlaying} = useContext(Context)
  function handlePlayMusic(){
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }
  return (
    <div onClick={handlePlayMusic} className='min-w-[224px] h-[324px] p-5 rounded-md music-card mt-[26px] overflow-y-hidden'>
        <img className='mb-[25px] h-[182px]' src={item.albumImg} alt="img" width={"100%"} height={182}/>
        <h3 className='text-5 leading-[25px] font-bold text-white mb-2'>{item.albumsName}</h3>
        <p className='text-[18px] leading-[22px] text-[#B3B3B3]'>{item.albumArtistName}</p>
    </div>
  )
}

export default MusicList