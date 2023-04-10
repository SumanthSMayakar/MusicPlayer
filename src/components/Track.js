import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import key from "../token/config";

const URL = 'https://api.spotify.com'

function Track(props) {
    const [tracks,setTracks] = useState([])

    // play state
    const [audio,setAudio] = useState(null)
    const [play,setPlay] = useState(false)
    const [preUrl,setPreUrl] = useState(false)

    // params
    const params = useParams()

    const initTrack = useCallback(() => {
        const searchTracks = async () => {
            await fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            .then(out => out.json())
            .then(res => {
                console.log('tracks =', res)
                setTracks(res.tracks)
               
            }).catch(err => console.error(err.message))
        }

        searchTracks()
    },[])

    useEffect(()=> {
        initTrack()
    },[])

    // track icons
    const trackIcon = (url) => {
        if(!url) 
            return <span className="text-danger">No tracks</span>
        if(play && preUrl === url)
            return <span className="text-warning"><i className="bi bi-pause-circle"></i></span>
        return <span className="text-success"> <i className="bi bi-play-circle"></i> </span>
    }

    // play and pause handler
    const playAudio = (url) => {
        const myAudio = new Audio(url) // audio constructor
        if(!play) {
            // initial play
            myAudio.play()
            setPlay(true)
            setAudio(myAudio)
            setPreUrl(url)
        } else {
            //pause
            audio.pause()
            if(preUrl === url) {
                setPlay(false)
            } else {
                // pause to play
                myAudio.play()
                setAudio(myAudio)
                setPreUrl(url)
            }
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Track</h3>
                </div>
            </div>

            <div className="row">
                {
                    tracks && tracks.map((item,index) => {
                        const { name, album, preview_url }= item
                        return (
                            <div className="col-md-3 mt-2 mb-2" key={index} onClick={() => playAudio(preview_url)} >
                                <div className="card">
                                    <img src={album ? album.images[1].url : ""} alt="no image found" className="card-img-top" />

                                    <div className="card-body">
                                        <h6 className="text-success text-center"> {name} </h6>
                                    </div>
                                    <div className="card-footer">
                                    { trackIcon(preview_url) }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Track