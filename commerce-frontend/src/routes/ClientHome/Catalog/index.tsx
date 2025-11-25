import './styles.css'
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextpage from "../../../components/ButtonNextPage";
import type { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
    id: 2,
    name: "TV",
    description: "tv de 55 polegadas",
    price: 2000,
    imgUrl: "https://cdncentric.adsomos.com.br/image/cache/data/Produtos/SM/Smart-TV-LED-UHD-4K-55-Polegadas-Preta-55AU7700-Samsung-COR-NO-DEFINIDA-8F3A70DE-1-1400x1400.jpg.webp",
    categories: [
      {
        id: 2,
        name: "Eletronicos"
      },
      {
        id: 3,
        name: "Computadores"
      },
      {
        id: 4,
        name: "Importado"
      }
    ]
}


export default function Catalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
          </div>
          <ButtonNextpage/>
        </section>
      </main>
    </>
  );
}
