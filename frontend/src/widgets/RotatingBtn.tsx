import "./RotatingBtn.css"
import { useEffect, useRef, useState } from 'react'

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export function RotatingBtn() {
    // script
    let [value,setValue] = useState(-90)
    let divStyle = {
        transform: `rotate(${value}deg)`,
        'transform-origin': 'center'
    }
    let svgStyle = {
        transform: 'translate(0px, 0px)' 
    }

    let timer = useInterval(() => {
        setValue(value + 5)
    }, 60)

    // jsx
    return (
        <button className="ro-button ro-button-start" id="rotating-btn" data-v-24c32f9e="" data-v-464974f8="">
            <div className="svg-container" id="rotating-div" data-v-24c32f9e="" style={divStyle}>
                <svg width="180" height="180" className="svg" id="rotating-svg" data-v-24c32f9e="" style={svgStyle}>
                    <circle cx="90" cy="90" r="90" className="circle" id="rotating-circle" data-v-24c32f9e="">
                    </circle>
                </svg>
            </div>
            <span className="label" data-v-24c32f9e="" id="rotating-span" >Enter</span>
        </button>
    )
}