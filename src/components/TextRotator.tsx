import React from 'react'
import { FlipWords } from './ui/flip-words'

function TextRotator() {
  const words = ["Cloud_Engineer", "Web_Developer", "GenAI_Enthusiast"];
  return (
    <div
    className="py-4  rounded-md flex flex-col justify-center  overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
    I am a Software Developer &
    <FlipWords words={words} /> <br />
    </div>
  </div>
  )
}

export default TextRotator