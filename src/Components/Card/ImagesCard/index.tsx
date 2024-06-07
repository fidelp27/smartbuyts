import { useEffect, useState } from "react"
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from "react-icons/lia";
import { ImagesCardsProps } from "../../../Interfaces"

export const ImagesCard:React.FC<ImagesCardsProps>=({images})=>{  
    const [currentImages, setCurrentImages] = useState<number>(0)
    const handleChangeNextImage = (index: number)=>{
        setCurrentImages(index + 1)
    }
    const handleBeforeImage = (index: number)=>{
        setCurrentImages(index - 1)
    }
   
    // Reset current image when images change
    useEffect(()=>{
        setCurrentImages(0)
    },[images])

    return(
        <div>
            <figure className="relative mb-2 w-full h-3/4 overflow-hidden rounded-t-lg">
                <img src={images[currentImages]} className="w-full h-full object-cover" alt="title" />
                <button
                    className="absolute top-1/2 left-3 flex justify-center items-center  text-black w-6 h-6 rounded-full shadow-md "
                    aria-label={`Before image`}
                    onClick={()=>handleBeforeImage(currentImages)}
                    disabled={currentImages === 0}
                >
                    <span className="text-2xl font-bold bg-white rounded-full hover:bg-white/50 transition-all duration-800"> 
                        {currentImages > 0 && <LiaArrowAltCircleLeft />}
                    </span>
                </button>
                <button
                    className="absolute top-1/2 right-3 flex justify-center items-center  text-black w-6 h-6 rounded-full shadow-md "
                    aria-label={`Next image`}
                    onClick={()=>handleChangeNextImage(currentImages)}
                    disabled={currentImages === images.length - 1 && images.length > 1}
                >
                    <span className="text-2xl font-bold bg-white rounded-full hover:bg-white/50 transition-all duration-800"> 
                        {images.length > 1 && currentImages < (images.length - 1) && <LiaArrowAltCircleRight /> }
                    </span>
                </button>
            </figure>
        </div>
    )
}