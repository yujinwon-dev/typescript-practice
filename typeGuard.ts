type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum): void => {
  // 'StringOrNum' 형식은 'number' 형식에 할당할 수 없습니다.
  // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
  // itemPrice = price;

  if (typeof price === 'string') {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);
