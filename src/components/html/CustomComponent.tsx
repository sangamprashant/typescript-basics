import React from 'react'
import Greet from '../Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name} {props.isLoggedIn}
    </div>
  )
}

export default CustomComponent