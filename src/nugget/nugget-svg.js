import React, { useEffect, useRef } from 'react';
import {TimelineLite} from "gsap";
import './nugget.css';


function NuggetSVG(){

  const movie = useRef();

  useEffect(() => {
    movie.current = animateThis()
    movie.current.play()
  },[])

  const animateThis = () => {
    const tl = new TimelineLite({paused: true});
  
    tl.to('.slide', {x: "500"}, 10);
    tl.from("#nug1",{"y":"-400"}, 1)
    tl.from("#nug2", {"y":"-400"}, 1.2)
    tl.from("#nug3", {"y":"-400"}, .7)
    tl.from("#nug4", {"y":"-400"}, 1.7)
    tl.from("#nug5", {"y":"-400"}, 1.4)
    tl.from("#nugbox", {"x":"-400", "opacity":"0"}, .4)

    // code //
    tl.from("#code1", {"opacity":"0", "x": 300}, 2)
    tl.from("#code2",{"opacity":"0", "x": -300}, 2.2)
    tl.from("#code3", {"opacity":"0", "x": 300}, 2)
    tl.from("#code4", {"opacity":"0","x": -300}, 1.7)

    tl.from("#nugget1", {"opacity":"0", "y":100}, 1.4)
    tl.from("#nugget2", {"opacity":"0","y":100}, 2.2)
    tl.from("#nugget3", {"opacity":"0","y":100}, 2)
    tl.from("#nugget4", {"opacity":"0","y":100}, 2.5)
    tl.from("#nugget7", {"opacity":"0","y":100}, 2.2)
    tl.from("#nugget6", {"opacity":"0","y":100}, 2.1)
    tl.from("#nugget5", {"opacity":"0","y":100}, 1.7)

    
    return tl;
  }

  const handleNuggetPunch = () => {
    console.log("OOOOOOF")
  }
  return (
    
    <div className="nugget-container">
        <svg viewBox="0 0 382.56 415.28">
  <defs>
    <linearGradient id="linear-gradient" x1="207.73" y1="319.2" x2="219.52" y2="416.49" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="red"/>
      <stop offset="0.1" stop-color="#f90000"/>
      <stop offset="0.22" stop-color="#e90000"/>
      <stop offset="0.36" stop-color="#ce0000"/>
      <stop offset="0.51" stop-color="#a90000"/>
      <stop offset="0.67" stop-color="#790000"/>
      <stop offset="0.84" stop-color="#400000"/>
      <stop offset="1"/>
    </linearGradient>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="container">
      <g>
        <g stroke="black" id="nuggets2">
          <path id="nugget1" d="M12.22,393.26h8l19.6,42.59.19-.2-.58-13.09v-29.3H46V443.8h-8l-19.6-42.58-.19.19.58,13.19v29.2h-6.5Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget2" d="M78,393.26V427.7c0,7.37,2.13,10.86,8.82,10.86,8.15,0,9.9-3.59,9.9-10.86V393.26h6.5V430.8c0,6.69-4.76,13.87-15.91,13.87-11,0-15.81-6.88-15.81-14.26V393.26Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget3" d="M162.57,439.14a27,27,0,0,1-15.52,5.53c-14.84,0-19.11-13.77-19.11-26.19,0-12.22,4.46-26.09,18.92-26.09,6.79,0,12.7,4,16.2,9.7l-5.53,3.59c-2.43-4.07-6.11-7.18-11.06-7.18-10,0-11.74,12.51-11.74,20.18,0,7.85,1.75,19.88,11.93,19.88a17.84,17.84,0,0,0,9.41-2.62V422.65H144v-5.82h18.62Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget4" d="M220.77,439.14a27,27,0,0,1-15.52,5.53c-14.84,0-19.11-13.77-19.11-26.19,0-12.22,4.46-26.09,18.92-26.09,6.79,0,12.7,4,16.19,9.7l-5.52,3.59c-2.43-4.07-6.12-7.18-11.06-7.18-10,0-11.74,12.51-11.74,20.18,0,7.85,1.75,19.88,11.93,19.88a17.84,17.84,0,0,0,9.41-2.62V422.65H202.15v-5.82h18.62Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget5" d="M248,393.26h31.52v5.82h-25v15.14h20.67V420H254.52V438h25v5.82H248Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget6" d="M317,399.08H303v-5.82h34.15v5.82H323.49V443.8H317Z" transform="translate(-12.22 -29.39)"/>
          <path id="nugget7" d="M367.72,427.8c1.26,6.2,4.27,10.76,11.06,10.76,5.33,0,9.51-2.91,9.51-8.53,0-6.21-5.24-7.76-10.19-9.8-7.37-3.1-14.36-5-14.36-14.55,0-8.54,6.89-13.29,14.85-13.29,8.43,0,13.38,4.85,15.42,12.71l-6.21,1.84c-1.16-4.95-3.78-8.44-9.31-8.44-4.17,0-8.25,2.14-8.25,6.69,0,4.76,2.91,6.12,6.79,7.86l10.77,4.75a12.87,12.87,0,0,1,7,11.84c0,9.6-6.69,15-16,15s-15.33-6-16.88-15Z" transform="translate(-12.22 -29.39)"/>
        </g>
        <g stroke="black" id="codes">
          <path id="code1" d="M113.24,71.1c-4.07,6.4-8.93,10.57-16.78,10.57-14.75,0-19.4-13.58-19.4-26.09,0-20.18,10.67-26.19,18.82-26.19,7.85,0,12.41,4.07,16,10.77l-5.92,3c-2.13-4.07-5-7.66-10-7.66-10.08,0-12.12,12.22-12.12,20S85.69,75.56,96,75.56c5.92,0,8.93-3.59,11.93-8.15Z" transform="translate(-12.22 -29.39)"/>
          <path id="code2" d="M171.24,55.58c0,4.07-.29,26.09-17.94,26.09-8.15,0-18-5.82-18-26.09s9.61-26.19,18-26.19C161.35,29.39,171.24,35.21,171.24,55.58Zm-29.1,0c0,7.37,1.36,20,11.16,20s11.15-12.61,11.15-20S163.1,35.5,153.3,35.5,142.14,48.11,142.14,55.58Z" transform="translate(-12.22 -29.39)"/>
          <path id="code3" d="M193.94,30.26h16.88c14.36,0,20.85,5.92,20.85,24.64,0,15.81-2.71,25.9-20.85,25.9H193.94V75h5.24V36.08h-5.24ZM205.68,75h6.89c8.53,0,12.31-4.85,12.31-19.4,0-15.52-4.46-19.5-12.51-19.5h-6.69Z" transform="translate(-12.22 -29.39)"/>
          <path id="code4" d="M255.83,30.26h31.52v5.82h-25V51.22H283V57H262.33V75h25V80.8H255.83Z" transform="translate(-12.22 -29.39)"/>
        </g>
        <path onClick={handleNuggetPunch} id="nug5" d="M149.46,278.88c54.88-24.1,44.43-33.91,24.65-90-22.36-63.44-47.86-94.84-94-68.76C35.11,145.52,75,182.31,83,225.25,90.63,266.79,126.41,289,149.46,278.88Z" transform="translate(-12.22 -29.39)" fill="#f59e35" stroke="#000" stroke-miterlimit="10" stroke-width="9"/>
        <path id="nug4" d="M294.25,198c27.37-45.24-28.51-67.5-35.85-73.16-11.33-8.74-60.82-16.84-78.34,4.05-29.29,34.92,3.7,50.76,35.23,69.84S280.13,221.37,294.25,198Z" transform="translate(-12.22 -29.39)" fill="#f59e35" stroke="#000" stroke-miterlimit="10" stroke-width="9"/>
        <path id="nug3" d="M131,312.56c54.19-25.61,52.15-49.41,11.4-92.77-24.47-26-47.1-54.29-76.77-45.57C22.28,187,33.43,240.69,55.59,263,71.42,279,103.08,325.77,131,312.56Z" transform="translate(-12.22 -29.39)" fill="#f59e35" stroke="#000" stroke-miterlimit="10" stroke-width="9"/>
        <path id="nug2" d="M267.84,263.67c6.41-54.63-3.27-28.5-43.23-71.29-34.25-36.67-94-17.71-97.17,10.49-4.58,40.78,11.1,64.5,52.7,69.55C221.56,277.44,259.74,332.71,267.84,263.67Z" transform="translate(-12.22 -29.39)" fill="#f59e35" stroke="#000" stroke-miterlimit="10" stroke-width="9"/>
        <path id="nug1" d="M223.32,274.8c26.05,47.3,37.49,35.62,87.72,15.45,55.1-22.12,60-69.06,47.2-87.69-16.4-23.88-77.84-37-91.23-.15C261.4,217.84,202.87,237.67,223.32,274.8Z" transform="translate(-12.22 -29.39)" fill="#f59e35" stroke="#000" stroke-miterlimit="10" stroke-width="9"/>
        <path id="nugbox" d="M342.14,363.07H61a6.46,6.46,0,0,1-6.26-4.63L26.36,258.14a6.34,6.34,0,0,1,6.26-8h335a6.35,6.35,0,0,1,6.3,7.81l-25.48,100.3A6.46,6.46,0,0,1,342.14,363.07Z" transform="translate(-12.22 -29.39)" stroke="#000" stroke-miterlimit="10" stroke-width="9" fill="url(#linear-gradient)"/>
      </g>
    </g>
  </g>
</svg>
<div className="nugget-group">
    <div onClick={() => {movie.current.restart()}} className="nug-button">play</div>
    <div onClick={() => {movie.current.pause()}} className="nug-button">pause</div>
    <div onClick={() => {movie.current.resume()}} className="nug-button">resume</div>
</div>
    </div>
  )
}

export default NuggetSVG