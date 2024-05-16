import React from "react";
import "../App.css"
class Home extends  React.Component{
    render() {
        return(
        <section id="section1">
            <div className="txt1">
              <div className="privet">
                <p>Hi Bitch</p>
              </div>
              <p className="Sasha">Я Саша Впикса
                ак Алиса Вписка
              </p>
              <a className="silka" href="https://www.youtube.com/@MC_KISA">
               <div className="privet2">
                <p>Мой канал</p>
               </div>
              </a>
            </div>
            <img  className="photo"  src="../img/pixil-frame-0 (1).png" alt="asdsa"/>
        </section>
        )
    }
}

export default Home