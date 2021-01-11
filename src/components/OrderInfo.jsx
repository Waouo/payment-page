import storePicture from '../images/storePicture.Png'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import order from '../order'
import { useState } from 'react'

const OrderInfo = () => {
  const [method, setMethod] = useState(0)

  const radios = [
    { value: 0, name: '信用卡' },
    { value: 1, name: '網路ATM', text: '晶片讀卡機轉帳' },
    { value: 2, name: 'ATM櫃員機', text: '實體ATM及網銀' },
  ]

  return (
    <section className="order justify-content-center flex-wrap">
      <img className="img-store" src={storePicture} style={{ width: '100%' }} />
      <div className="order-info w-100  ">
        <h1 className="title">訂單資訊</h1>
        <h2 className="font-weight-bold mt-3 mb-3">商店名稱</h2>
        <p className="text-capitalize font-space">{order.shopName}</p>
        <h2 className="font-weight-bold mt-3 mb-3">訂單編號</h2>
        <p className="font-space">{order.id}</p>
        <h2 className="font-weight-bold mt-5 mb-3">本訂單將支付</h2>
        <p className="text-right">
          <span className="price font-weight-bold text-right font-lg">
            ${order.price}
          </span>
          元
        </p>
      </div>
      <div className="order-method w-100">
        <h2 className="font-weight-bold mt-3 mb-3">支付方式</h2>
        <ButtonGroup className="w-100 " toggle vertical>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="light"
              name="radio"
              value={radio.value}
              checked={method === radio.value}
              onChange={(e) => setMethod(e.currentTarget.value)}
              className="my-1"
              size="lg"
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </section>
  )
}

export default OrderInfo
