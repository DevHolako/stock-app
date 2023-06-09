import ClientCard from "./ClientCard";
import StockCard from "./StockCard";
import "./card.css";
type CardProps = {
  method: "Ajouter" | "Modifier";
  type: "Client" | "Stock";
  id?: string;
};

function Card({ method, type, id }: CardProps) {
  return (
    <>
      <h3 className="t-center">{`${method} ${type}`}</h3>
      {type == "Client" && <ClientCard method={method} id={id} />}
      {type == "Stock" && <StockCard method={method} id={id} />}
    </>
  );
}

export default Card;
