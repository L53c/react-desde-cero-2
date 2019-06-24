import React from 'react'

const Curso = ({title, image, price, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img 
        src={image?image:"https://st1.uvnimg.com/dims4/default/7cf44ae/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fcdn.citylab.com%2Fmedia%2Fimg%2Fcitylab%2F2017%2F01%2FEmpire_Elysees%2Flead_large.jpg%3F1484771335"} 
        alt={title?title:"No hay texto"}
       />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title?title:"No hay título"}</h3>
      <div>
      {`Prof.: ${profesor?profesor:"No hay profesor"}`}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">{`$ ${price?price:"No hay precio"}`}</a>
      </div>
    </div>
  </article>
)
export default Curso