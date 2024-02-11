import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  // sepetteki toplam ürün sayısını hesaplama reduce metodu ile
  const totalAmount = basket.reduce((total, item) => total + item.amount, 0)

  // sepetteki toplam fiyatı hesaplama
  const totalPrice = basket.reduce((total, item)=> total + item.price * item.amount, 0)

  return (
    <div className="container my-5">
      <div className="d-flex flex-column gap-5">

      {/* sepette ürün yoksa */}
      {basket.length === 0 && (
        <p className="text-center my-5"><span className="mx-3">Öncelikle sepete bir ürün ekleyiniz.</span>
        <Link to={'/'}>Ürünler</Link>
        </p>
      )}  

      {/* sepette ürün varsa */}  
        {basket?.map((item) => (
          <BasketItem 
          key={item.id} 
          item={item} 
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      {basket.length !== 0 && (
      <div className="border p-5 rounded my-5 fs-4">
        <p>Sepetteki Ürün : <span className="text-warning fw-bold">{totalAmount} Adet</span></p>
        <p>Toplam Fiyat : <span className="text-success fw-bold">
          {/* toFixed ondalıklı kısım için kullanılır örnek 12,230001324 yerine 12,23 şeklinde yazdırır */}
          {totalPrice.toFixed(2)} ₺</span> </p>
      </div>
      )}
    </div>
  );
};

export default CheckoutPage;
