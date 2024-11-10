import React from 'react'
import Hero from '../Hero/Hero'
import "./Header.css"

const Header = () => {
  return (
<>
<div className="box">
<Hero name="Branding & Design system" info="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" image="/img1.png" />
</div>

<div className="box__wrapp">
<Hero name="Custome & Plugin Development" info="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"  image="/img2.png"/>
</div>


</>
)
}

export default Header