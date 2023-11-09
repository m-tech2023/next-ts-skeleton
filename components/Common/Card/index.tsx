import Link from "next/link";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className="container mt-5">
      <div className={styles.card}>
        <div className="row p-3">
          <div className="col d-flex align-items-center">
            <div>
              <h5 className="text-white">Venda seu cavalo conosco!</h5>
              <Link
                href={"/venda-seu-cavalo"}
                style={{ textDecoration: "none" }}
              >
                <p style={{ color: "#19ffa7", fontSize: "20px" }}>Saiba mais</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
