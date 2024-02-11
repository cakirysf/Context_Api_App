import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


// contexte yapısı tanımlama
export const BasketContext = createContext();

// contex'de tutulan verileri uygulamaya aktaracak bir sağlayıcı bileşeni tanımlama
export function BasketProvider({ children }) {
  /* useLocalStorage öncesi const [basket, setBasket] = useState([]); */
    /* useLocalStorage hooku verilerin ekrandan silinmesini engellliyor (https://usehooks.com/uselocalstorage adresinden kurulum npm i @uidotdev/usehooks) */
  const [basket, setBasket] = useLocalStorage("basket",[]);

  //! sepete ürün ekleme metodu (daha sonra Card.jsx e göndereceğiz)
  const addToBasket = (newProduct) => {
    // 1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // 2) ürün sepette varsa > miktarını 1 artır
       // a) bululan ürünün miktarını 1 artır 
       const updated = {...found, amount: found.amount+1}
       // b) sepet dizisindeki eski ürünün yerine güncel halini koy
       // dizideki bir elemanın yerine   eskisinin yenisini koyabiliriz map metodu ile yani bir diziyi güncelleme state de tutulan veri için (map dizi metodu)
       const newBasket = basket.map((item) => item.id === updated.id ? updated:item)
       // c) state güncelle
       setBasket(newBasket)

       toast.info(`Ürün miktarı artırıldı(${updated.amount})`)

    } else {
      // 3) ürün sepette yoksa > ürünü sepete ekle (miktarı 1 3 eşitle)

      /* {...newProduct, amount: 1} ile ürün sepete eklneyorsa ilk değer yani miktar değeri 1 olsun demek */
      setBasket([...basket, {...newProduct, amount: 1}]);

      toast.success('Ürün sepete eklendi')

    }
    /* console.log(basket) */
  };

  
  //! spetten ürünü kaldırma metodu
  /* const removeFromBasket = (delete_id) => {
      //sepetteki ürünü bul
      const found = basket.find ((i) => i.id === delete_id)
        
        if (found.amount > 1) {
          // miktarı 1 den fazlaysa > miktrını 1 eksilt
          const updated = { ...found, amount: found.amaunt - 1 };
          
          const newBasket = basket.map((item) =>
          item.id === updated.id ? updated : item
          );

          setBasket(newBasket)
        } else {
          // miktarı 1 e eşitse > ürünü dizinden kaldır
          // dizinden eleman kaldırmak için kullanılan dizi metodu filter metodur
          const filtered = basket.filter((i) => i.id !== delete_id);

          setBasket(filtered);
        }
    }

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children} {/* uygulamanın tamamına aktarmak için }
    </BasketContext.Provider>
  );
}
 */

 //Çalışan kodlar
 const removeFromBasket = (delete_id) => {
 const found = basket.find((i) => i.id === delete_id);
 if (found.amount > 1) {
     const updated = { ...found, amount: found.amount - 1 };
     const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);

      toast.info(`Ürün miktarı azaltıldı(${updated.amount})`)
    } else {
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);

      toast.error(`Ürün sepetten kaldırıldı`)
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}