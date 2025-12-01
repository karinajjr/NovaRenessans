import { img } from 'framer-motion/client';
import LogoLoop from './additional/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <img src="https://framerusercontent.com/images/wKjhKn5qbcV59TKaJPl4nD1VE.png"  className="w-[80px] h-[35px]" /> },
  { node: <img src="/partner/itpark.png" className='w-[100px] h-[40px]'/>},
  { node: <img src="https://api-portal.gov.uz/uploads/17/2025/06/20/3a596ff3-a1ab-526d-1f33-da8943ddfd03_authority_17.png"  className="w-[60px] h-[45px]" /> },
];



function Partners() {
  return (
    <div  className='h-[110px] relative overflow-hidden py-[20px] bg-[#F2F2F2]'>
      <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor="#F2F2F2" ariaLabel="Technology partners"/>
    </div>
  );
}

export default Partners;
// style={{ height: '100px', position: 'relative', overflow: 'hidden'}}

































// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(Draggable);

// export default function Partners() {
//   const sliderRef = useRef(null);
//   const animationRef = useRef(null);

//   const slides = [
//     { src: "https://framerusercontent.com/images/wKjhKn5qbcV59TKaJPl4nD1VE.png", w: 80, h: 40 },
//     { src: "/partner/itpark.png", w: 60, h: 40 },

//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const original = slider.innerHTML;


//     slider.innerHTML = original + original;

  
//     const itemWidth = Array.from(slider.children)
//       .slice(0, slides.length)
//       .reduce((acc, el) => acc + el.offsetWidth + 64, 0); 

//     const wrap = gsap.utils.wrap(-itemWidth, 0);


//     animationRef.current = gsap.to(slider, {
//       x: -itemWidth,
//       duration: 60,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => wrap(x)),
//       },
//     });


//     Draggable.create(slider, {
//       type: "x",
//       inertia: true,

//       onPress() {
//         animationRef.current.pause();
//       },

//       onDrag() {
//         const x = this.x;
//         gsap.set(slider, { x: wrap(x) });
//       },

//       onRelease() {
//         animationRef.current.play();
//       },

//       onThrowUpdate() {
//         const x = this.x;
//         gsap.set(slider, { x: wrap(x) });
//       },
//     });
//   }, []);

//   return (
//     <section id="partners">
//       <div className="relative overflow-hidden w-full h-[122px] bg-[#F2F2F2] flex items-center">
//         <div
//           ref={sliderRef}
//           className="flex gap-[64px] cursor-grab active:cursor-grabbing"
//         >
//           {slides.map((item, i) => (
//             <img
//               key={i}
//               src={item.src}
//               width={item.w}
//               height={item.h}
//               className="object-contain select-none pointer-events-none"
//               draggable={false}
//               alt="partner"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
