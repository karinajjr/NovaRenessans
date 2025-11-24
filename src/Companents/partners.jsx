import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Partners() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const slides = [
    { src: "/partner/energetika-vazirliki.png", w: 137, h: 40 },
    { src: "/partner/hamkorbank.png", w: 40, h: 40 },
    { src: "/partner/uzpotash.png", w: 179, h: 40 },
    { src: "/partner/ungbuxoronqiz.png", w: 56, h: 40 },
    { src: "/partner/kungradskiy.png", w: 158, h: 40 },
    { src: "/partner/uzkimyasanoat.png", w: 64, h: 40 },
    { src: "/partner/navoiyazot.png", w: 209, h: 40 },
    { src: "/partner/ammofos.png", w: 58, h: 40 },
    { src: "/partner/maxam-chirchik.png", w: 172, h: 40 },
    { src: "/partner/fosforit.png", w: 40, h: 40 },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // ASL CONTENTNI OLAMIZ
    const original = slider.innerHTML;

    // IKKILASHTIRAMIZ
    slider.innerHTML = original + original;

    // ASL SLIDLAR ENUMI ORQALI WIDTH HISOBLAYMIZ
    const itemWidth = Array.from(slider.children)
      .slice(0, slides.length)
      .reduce((acc, el) => acc + el.offsetWidth + 64, 0); // gap = 64px

    const wrap = gsap.utils.wrap(-itemWidth, 0);

    // AUTOPLAY INFINITE ANIM
    animationRef.current = gsap.to(slider, {
      x: -itemWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => wrap(x)),
      },
    });

    // DRAGGABLE
    Draggable.create(slider, {
      type: "x",
      inertia: true,

      onPress() {
        animationRef.current.pause();
      },

      onDrag() {
        const x = this.x;
        gsap.set(slider, { x: wrap(x) });
      },

      onRelease() {
        animationRef.current.play();
      },

      onThrowUpdate() {
        const x = this.x;
        gsap.set(slider, { x: wrap(x) });
      },
    });
  }, []);

  return (
    <section id="partners">
      <div className="relative overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex gap-[64px] cursor-grab active:cursor-grabbing"
        >
          {slides.map((item, i) => (
            <img
              key={i}
              src={item.src}
              width={item.w}
              height={item.h}
              className="object-contain select-none pointer-events-none"
              draggable={false}
              alt="partner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
