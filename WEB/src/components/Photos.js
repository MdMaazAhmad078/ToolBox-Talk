import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Photo.css';
import { AiOutlineClose } from "react-icons/ai";
import img1 from '../assest/img1.jpg';
import img2 from '../assest/img2.jpg';
import img3 from '../assest/img3.jpg';
import img4 from '../assest/img4.jpg';
import img5 from '../assest/img5.jpg';


const Photos = () => {

   
    
        let data =[
            {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img1,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState(' ');
    const getImg =(imgSrc) => {
            setTempImgSrc(imgSrc);
            setModel(true);
    }
    return (
       <>
       <div className={model? "model open" : "model"}>
           <img src={tempimgSrc}/>
           <AiOutlineClose onClick={() => setModel(false)}/>
       </div>
       <h1 style={{marginLeft:'6rem', fontFamily: 'Cairo, sans-serif'}}>Gallery</h1>
           <div className='gallery'>
               {data.map((item,index) =>{
                   return(
                       <div className='pics' key ={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc}/>
                       </div>
                   )
               })}
           </div>
       </>
    );
}
export default Photos;