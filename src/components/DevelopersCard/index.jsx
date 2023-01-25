import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../Heading'
import ParagraphBlock from '../ParagraphBlock'

const DevelopersCard = (props) => {

  const [visible, setVisible] = useState(false)
  const [topPosition, setTopPosition] = useState(null)
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      onScroll()
    }
  })

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function onScroll() {
    setTopPosition(elementRef.current.getBoundingClientRect().top)
    if (topPosition < (window.innerHeight - 500)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <div ref={elementRef} className={`flex flex-col ${props.flow === "reverse" ? 'md:flex-row-reverse' : 'md:flex-row'} items-center xl:justify-between group`}>
      <div className="overflow-hidden">
        <img src={props.img} alt={props.alt} className={`transition-all ease-in-out duration-500 ${visible ? 'translate-x-0 opacity-100' : props.flow === 'reverse' ? 'translate-x-[100%] opacity-0' : '-translate-x-[100%] opacity-0'}`}></img>
      </div>

      <div className="px-8 md:w-10/12 lg:max-w-[600px] xl:max-w-full xl:text-center leading-8">
        <div className={`space-y-4 transition-all ease-in-out duration-500 ${visible ? 'translate-x-0 opacity-100' : props.flow === 'reverse' ? '-translate-x-[100%] opacity-0' : 'translate-x-[100%] opacity-0'}`}>
          <Heading type="headingTwo" headingTwoContent={props.title} />
          <ParagraphBlock paragraphContent={props.content} />
        </div>
      </div>
    </div>
  )
}

export default DevelopersCard