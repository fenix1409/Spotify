import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { LikeGreen, Lupa, More, PlayIcon, Select, SingleLike, Upload } from "../../assets/images/Icons";
import LIKEBG from '../../assets/images/likebg.png'
import { NavigateBtn } from "../../components/NavigateBtn";

function LikedMusic() {
  const { like, setLike } = useContext(Context);

  function handleLikeRow(item) {
    const isLiked = like.some((likedItem) => likedItem.id === item.id);
    if (isLiked) {
      setLike(like.filter((likedItem) => likedItem.id !== item.id));
    } else {
      setLike([...like, item]);
    }
  }



  return (
    <div className="liked-music px-[41px]">
      <NavigateBtn />
      <div className="flex space-x-[32px] px-10 py-[26px] mb-[21px]">
        <img className="w-[297px] h-[297px]" src={LIKEBG} alt="bg" width={297} height={297} />
        <div>
          <p className="text-[18px] uppercase text-white font-bold">PUBLIC PLAYLIST</p>
          <h1 className="font-bold text-[95px] mb-[12px] text-white">Liked Songs</h1>
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
      (
      <table className="w-full mt-[30px] mb-[50px]">
        <thead>
          <tr>
            <th className="py-[14px] border-b-[1px] border-[#666666] text-[#666666] text-[15px]">#</th>
            <th className="py-[14px] text-start pl-5 border-b-[1px] border-[#666666] text-[#666666] text-[15px]">TITLE</th>
            <th className="py-[14px] border-b-[1px] border-[#666666] text-start text-[#666666] text-[15px]">ALBUM</th>
            <th className="py-[14px] border-b-[1px] border-[#666666] text-[#666666] text-[15px] text-start">DATE ADDED</th>
            <th className="py-[14px] text-end border-b-[1px] border-[#666666] text-[#666666] text-[15px]">TIME</th>
          </tr>
        </thead>
        <tbody>
          {like.map((item, index) => (
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
      )
    </div>
  );
}

export default LikedMusic;
