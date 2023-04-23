import { useEffect, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";

export default function World() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [right, setRight] = useState("0px");
  const [bottom, setBottom] = useState("0px");

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current!.controls().enableZoom = false;
      globeRef.current!.controls().autoRotate = true;
      const canvas = document.querySelector(
        'canvas[data-engine^="three.js"]'
      ) as HTMLCanvasElement;
      setRight(`-${canvas.getBoundingClientRect().width / 3}px`);
      setBottom(`-${canvas.getBoundingClientRect().height / 3}px`);
    }
  }, []);

  return (
    <div
      className="flex justify-end items-end absolute"
      style={{ right, bottom }}
    >
      <Globe
        backgroundColor="#00000000"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        showAtmosphere
        ref={globeRef}
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </div>
  );
}
