import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../../hook/useEnv";
import { NavigateBtn } from "../../components/NavigateBtn";
import { LikeGreen, SingleLike, PlayIcon, More, Upload, Lupa, Select, } from "../../assets/images/Icons";

function Single() {
  const { id } = useParams();
  const { accessToken, setPlay, setPlaying, like, setLike } = useContext(Context);
  const [singleMusic, setSingleMusic] = useState(false);

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, singleMusic]);

  useEffect(() => {
    if (accessToken && id) {
      spotifyApi.getAlbum(id).then((res) => {
        setSingleMusic(res.body);
      });
    }
  }, [accessToken, id]);

  const [artistMusic, setArtistMusic] = useState([]);
  useEffect(() => {
    if (accessToken && singleMusic.name) {
      spotifyApi.searchTracks(singleMusic?.artists[0]?.name).then((res) => {
        setArtistMusic(
          res.body.tracks.items.map((item) => ({
            id: item.id,
            img: item.album.images[0]?.url,
            name: item.name,
            artistName: item.artists[0]?.name,
            date: item.album.release_date,
            uri: item.uri,
          }))
        );
      });
    }
  }, [accessToken, singleMusic]);

  function handlePlayMusic(uri) {
    setPlay(uri);
    setPlaying(true);
  }

  function handleLikeRow(item) {
    const isLiked = like.some((likedItem) => likedItem.id === item.id);
    if (isLiked) {
      setLike(like.filter((likedItem) => likedItem.id !== item.id));
    } else {
      setLike([...like, item]);
    }
  }


  return (
    <div className="single-music h-auto">
      <NavigateBtn />
      <div className="flex space-x-[32px] px-10 py-[26px] mb-[21px]">
        {singleMusic?.images && (<img className="w-[287px] h-[287px]" src={singleMusic?.images[0]?.url} alt="img" width={287} height={287} />)}
        <div>
          <p className="text-[18px] uppercase text-white font-bold">
            {singleMusic.label}
          </p>
          <h2 className="font-bold text-[100px] mb-[12px] text-white">
            {singleMusic.name}
          </h2>
          {singleMusic?.artists && (
            <p className="text-[20px] font-bold text-white mb-5">
              {singleMusic?.artists[0]?.name}
            </p>
          )}
          <p className="text-white font-semibold text-[18px]">{singleMusic.release_date}</p>
        </div>
      </div>
      <div className="flex px-[41px] items-center justify-between">
        <div className="flex text-white items-center space-x-[25px]">
          <button><PlayIcon /></button>
          <button><Upload /></button>
          <button><More /></button>
        </div>
        <div className="flex text-white items-center space-x-[45px]">
          <button><Lupa /></button>
          <div className="flex items-center space-x-[14px]">
            <strong className="text-white font-normal text-[18px]">Custom Order</strong>
            <button><Select /></button>
          </div>
        </div>
      </div>
      <div className="px-[41px]">
        <table className="w-full mt-[30px]">
          <thead>
            <tr>
              <th className="py-[14px] border-b-[1px] border-[#666666] text-[#666666] text-[15px]">#</th>
              <th className="py-[14px] text-start pl-5 border-b-[1px] border-[#666666] text-[#666666] text-[15px]">TITLE</th>
              <th className="py-[14px] border-b-[1px] border-[#666666] text-start text-[#666666] text-[15px]">ALBUM</th>
              <th className="py-[14px] border-b-[1px] border-[#666666] text-[#666666] text-[15px]">DATE ADDED</th>
              <th className="py-[14px] text-end border-b-[1px] border-[#666666] text-[#666666] text-[15px]">TIME</th>
            </tr>
          </thead>
          <tbody>
            {artistMusic.map((item, index) => (
              <tr key={item.id || index} className={`cursor-pointer even:bg-[#0000006c]`}>
                <td className="text-[18px] rounded-l-md pl-3 cursor-pointer py-[10px] text-white">
                  {index + 1}
                </td>
                <td className="py-[10px] cursor-pointer pl-5">
                  <div className="flex items-center space-x-[21px]">
                    <img className="w-[52px] h-[52px]" src={item.img} alt="img" width={52} height={52} />
                    <div>
                      <h2 className="font-semibold line-clamp-1 text-white text-[20px] mb-[2px]">
                        {item.name}
                      </h2>
                      <p className="font-bold text-[#B3B3B3] text-[18px]">
                        {item.artistName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[15px] cursor-pointer py-[10px] text-white">
                  {item.name}
                </td>
                <td className="text-[15px] cursor-pointer py-[10px] text-white">
                  {item.date}
                </td>
                <td className="text-[20px] pr-3 rounded-r-md cursor-pointer py-[10px] text-white">
                  <div className="flex justify-end items-center space-x-[20px]">
                    <button onClick={() => handleLikeRow(item)}>
                      {like.some((likedItem) => likedItem.id === item.id) ? <LikeGreen /> : <SingleLike />}
                    </button>
                    <span>3:13</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Single;
``
