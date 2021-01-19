import * as Yup from 'yup'

export default Yup.object({
  cardUserName: Yup.string().required('持卡人姓名需與信用卡姓名一致'),
  card_0: Yup.number().required('請輸入信用卡號碼'),
  card_1: Yup.number().required('請輸入信用卡號碼'),
  card_2: Yup.number().required('請輸入信用卡號碼'),
  card_3: Yup.number().required('請輸入信用卡號碼'),
  goodThurMonth: Yup.number().required('請輸入月'),
  goodThurYear: Yup.number().required('請輸入年'),
  securityCode: Yup.number()
    .required('請輸入信用卡末三碼')
    .typeError('請輸入數字'),
  phoneNumber: Yup.string()
    .required('請輸入手機號碼')
})
