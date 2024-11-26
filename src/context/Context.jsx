import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const UniContext = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [play, setPlay] = useState([]);
    const [playing, setPlaying] = useState(false);

    const [like, setLike] = useState(() => {
        const savedLikes = localStorage.getItem("likedItems");
        return savedLikes ? JSON.parse(savedLikes) : [];
    });

    useEffect(() => {
        localStorage.setItem("likedItems", JSON.stringify(like));
    }, [like]);

    return (
        <Context.Provider value={{ accessToken, setAccessToken, play, setPlay, playing, setPlaying, like, setLike, }}>{children}</Context.Provider>
    );
};
