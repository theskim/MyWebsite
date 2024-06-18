import Project from "../Project";
import { Aazami } from "../../../../assets/ProjectImages";
import React from "react";

const AazamiP = () => {
  return (
    <Project
      title="Aazami - MakeUofT Winner of Most Innovative Power Efficient Hack using the Tiny ML Kit"
      alt="Aazami"
      skills="Arduino Nano 33 BLE Sense • Qualcomm Tiny ML Kit • Edge Impulse • Neo Pixels"
      image={Aazami}
      link="https://devpost.com/software/aazami"
      github="https://github.com/skim1601/Aazami"
    >
      Aazami primarily records the last 10 seconds of audio, which can be
      replayed through the voice command “I forgot.” By furnishing an effortless
      and dependable memory recall system, Aazami aims to elevate the life
      quality of dementia patients and their families.
      <br />
      <br />
      Developing Aazami involved integrating hardware and software components,
      including Arduino and Adafruit&apos;s Neopixel for hardware, and Edge
      Impulse for machine learning. Our team initiated the process by recording
      voices to develop a dataset for “I forgot” voice detection, which was
      refined through iterative testing. I mainly focused on training the
      machine learning model, spending over 87 minutes on Edge Impulse,
      resulting in 98.7% accuracy.
      <br />
      <br />
      We subsequently generated Arduino code, optimized hardware performance,
      and built an amplifier circuit to enhance the device’s sound. The
      components were then unified into a functional and efficient product.
    </Project>
  );
};

export default AazamiP;
