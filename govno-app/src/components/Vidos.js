import React from "react";
import "../App.css"
class Vidos extends  React.Component{
    render() {
        return(
        <section id="section2">
            <div className="txt3">
              <p>Видос</p>
            </div>
            <div className="txt4">
            <p >Особенностью аккаунта стали видеоролики
            с участием его мамы – Ольги,
            в которых он в грубой форме задавал
            некорректные вопросы, использовал
            в своей речи нецензурную брань,
            откровенно мешал родительнице
            заниматься повседневными делами,
            снимая контент на камеру.
            </p>
            </div>
              <video className="vidos" src="../video/video_2024-03-05_10-58-43.mp4" controls></video>
      </section>
        )
    }
}

export default Vidos