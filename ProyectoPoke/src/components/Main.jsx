import React from "react";
import videoPoke from "../video/videoPoke.mp4";
const Main = () => {
return (
<div className="poke-vid">
    <video src={videoPoke} autoPlay loop muted type="video/mp4"/>   
</div>
)
}

export default Main;