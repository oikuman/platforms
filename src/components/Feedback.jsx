import React from "react";
import Carousel from "react-simply-carousel";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <>
      <div>
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-around",
              userSelect: "none",
            },
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              background: "blue",
            },
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",
            style: {
              display: 'none',
            },
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              display: 'none',
            },
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 12,
                width: 12,
                border: '2px solid #116DD8',
                borderRadius: "50%",
                background: "#fff",
                padding: 0,
                margin: 10
              },
            },
            activeItemBtnProps: {
              style: {
                height: 12,
                width: 12,
                borderRadius: "50%",
                border: 0,
                background: "#116DD8",
                margin: 10
              },
            },
          }}
          itemsToShow={1}
        //   itemsToScroll={2}
          speed={400}
        //   centerMode
        >
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              style={{
                background: "yellow",
                width: 300,
                height: 300,
                // border: "30px solid white",
                // border: "0px !important",
                textAlign: "center",
                lineHeight: "240px",
                boxSizing: "border-box",
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Feedback;
