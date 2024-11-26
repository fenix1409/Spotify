import React, { useContext, useEffect, useState } from 'react'
import { NavigateBtn } from '../../components/NavigateBtn'
import { Context } from '../../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hook/useEnv'
import MusicCard from '../../components/MusicCard'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {accessToken, setPlay, setPlaying} = useContext(Context)
  const navigate = useNavigate()
  const spotifyApi = new SpotifyWebApi({
    clientId:CLIENT_ID
  })
  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  const [homeTop, setHomeTop] = useState([])
  useEffect(() => {
    if(accessToken) {
      spotifyApi.searchAlbums("Jahongir Otajonov").then(res => {
        setHomeTop(res.body.albums.items.splice(0,6).map(item => {
          const data = {
            id:item.id,
            trackName:item.name,
            trackImg:item.images[0].url,
            artistName:item.artists[0].name,
            uri:item.uri
          }
          return data
        }));
        
      })
    }
  }, [accessToken])
  
  function handlePlayMusic(item){
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }

  return (
    <div className='h-auto'>
      <NavigateBtn/>
      <div className="pt-[30px] px-10 pb-[50px]">
        <h2 className='text-[39px] leading-[49px] font-bold mb-[29px] text-white'>Good afternoon</h2>
        <ul className="flex items-center justify-between flex-wrap gap-[16px]">
          {homeTop.map(item => (
            <li onClick={() => handlePlayMusic(item)} key={item.id} className='bg-item rounded-[6px] overflow-hidden w-[49%] flex items-center space-x-[21px]'>
              <img src={item.trackImg} alt="img" width={82} height={82}/>
              <span className='text-5 text-[25px] font-bold text-white'>{item.trackName}</span>
            </li>
          ))}
        </ul>
      </div>
      <MusicCard API={"Jahongir Otajonov"}/>
    </div>
  )
}

export default Home