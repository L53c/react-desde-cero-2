import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div>
      {`Prof.: ${profesor}`}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
      </div>
    </div>
  </article>
)
Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}
Curso.defaultProps = {
  title: "No se encontró título",
  image: "https://1.bp.blogspot.com/-4VG8gZWf4Kw/WnR5n6IaLiI/AAAAAAAAMaE/Ghsc4M-uzA8_03u1JPIeYcuDan3B0n8RwCLcBGAs/s400/Ciudad%2BVerde%2Bchina%2B2.jpg",
  price: "--",
  profesor: ""
}
export default Curso