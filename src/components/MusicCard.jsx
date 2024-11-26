import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hook/useEnv'
import MusicList from './MusicList'

function MusicCard({API}) {
    const { accessToken } = useContext(Context)

    const spotifyApi = new SpotifyWebApi({
        clientId: CLIENT_ID
    })

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])


    const [album, setAlbum] = useState([])
    useEffect(() => {
        if (accessToken) {
            spotifyApi.searchAlbums(API).then(res => {
                setAlbum(res.body.albums.items.map(item => {
                    const data = {
                        id: item.id,
                        albumsName: item.name,
                        albumArtistName: item.artists[0].name,
                        albumImg: item.images[0].url,
                        uri: item.uri
                    }
                    return data
                }))
            })
        }
    }, [accessToken])
    return (
        <div className='pt-[30px] px-10 pb-[50px]'>
            <div className="flex items-center justify-between">
                <h2 className='text-[30px] leading-[37px] font-bold text-white'>Your top mixes</h2>
                <button className='text-[16px] leading-[20px] font-bold text-[#ADADAD]'>SEE ALL</button>
            </div>
            <div className='flex justify-between overflow-x-auto gap-[25px]'>
                {album.map(item => <MusicList item={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default MusicCard