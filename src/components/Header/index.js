import './Header.css'

const Header = () => {


    return (
        <header className='header'>
            <section className='logo'>
                <img src="/assets/logo.svg" alt="" />
            </section>
            <section className='socials'>
                <a href="https://www.facebook.com/GhibliUSA" target="_blank"  >
                    <img src="/assets/logo-fb.svg" alt="logo facebook" />
                </a>
                <a href="https://www.instagram.com/ghibliusa/" target="_blank">
                    <img src="/assets/logo-ig.svg" alt="logo instagram" />
                </a>
                <a href="https://twitter.com/JP_GHIBLI" target="_blank">
                    <img src="/assets/logo-twt.svg" alt="logo twitter" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" >
                    <img src="/assets/logo-yb.svg" alt="" />
                </a>
            </section>
        </header>
    )
}

export default Header