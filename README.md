
---Javacript----

câu 1: js chạy được ở đâu?
-js chạy trên các môi trường trình duyệt và môi trường backend ví dụ như nodejs, nextjs

câu 2: các kiểu dữ liệu trong js?
-number, string, boolen, undefined, object, null

câu 3: hoisting là gì?
-hoisting là một hành vi mặc định của js nó sẽ đưa các biến hoặc hàm lên trên đầu trước khi code được chạy

câu 4: sự khác nhau giữa let, const, var?
-hoisting: var sẽ bị hoisting còn let, const thì không bị hoisting
-scope: phạm vi hoạt động của let, const là trong block-scope và không thể truy cập ngoài scope, phạm vi hoạt động của var là func-scope và có thể truy cập ngoài scope
-var, let có thể bị gán lại giá trị, const không thể gán lại giá trị

câu 5: callback func là gì?
-callback func là truyền một đoạn code hàm a vào trong code hàm b sau 1 khoảng thời gian hàm b sẽ gọi lại hàm a
-vd: callback thường được dùng để sử lý các sự kiện

câu 6: closure ?
-closure là một hàm có thể ghi nhớ nơi nó được tạo ra và có thể truy cập biến bên ngoài phạm vi của nó

câu 7: currying ?
-là return một func trong một func khác

câu 8: bất đồng bộ trong js?
-Khi 1 func A mất 1 khoảng thời gian để chạy thì trong khoang thời gian đó một func B được chạy mà không phải chờ func A kết thúc
-Các phương thức bất đồng bộ: sync async, promise, async await

câu 9: promise ?
-Là một hàm được sinh ra để giải quyết các tác vụ bất đồng bộ
---HTML---

câu 1: thẻ meta dùng để làm gì?
-Dùng để báo cho trình duyệt về mô tả của trang
câu 2: BEM là gì?
-BEM là một phương thức để viết class HTML do cộng đồng lập trình viên đưa ra
câu 3: DOCTYPE ?
-Để thể hiện trang HTML đó được viết ở vesion nào
câu 4: DOM ?
-Là mô hình tài liệu dc thể hiện dưới dạng đối tượng và là dao diện lập trình của HTML

---Css---
câu 1:độ ưu tiên css?
-Inline nhúng trực tiếp vào phần tử HTML bằng việc sử dụng thuộc tính style của phần tử
-Internal tạo các bộ chọn trực tiếp trên trang bằng cách đặt trong thẻ <style></style>
-External tạo file css nằm riêng và nhúng vào trang sử dụng thẻ <link> để nhúng vào trang

-----Reactjs----


câu 1: state?
-Dùng để lưu trữ dữ liệu động của component
câu 2: props?
-Là đối tượng lưu trữ dữ liệu của các attribute trong 1 thẻ
câu 3: lifecle?
-vòng đời của compo
+ mounting
+ updateting
+ unmountting
componentdidmount
componentdidupdate
componentwillunmount