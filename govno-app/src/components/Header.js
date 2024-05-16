import React from "react";

class Header extends React.Component{
    render() {
        return(
           <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>

                  <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#section1" className="nav-link active" aria-current="page">Дом</a></li>
                    <li className="nav-item"><a href="#section2" className="nav-link">Видос</a></li>
                    <li className="nav-item"><a href="#section3" className="nav-link">Обо мне</a></li>
                    <li className="nav-item"><a href="#section4" className="nav-link">Подпишитесь</a></li>
                  </ul>
                </header>
           </div>
        )
    }
}

export default Header