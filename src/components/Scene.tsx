'use client';
import {useEffect, useRef} from 'react';

export default function Scene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const fallback = () => { cleanup(); host.current?.classList.add('scene-failed'); };
    import('three').then(T => {
      if (disposed || !host.current) return;
      const element = host.current;
      try {
        const renderer = new T.WebGLRenderer({alpha:true, antialias:true, powerPreference:'low-power'});
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
        element.append(renderer.domElement);
        cleanup = () => { renderer.dispose(); renderer.domElement.remove(); };
        const scene = new T.Scene();
        const camera = new T.PerspectiveCamera(43, 1, .1, 100);
        camera.position.set(0, 0, 9.5);
        const count = matchMedia('(max-width:700px)').matches ? 4200 : 10000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new T.Color();
        for (let i = 0; i < count; i++) {
          const a = i / count * Math.PI * 2 * 23, b = i * .61;
          const r = 2.08 + .62 * Math.cos(b);
          positions[i*3] = r * Math.cos(a);
          positions[i*3+1] = r * Math.sin(a);
          positions[i*3+2] = .62 * Math.sin(b);
          color.setRGB(.10 + .12*(.5+.5*Math.sin(b)), .38 + .24*(.5+.5*Math.sin(b)), .85);
          colors.set([color.r, color.g, color.b], i*3);
        }
        const geometry = new T.BufferGeometry();
        geometry.setAttribute('position', new T.BufferAttribute(positions,3));
        geometry.setAttribute('color', new T.BufferAttribute(colors,3));
        const sprite = document.createElement('canvas');
        sprite.width = sprite.height = 32;
        const context = sprite.getContext('2d');
        if (context) {
          const gradient = context.createRadialGradient(16,16,0,16,16,16);
          gradient.addColorStop(0,'rgba(255,255,255,1)');
          gradient.addColorStop(.35,'rgba(255,255,255,.8)');
          gradient.addColorStop(1,'rgba(255,255,255,0)');
          context.fillStyle = gradient; context.fillRect(0,0,32,32);
        }
        const texture = new T.CanvasTexture(sprite);
        const material = new T.PointsMaterial({size:.047, map:texture, vertexColors:true, transparent:true, opacity:.88, blending:T.AdditiveBlending, depthWrite:false});
        const object = new T.Points(geometry, material);
        object.scale.setScalar(.92);
        scene.add(object);
        let frame = 0, visible = true, lost = false, phase = 0, lastTime = 0;
        const reduced = matchMedia('(prefers-reduced-motion:reduce)');
        const paint = (now:number) => {
          frame = 0;
          if (disposed || lost || !visible || document.hidden) return;
          if (!reduced.matches && lastTime) phase += Math.min((now-lastTime)/1000,.05);
          lastTime = now;
          object.rotation.set(.72+Math.sin(phase*.09)*.06, .1+Math.sin(phase*.12)*.38, -.38+phase*.014);
          renderer.render(scene,camera);
          if (!reduced.matches) frame = requestAnimationFrame(paint);
        };
        const resume = () => { cancelAnimationFrame(frame); frame=0; lastTime=0; paint(performance.now()); };
        const resize = () => {
          const w=element.clientWidth, h=element.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w,h); camera.aspect=w/h; camera.updateProjectionMatrix(); resume();
        };
        const ro = new ResizeObserver(resize); ro.observe(element);
        const io = new IntersectionObserver(([entry]) => { visible=entry.isIntersecting; resume(); }); io.observe(element);
        const contextLost = (event:Event) => { event.preventDefault(); lost=true; cancelAnimationFrame(frame); element.classList.add('scene-failed'); };
        renderer.domElement.addEventListener('webglcontextlost',contextLost);
        document.addEventListener('visibilitychange',resume);
        reduced.addEventListener('change',resume);
        cleanup = () => {
          cancelAnimationFrame(frame); ro.disconnect(); io.disconnect();
          document.removeEventListener('visibilitychange',resume); reduced.removeEventListener('change',resume);
          renderer.domElement.removeEventListener('webglcontextlost',contextLost);
          geometry.dispose(); material.dispose(); texture.dispose(); renderer.dispose(); renderer.domElement.remove();
        };
        resize();
      } catch { fallback(); }
    }).catch(fallback);
    return () => { disposed=true; cleanup(); };
  },[]);
  return <div ref={host} className="scene" aria-hidden="true"><div className="orb-fallback"/></div>;
}

