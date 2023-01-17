import './Main.css';

const Main = (props) => {
    return (
    <div className="main" >
        <section className="description">
            <h2>Hayao Miyazaki</h2>
            <h1> A viagem de chihiro</h1>
            <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
            <nav className="navigation">
                <a href="https://www.netflix.com/br/title/60023642" target="_blank">
                    <button className="play-now">
                        <p>
                            <img src="./assets/play-icon.svg" alt="" />
                            Assitir agora</p>
                    </button>
                </a>
                <button className="trailer" onClick={() => props.mudarEstado('flex')}>
                    <p>Assista o trailer</p>
                </button>
            </nav>
        </section >
        <section className="image">
            <img src="/assets/image-chihiro.svg" alt="" />
        </section>
        
    
    </div >
    )
}

export default Main