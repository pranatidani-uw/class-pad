import React, { useState } from 'react'
import axios from 'axios'



export default function Assembly() {
    let textInput = React.createRef();

    let firstCall = true

    let idNumber = 0;

    let transcript = "";

    let [inputLink, setInputLink] = useState("")

    let inputChanged = (event) => {
        console.log(event.target.value)
        setInputLink(event.target.value)
    }
   
    let handleClick = () => {

        let status = ""
        
            const assembly = axios.create({
                baseURL: "https://api.assemblyai.com/v2",
                headers: {
                    authorization: "59db649297964e0584c336588efe6c14",
                    "content-type": "application/json",
                },
            })
            if (firstCall === true) {
                assembly
                    .post("/transcript", {
                        audio_url: inputLink
                    })
                    .then((res) => {
                        //console.log(res.data)
                        idNumber = res.data['id']
                    })
                    .catch((err) => console.error(err));
                firstCall = false
            }
            assembly
                .get(`/transcript/${idNumber}`)
                .then((res) => {
                    //console.log(res.data)
                    transcript = res.data['words']
                    status = res.data['status']

                })
                .catch((err) => console.error(err));
        let sentence = "";
        for (var i = 0; i < transcript.length; i++) {
            let word = transcript[i]['text']
            sentence = sentence + word + " "
        }
        document.getElementById("words").innerHTML = sentence;


        
    }
    return (
         <>
            
            Enter Your Lecture/Video Link
            <br />
            <input onChange={inputChanged} ref={textInput} type="text" />
            <button onClick={handleClick}> "Click to Convert!" </button>
            <div id="words" className="section2"> </div>
        </>


    )

    
    
}