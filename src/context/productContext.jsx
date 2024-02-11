/* 
CONTEXT API (veriler burada tutuluyor)
uygulamadan birden çok bileşen ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar
Context yapısı içerisinde verilerin state'ini ve verileri değiştirmeye yarayan fonksiyonlar tutulur.
Merkezi state yönetim aracıdır.
State verileri tutmak yerine context yapısı kullanılır. */
/* aşağıdaki şekilde kodlar yazılcıdığında her yerden verilere ulaşılabilir */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext ()

//! Sağlayıcı ve tuttuğu verileri tanımlama
export function ProductProvider ({children}) {
    const [products, setProducts] = useState (null)
    const [category, setCategory] = useState ('Tümü')

 /* axios ile verileri çekmek için */    
    /* tüm kategori ise uygula değilse kategori seçimine göre verileri getir işlemi */
    useEffect (() =>{
        /* önceki ürünleri kaldır > yükleniyoru tetikle*/
        setProducts(null)

        const url =
        category === 'Tümü'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`

        axios
        .get(url)
        .then(res => setProducts(res.data))
    }, [category])

    // Context yapısından tuttuğumuz verileri bileşenlere sağlama    
    return(
        <ProductContext.Provider value = {{products, category, setCategory}}>
            {/* main.jsx içine productProverider ı import edip app jsx i sarmalıyoruz sonra children ı bu radaki gibi çağırıyoruz. */}
            {children}
        </ProductContext.Provider> 
    )
}

