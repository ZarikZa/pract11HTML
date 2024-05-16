import React from "react";
import "../App.css"
class Sotceti extends  React.Component{
    render() {
        return(
            <section id="section4">
                <div className="txt8">
                  <p>Становись мои подписчиком и следи за моими новыми видео</p>
                </div>
                  <div>
                    <a href="https://t.me/mkisa_yourube">
                      <img className="telegram" src="../img/free-icon-telegram-2111708.png" alt="telegram"/>
                    </a>
                     <a href="https://vk.com/drugaya_juli">
                      <img className="vk" src="../img/free-icon-vk-2111765.png" alt="VK"/>
                    </a>
                       <a href="https://www.youtube.com/channel/UCwe5HDqHZxlAglEH7fj5EsA">
                      <img className="youtube" src="../img/free-icon-youtube-2111795.png" alt="youtube"/>
                    </a>
                  </div>
                    <img className="kartinka" src="../img/саша.png" alt="МС Кимуля"/>
            </section>
        )
    }
}

export default Sotceti