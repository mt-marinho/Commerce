import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import type { ProductDTO } from "../../models/product";
import './styles.css';

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

export default function ProductDetails(){
    return (
            <>
              <HeaderClient/>
              <main>
                <section id="product-details-section" className="dsc-container">
                  <ProductDetailsCard product={product}/>
                  <div className="dsc-btn-page-container">
                    <ButtonPrimary/>
                    <ButtonInverse/>
                  </div>
                </section>
              </main>
            </>
    );
}