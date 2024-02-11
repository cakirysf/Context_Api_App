import React from 'react'

const BasketItem = ({item, addToBasket, removeFromBasket}) => {
  return (
    <div className="d-flex gap-2 flex-column flex-md-row align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center">
        <div className="rounded bg-white">
          <img
            className="object-fit-contain"
            width={60}
            height={60}
            src={item.image}
            alt=""
          />
        </div>
        <h4>{item.title.slice(0, 30) + "..."}</h4>
        {/* <h4 className="text-truncate"> {item.title}</h4> */}
      </div>

      <div className="d-flex gap-3 justify-content-between align-items-center">
        <h3 className="text-success text-nowrap">{item.price} ₺</h3>

        <p className="d-flex align-items-center gap-1 text-nowrap">
          <span className="">Miktar: </span>
          <span className="fw-bold">{item.amount}</span>
        </p>

        <div className="d-flex gap-1">
          <button onClick={()=> removeFromBasket(item.id)} className="btn btn-danger">-</button>

          <button onClick={() => addToBasket(item)} className="btn btn-success">
            +
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default BasketItem
