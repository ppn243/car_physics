import React, { useState } from "react";
import ReactPlayer from "react-player";
import useSound from "use-sound";
import mySound from "./music1.mp3";
import { Button, Flex } from "antd";
const Audio = () => {
  const [play, { stop, volume }] = useSound(mySound, { volume: 1 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeUp = () => {
    volume(volume + 0.1);
  };

  const handleVolumeDown = () => {
    volume(volume - 0.1);
  };

  return (
    <div style={{ position: "absolute", top: "0" }}>
      <ReactPlayer url={mySound} playing={isPlaying} />
      <Flex gap="small" wrap="wrap">
        {" "}
        <Button type="primary" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Flex>
    </div>
  );
};

export default Audio;
