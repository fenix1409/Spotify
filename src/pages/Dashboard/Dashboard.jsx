import React, { useContext } from 'react'
import useAuth from '../../hook/useAuth'
import { Context } from '../../context/Context'
import CustomRoutes from '../../routes'
import Navbar from '../../components/Navbar'
import SiteBar from '../../components/SiteBar'
import SpotifyWebPlayer from 'react-spotify-web-playback'

const Dashboard = ({ code }) => {
  const getCode = useAuth(code)
  const { accessToken, setPlaying, play, playing } = useContext(Context)
  return (
    <div className="flex justify-between relative">
      <Navbar />
      <div className="w-[68%] h-[100vh] overflow-y-auto">
        <CustomRoutes />
      </div>
      <SiteBar />
      <div className="absolute w-full bottom-0">
        <SpotifyWebPlayer
          token={accessToken}
          uris={play ? [play] : []}
          callback={(e) => {
            if (e.isPlaying) {
              setPlaying(false)
            }
          }}
        />
      </div>
    </div>
  )
}

export default Dashboard