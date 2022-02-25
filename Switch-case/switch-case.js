console.log('hello world from HTML');
/*Trong Javascript, Switch case chính là câu điều kiện, dùng để chạy code (actions) dựa trên tên của các điều kiện. Tương tự như mô hình thác nước, switch case sẽ chạy từ trên xuống dưới và check từng điều kiện*/
let day = '';
switch (new Date().getDay()) {
    case 0:
        day='sunday';
        break;
    case 1:
        day='monday';
        break;
    case 2:
        day='tuesday';
        break;
    case 3:
        day='wednesday';
        break;
    case 4:
        day='thursday';
        break;
    case 5:
        day='friday';
        break;
    case 6:
        day='saturday';
        break;
}
console.log('today is', day, ' in case:', new Date().getDay());