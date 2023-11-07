import styles from './styles.module.scss';

const card = `${styles.card} card`;

const Card = ()=>{
  return(
    <div className="container mt-5">
      <div className={card}>
        <div className="row p-3">
          <div className="col">
            <h5 className="text-white">Venda seu cavalo conosco!</h5>
            <p style={{color: '#5AA488'}}>Saiba mais</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;