import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../Heading'
import ParagraphBlock from '../ParagraphBlock'

const Elementx = (props) => {

  const [visible, setVisible] = useState(false)
  const [topPosition, setTopPosition] = useState(null)
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      getTopPosition()
    }
  })
  
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  const onScroll = () => {
    
    getTopPosition()
    if(topPosition < (window.innerHeight - 400)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  console.log(visible)

  function getTopPosition() {
    setTopPosition(elementRef.current.getBoundingClientRect().top)
  }

  return (
    <div ref={elementRef} className="flex flex-col md:flex-row-reverse items-center xl:justify-between group">
      <div className="overflow-hidden">
        <img src={props.img} alt="developers-img" className={`relative transition-all ease-in-out duration-1000 ${visible? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'}`}></img>
      </div>

      <div className="px-8 md:w-10/12 lg:max-w-[600px] xl:max-w-full xl:text-center space-y-4 leading-8">
        <Heading type="headingTwo" headingTwoContent="Open-Source for the Dev Community" />
        <ParagraphBlock paragraphContent="DevNote is open to receiving inputs from the development community. Have a great idea on how to improve this project? Make your contribution! The more developers are invested, the better the results." />
      </div>
    </div>
  )
}

export default Elementx