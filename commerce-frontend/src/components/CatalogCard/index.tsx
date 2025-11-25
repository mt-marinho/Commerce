import computer from "../../assets/computer.png"
import type { catalogDTO } from "../../models/catalog";
import './styles.css'

type Props = {
  product : catalogDTO;
}


export default function CatalogCard({product} : Props) {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computer} alt={product.name} />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ {product.price}</h3>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}
