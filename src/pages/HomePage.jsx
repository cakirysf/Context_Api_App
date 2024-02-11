import Loader from "../components/Loader"
//! Card.jsx ile ürün gösterimlerini çağırma
import Card from "../components/Card"

//! Bir context yapısına abone olmak için kodlar
import { useContext } from "react"
//! Abone olmak istenilen context i çağırmak
import { ProductContext } from "../context/productContext"


const HomePage = () => {
  /* context yapısında tutulan vir veriye projedeki bileşen içerisinde erişmek istiyorsak bileşenden ilgili context yapısına abone oluruz yukarıdaki import satırları ve aşağıdaki gelen_veri satırında ki gibi */
  const {products, category} = useContext(ProductContext)
    /* console.log(gelen_veri) */
  return (
    <div className="container">
      <h2 className="my-4">{category && category.charAt(0).toUpperCase() + category.slice(1)}</h2>
    <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
      {/* veriler gelmediyse yükleniyor göster */}
        {!products && <Loader/> }
      {/* veriler geldiyse her biri için kart göster */}
      {products?.map((product) => (
        <Card key={product.id} product={product}/>
      ))}
    </div>
    </div>
  )
}

export default HomePage
