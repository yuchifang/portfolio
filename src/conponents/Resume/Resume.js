import React from 'react'
import './Resume.scss'
 function Resume() {
  return (
  <div id="resume">
    <div className="resume">
      <div className="resume_text">
        <h2 className="resume_heading">resume</h2>
      </div>
    </div>
      <div className="main">
        <div className="head">
          <h1>學歷</h1>
        </div>
        <div className="data">
          <p>台中朝陽科技大學資工系</p>
        </div>
        <div className="head">
          <h1>相關技術</h1>
        </div>
        <div className="data">
          <p>pug,SASS,Bootstrap,Javacript,React,Redux</p>
        </div>
        <div className="head">
          <h1>個人資訊</h1>
        </div>
        <div className="data">
          <p>姓名:方鈺淇</p>
          <p>手機:0975757873</p>
          <p>e-mail:fangfelipe@gmail.com3</p>
          <p>github:<a href="https://github.com/yuchifang">https://github.com/yuchifang</a></p>
          <p>方便聯絡時間: 9:00AM~5:00PM</p>
          <p>居住地: Hsinchu,Taiwan</p>
        </div>
        <div className="head">
          <h1>其他作品連結</h1>
        </div>
        <ul className="data">
          <li><span>Css</span> - Resume (<a href="https://github.com/yuchifang/Resume">https://github.com/yuchifang/Resume</a>)</li>
          <li><span>Css,Jquery</span> - iphone (<a href="https://github.com/yuchifang/iphone">https://github.com/yuchifang/iphone</a>)</li>
          <li><span>Jquery,Bootstrap(RWD)</span> - printing (<a href="https://github.com/yuchifang/printing">https://github.com/yuchifang/printing</a>)</li>
          <li><span>Html(Canvas),JavaScript</span> - Breakout-clone (<a href="https://github.com/yuchifang/Breakout-clone">https://github.com/yuchifang/Breakout-clone</a>)</li>
          <li><span>JavaScript(ES6)</span> - BookList (<a href="https://github.com/yuchifang/BookList">https://github.com/yuchifang/BookList</a>)</li>
          <li><span>React</span> - weather_react (<a href="https://github.com/yuchifang/weather_react">https://github.com/yuchifang/weather_react</a>)</li>
          <li><span>React-router</span> - recipe (<a href="https://github.com/yuchifang/recipe">https://github.com/yuchifang/recipe</a>)</li>
          <li><span>Redux</span> - reduxbasic (<a href="https://github.com/yuchifang/reduxbasic">https://github.com/yuchifang/reduxbasic</a>)</li>
          <li><span>Redux</span> - post (<a href="https://yuchifang.github.io/post">https://yuchifang.github.io/post</a>)</li>
        </ul>
      </div>
  </div>
   
    
  )
}
export default Resume;