import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";

export default function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = FOG({
      el: vantaRef.current, 
      THREE,
      mouseControls: true,
      touchControls: true,
      highlightColor: 0x000000,
      midtoneColor: 0xb00909,
      lowlightColor: 0x1a0000,
      baseColor: 0x000000,
      blurFactor: 0.62,
      speed: 1.4,
    });

    return () => effect?.destroy(); //pr éviter que si le composant ne doit plus s'afficher on l'enlève pour libérer de la mémoire
  }, []); //crochet de fin permette de le lancer une seul fois 

  return <div ref={vantaRef} style={{ position: "fixed", inset: 0, zIndex: -1 }} />;
}