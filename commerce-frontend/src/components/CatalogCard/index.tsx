import computer from "../../assets/computer.png"
import type { catalogDTO } from "../../models/catalog";
import './styles.css'

type Props = {
  catalog : catalogDTO;
}


export default function CatalogCard({catalog} : Props) {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computer} alt="Computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ {catalog.price}</h3>
        <h4>{catalog.name}</h4>
      </div>
    </div>
  );
}
