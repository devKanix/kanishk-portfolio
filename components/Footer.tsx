import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vm]">Its not a bug, its an 
                <span className="text-purple"> undocumented feature.</span>
                </h1>
                <a href = "mailto:opkanix@gmail.com">
                    <MagicButton
                    title="Wants to talk?"
                    icon={<FaLocationArrow />}
                    position="right" />
                </a>
        </div>
        <div className="mt-16 flex justify-center items-center">
  <p className="md:text-base text-sm md:font-normal font-light text-center">
    Copyright © 2024 Kanishk Chaudhary
  </p>
</div>

    </footer>
  )
}

export default Footer