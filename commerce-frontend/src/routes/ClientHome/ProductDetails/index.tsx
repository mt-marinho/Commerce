import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service"

export default function ProductDetails() {
  const [product, setProduct] = useState<ProductDTO>()
  const navigate = useNavigate();
  const param = useParams();
    useEffect(()=>{
    productService.findById(Number(param.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/")
      });
  }, [])

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product
          && <ProductDetailsCard product={product} />}
          
          <div className="dsc-btn-page-container">
            <ButtonPrimary name="Comprar" />
            <Link to="/">
              <ButtonInverse name="início" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
