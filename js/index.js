var fruits = prompt("먹고싶은 과일을 입력해주세요");
switch (fruits) {
  case "딸기":
  price = 200; break;
  case "당근":
    price = 300;
    break;
    case "수박":
      price = 400;
      break;
    case "참외":
      price = 500;
      break;
    case "멜론":
      price = 600;
      break;
  default:
  alert("404");
}
alert(price + "원입니다.");
window.location.href='http://www.google.com/search?source=hp&q='+fruits;
