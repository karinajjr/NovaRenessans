import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Partners() {
  const trackRef = useRef(null);
  const tl = useRef(null);

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
    const track = trackRef.current;
    if (!track) return;

    // SLIDES NI 3 MARTA KO'PAYTIRAMIZ – INFINITE DRAG UCHUN ENG YAXSHI YO'L
    track.innerHTML = track.innerHTML + track.innerHTML + track.innerHTML;

    const items = Array.from(track.children);

    // SLIDER UZUNLIGI
    let totalWidth = items.reduce((acc, el) => acc + el.offsetWidth + 64, 0);

    // Infinite timeline → bu hech qachon o‘chmaydi
    tl.current = gsap.timeline({ repeat: -1, paused: false })
      .to(track, {
        x: -totalWidth / 3,
        duration: 30,
        ease: "none",
      });

    // *** INFINITE DRAG ***
    Draggable.create(track, {
      type: "x",
      trigger: track,
      inertia: true,
      onPress() {
        tl.current.pause();
        this.startX = gsap.getProperty(track, "x");
      },
      onDrag() {
        gsap.set(track, { x: this.startX + this.x });

        // ichkarida qolish uchun: (infinite wrap)
        if (this.x < -totalWidth / 3) {
          this.x += totalWidth / 3;
          this.startX += totalWidth / 3;
        }
        if (this.x > totalWidth / 3) {
          this.x -= totalWidth / 3;
          this.startX -= totalWidth / 3;
        }
      },
      onRelease() {
        tl.current.play();
      },
      onThrowUpdate() {
        gsap.set(track, { x: this.startX + this.x });

        if (this.x < -totalWidth / 3) {
          this.x += totalWidth / 3;
          this.startX += totalWidth / 3;
        }
        if (this.x > totalWidth / 3) {
          this.x -= totalWidth / 3;
          this.startX -= totalWidth / 3;
        }
      }
    });

  }, []);

  return (
    <section id="partners">
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
