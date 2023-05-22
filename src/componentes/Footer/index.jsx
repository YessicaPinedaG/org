import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://github.com/YessicaPinedaG/'>
            <img src="/img/github.png" alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/yessica-pineda-guerra/'>
            <img src="/img/linkedin.png" alt='linkedin' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Yessica Pineda & Alura</strong>
</footer>
}

export default Footer