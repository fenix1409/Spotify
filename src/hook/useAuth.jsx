import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { API_REQUST } from './useEnv'
import { Context } from '../context/Context'

function useAuth(code) {
    const { setAccessToken } = useContext(Context)
    useEffect(() => {
        axios.post(`${API_REQUST}/login`, { code }).then(res => {
            setAccessToken(res.data.accessToken);
            history.pushState({}, null, "/")
        })
            .catch(err => {
                location = "/"
            })
    }, [])
}

export default useAuth