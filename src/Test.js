import React, { useEffect } from "react";
import { useState } from "react";
import { storage } from "../src/firebase";
import {db} from '../src/firebase'
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { collection, addDoc, getDocs,query,where } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { generatePath, useLocation } from 'react-router-dom';
// import { uploadFile } from "./services/api";
function Test(t) {
    const [files, setFiles] = useState();
    const [arkp, setArkp] = useState("");
    const [data, setData] = useState();
    const location = useLocation();
    const currentURL = location.pathname;


    // console.log(currentURL.slice(1));
    // console.log(currentURL.slice(1) + '/' + uuidv4())



    useEffect(()=>{
       refs()
    },[])

    async function refs() {
        await getDocs(collection(db, currentURL.slice(1)))
            .then(res => {
                const movs = res.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setData(movs)
                console.log(data)
            })
    }

    async function submit1(url) {
        try {
            const docRef = await addDoc(collection(db, (currentURL.slice(1)+'/')), { url: url, sub: currentURL.slice(1) });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const submit = async () => {
        // var
        const fname = ref(storage, (currentURL.slice(1)+'/'+uuidv4()));
        await uploadBytes(fname, files).then(async(e) => {
           await  getDownloadURL(e.ref).then((ab) => {
                console.log(ab);
                setArkp(ab);
                submit1(ab)
            })
        });
    };

    return (
        <div class="parent-container">
            <div className="child-div">
                <b><p style={{color:"green"}}>UPLOAD YOUR DOCS HERE</p></b>
                <input type="file" onChange={(e) => setFiles(e.target.files[0])} />
                {console.log(files)}
                <button type="submit" onClick={submit}>
                    Upload
                </button>
            </div>
            <div  class="child-div">
                <b><p style={{ color: "green" }}>DOWNLOAD DOCS</p></b>
            {data? data.map(e =>
             
                <table border={1}>
                   
                <tr>
                        <td>{e.data.sub}</td>
                        <td><a href={e.data.url} download>download</a></td>
                </tr>
            </table>):<h1>😅 Currently Not Avaliable!</h1>}
            </div>
            
        </div>
    );
}

export default Test;
