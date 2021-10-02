import{Avatar} from "@material-ui/core"
import React, {useState} from 'react'
import  VideocamIcon from "@material-ui/icons/Videocam";
import { PhotoLibrary } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import "./MessageSender.css"
import {useStateValue} from "./StateProvider"
import firebase from "./firebase"
import db from "./firebase"

function MessageSender() {
    const[{user}]=useStateValue();
    const[input,setInput]= useState("");
    const[imageUrl,setImageUrl]= useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timepstamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image:imageUrl,
        })
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    value={input}
                    onChange={(e) =>setInput(e.target.value)}
                    className="messageSender__input"
                     placeholder={"whats on yur mind,$(user.displayName)?"}
                     />

                    <input 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value)}
                    className="messageSender__input"
                    placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style ={{color: "orange"}}/>
                    <h3>Photo/Activity</h3>
                </div>            
                    
               
                <div className="messageSender__option">
                    <InsertEmoticon style ={{color: "red"}}/>
                    <h3>Feeling/Activity</h3>
                    </div>            
                    
                
            </div>
        </div>
    )
}

export default MessageSender
