import CenterContent from "../CenterContent";
import CommentCard from "./CommentCard";
import comment from "../../Data/Comments.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Comment() {
  return (
    <section id="pickBnnr4">
      <div className="container mx-auto px-5 lg:px-0 py-12 lg:py-24">
        <CenterContent
          centerTitle={`What People Are Saying`}
          centerSubTitle={`We provide support for more than 15K+ Businesses.`}
        />
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={2500}
          spaceBetween={10}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {comment.map((item, id) => (
            <>
              <SwiperSlide>
                <div className="m-2">
                  <CommentCard
                    key={id}
                    avater={item.img}
                    comTitle={item.name}
                    comDes={item["designation "]}
                    comPara={item.comment_text}
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Comment;
