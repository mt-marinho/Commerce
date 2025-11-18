import HeaderClient from "../../components/HeaderClient";
import './styles.css'
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextpage from "../../components/ButtonNextPage";
import type { catalogDTO } from "../../models/catalog";

const cat : catalogDTO = {
    price : 1000,
    name: "TV"
}


export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
            <CatalogCard catalog={cat}/>
          </div>
          <ButtonNextpage/>
        </section>
      </main>
    </>
  );
}
