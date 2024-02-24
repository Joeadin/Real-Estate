import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
    <div className='paddings innerwidth flexCenter f-container'>
    

    {/* Left side*/}
<div className='flexColStart f-left'>
<img src='./logo2.png' alt='' width={120} />

<span className='secondaryText'>
Building Dreams, <br />
Crafting Exceptional Homes.
</span>
</div>

{/* right side*/}
<div className='flexColStart f-right'>
<span className='primaryText'>Information</span>
<span className='secondaryText'>7835 Roysambu, NRB 100, Kenya</span>

<div className='flexCenter f-menu'>
<span>Property</span>
<span>Services</span>
<span>Products</span>
<span>About Us</span>
</div>
</div>
    </div>
    </section>
  )
}

export default Footer