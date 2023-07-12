
import {Reviewcard} from "./userReviews.tsx"
import avater from "../assets/images/avata.png"



export const Carousel = () => {
  return (

    <>
    <div className="hidden">
    <a href="#" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
    </div>


    <div className="carousel w-full flex gap-10">
    <div id="slide1" className="carousel-item flex flex-col gap-10 relative w-full lg:w-[50%]">

    <div>
    <Reviewcard className="bg-[#fef3c7] rounded-lg " userName="David Will" body="lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero optio architecto cumque? Voluptatibus obcaecati voluptas officiis? Est dolor illo nihil " imgSrc={avater} />
    </div>
    <div className=" flex justify-center gap-8 transform -translate-y-1/2 left-5 right-5 top-1/2">
    {/*arrow navigations*/}
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div> 
    <div id="slide2" className="carousel-item relative flex flex-col gap-10  w-full lg:w-[50%]">
    
    <div>
    <Reviewcard className="bg-[#fff1f2] rounded-lg " userName="David Will" body="lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero optio architecto cumque? Voluptatibus obcaecati voluptas officiis? Est dolor illo nihil " imgSrc={avater} />
    </div>
    <div className=" flex justify-center gap-8 transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div> 
    <div id="slide3" className="carousel-item relative flex flex-col gap-10  w-full lg:w-[50%]">
    <div>
    <Reviewcard className="bg-[#F0FDFA] rounded-lg " userName="David ban" body="lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero optio architecto cumque? Voluptatibus obcaecati voluptas officiis? Est dolor illo nihil " imgSrc={avater} />
    </div>
    <div className=" flex justify-center gap-8 transform -translate-y-1/2 left-5 right-5 top-1/2">
        {/*arrow navigations*/}
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    </div> 
    <div id="slide4" className="carousel-item relative flex flex-col gap-10  w-full lg:w-[50%]">

    <div className="reviewCardComponent">

    <Reviewcard className="bg-[#fef3c7] rounded-lg " userName="David Will" body="lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero optio architecto cumque? Voluptatibus obcaecati voluptas officiis? Est dolor illo nihil " imgSrc={avater} />
    </div>
    <div className=" flex justify-center gap-8 transform -translate-y-1/2 left-5 right-5 top-1/2">
        {/*arrow navigations*/}
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
    
    </div>
    </div>
    </div>
    </>
    )
}