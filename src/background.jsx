import { useEffect, useRef } from "react";

export default function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    if (window.VANTA) {
      effect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        highlightColor: 0x000000,
        midtoneColor: 0xb00909,
        lowlightColor: 0x1a0000,
        baseColor: 0x000000,
        blurFactor: 0.62,
        speed: 1.4,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}