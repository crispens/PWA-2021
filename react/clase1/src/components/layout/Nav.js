const navItems =  [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Login',
        link: '/login'
    }
]
const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Maricel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {navItems.map((item, index) => (
                     <li key= {index} className="nav-item"><a className="nav-link active" href= {item.link}>{item.title}</a></li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;