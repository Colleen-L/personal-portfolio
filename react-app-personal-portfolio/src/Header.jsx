function Header() {

    return(
        <header>
            <div className="container">
                <ul>
                    <li className="firstComponent">
                        <img src="./envelope.svg"></img>
                        <p className="headerEmail">&nbsp;colleen.l.4592@gmail.com</p>
                    </li>
                    <li><p className="middleComponent">Colleen Li</p></li>
                    <li className="lastComponent">
                        <a className="headerHome" href="">Home</a>
                        <p>&nbsp;&#47;&nbsp;</p>
                        <a className="headerProjects" href="">Projects</a>
                        <p>&nbsp;&#47;&nbsp;</p>
                        <a className="headerAbout" href="">About</a>
                    </li>
                </ul>
                </div>
        </header>
    );
}

export default Header