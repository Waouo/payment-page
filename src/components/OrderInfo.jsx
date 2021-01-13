import { useState } from 'react'
import order from '../order'
import storePicture from '../images/storePicture.Png'
import logoSm from '../images/logo_sm.png'

const OrderInfo = () => {
  const [method, setMethod] = useState('1')

  const radios = [
    { value: '0', name: '信用卡' },
    { value: '1', name: '網路ATM', text: '晶片讀卡機轉帳' },
    { value: '2', name: 'ATM櫃員機', text: '實體ATM及網銀' },
  ]

  return (
    <section className="order justify-content-center flex-wrap pb-3">
      <img className="img-store" src={storePicture} style={{ width: '100%' }} />
      <div className="order-info w-100  ">
        <h1 className="title">訂單資訊</h1>
        <h2 className="font-weight-bold mt-3 mb-3">商店名稱</h2>
        <p className="text-capitalize font-space">{order.shopName}</p>
        <h2 className="font-weight-bold mt-3 mb-3">訂單編號</h2>
        <p className="font-space">{order.id}</p>
        <h2 className="font-weight-bold mt-5 mb-3">本訂單將支付</h2>
        <p className="text-right pr-5">
          <span className="price font-weight-bold text-right font-lg">
            ${order.price}
          </span>
          元
        </p>
      </div>
      <div className="order-method w-100">
        <h2 className="font-weight-bold mt-3 mb-3">支付方式</h2>
        <div>
          {radios.map((radio, idx) => (
            <label
              key={idx}
              htmlFor={radio.name}
              className={`btn-cus d-flex align-items-center flex-wrap text-left pl-5 mb-3 ${
                radio.value === method && 'btn-cus-active'
              }`}
            >
              <input
                type="radio"
                name="method"
                id={radio.name}
                value={radio.value}
                checked={radio.value === method}
                onChange={(e) => setMethod(e.currentTarget.value)}
                style={{ display: 'none' }}
              />
              <div>{radio.name}</div>

              {radio.text && (
                <span className="sub-text">
                  &nbsp; &nbsp; &nbsp;{`(${radio.text})`}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
      <img src={logoSm} className="ml-3" />
    </section>
  )
}

export default OrderInfo
