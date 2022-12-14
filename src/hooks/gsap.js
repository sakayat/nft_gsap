import gsap, { Expo } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useNavListAnimated = (listArr) => {
  useEffect(() => {
    const el = listArr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: 0.5,
      }
    );
  }, []);
};

export const useHeroLeftAnimated = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useDropPhotoAnimated = (photoArr,trig) => {
  useEffect(() => {
    const el = photoArr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        x: "-100%",
        scale: 0,
      },
      {
        x: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: Expo.easeInOut,
        
      }
    );
  }, []);
};

export const useFeaturedRightShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useContentCardAnimated = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: "-100%",
        opacity: 0
      },
      {
        x: 0,
        opacity:1,
        duration: 1.5,
        scrollTrigger:{
          trigger: el,
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, []);
};


export const useCollectionImgAnimated = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
}

export const useStoreImgAnimated = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        
      }
    );
  }, []);
}