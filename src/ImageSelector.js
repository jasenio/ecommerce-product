import images from './image';
import {useState, useEffect} from "react";
import {Full} from "./Full";
import {useMediaQuery} from "react-responsive";
export const ImageSelector = () => {
    const slides = [
        images.image1,
        images.image2,
        images.image3,
        images.image4,
    ];
    const[openFull, ttoggleFull] = useState(false);
    const toggleFull = () => {
        ttoggleFull(!openFull);
    }
    const [slideNum1, changeSlideNum1] = useState(0);
    const [slide1, changeSlide1] = useState(slides[slideNum1]);
    useEffect(() => {
        changeSlide1(slides[slideNum1]);
    }, [slideNum1])

    const mobileQuery =  useMediaQuery({
        query: '(max-width: 1100px)'
      })
    useEffect(() => {
        ttoggleFull(false);
        console.log('work');
    }, [mobileQuery])

    return <>
            {openFull && <Full toggle = {toggleFull}/>}
            <div className = "ImageSlider">
                <div className = "Image">    
                    <img src = {slide1}>
                    </img>
                    <button className = "doubleClick" onDoubleClick = {toggleFull}></button>
                </div>
                <button className="thumb1" onClick = {() =>{changeSlideNum1(0)}}>
                    <img src = {images.thumbnail1}></img>
                    {slideNum1 === 0 && <div className = "selected1"></div>}
                </button>
                <button className="thumb2" onClick = { () =>{changeSlideNum1(1)}}>
                    <img src = {images.thumbnail2}></img>
                    {slideNum1 === 1 && <div className = "selected2"></div>}
                </button>
                <button className="thumb3" onClick = {() =>{changeSlideNum1(2)}}>
                    <img src = {images.thumbnail3}></img>
                    {slideNum1 === 2 && <div className = "selected3"></div>}
                </button>
                <button className="thumb4" onClick = {() =>{changeSlideNum1(3)}}>
                    <img src = {images.thumbnail4}></img>
                    {slideNum1 === 3 && <div className = "selected4"></div>}
                </button>
            </div>
            </>
}