### Morgan là gì?

- Morgan là một middleware cho Node.js
- Dùng để ghi lại log thông tin về các HTTP requests gửi đến server.

### Các loại morgan và ví dụ

1. combined
  - Log chi tiết (IP, thời gian, phương thức, URL, mã trạng thái, user-agent).
  - Dùng cho môi trường production.
 
  ```
   ::1 - - [05/Dec/2024:06:15:32 +0000] "GET / HTTP/1.1" 200 13 "-" "Mozilla/5.0"
  ```

2. common
  - Log đơn giản hơn, ghi lại phương thức HTTP, URL và mã trạng thái.

  ```
   GET / 200
  ```

3. dev
  - Log màu sắc, hiển thị phương thức, URL, mã trạng thái, thời gian phản hồi.
  - Dùng trong môi trường phát triển.

   ```
   GET / 200 15ms
   ```

4. tiny
  - Log ngắn gọn nhất, chỉ ghi lại phương thức, URL và mã trạng thái.

  ```
   GET / 200
  ```

5. short
  - Log tương tự common, nhưng với thông tin ngắn gọn hơn.

  ```
   GET / 200 8ms
  ```

### Tùy chỉnh Morgan

Morgan cho phép tùy chỉnh log format bằng cách truyền vào một chuỗi định dạng hoặc một hàm. 

1. Định dạng tùy chỉnh
   Bạn có thể tạo định dạng riêng để ghi lại thông tin mà bạn cần. Ví dụ:
   ```javascript
   morgan.format('myformat', ':method :url :status');
   app.use(morgan('myformat'));
   ```
   Ví dụ log:
   ```
   GET / 200
   ```

2. Sử dụng hàm tùy chỉnh
   Bạn có thể sử dụng hàm tùy chỉnh để kiểm tra và thay đổi các thông tin log:
   ```javascript
   app.use(morgan((tokens, req, res) => {
     return [
       tokens.method(req, res),
       tokens.url(req, res),
       tokens.status(req, res),
       'Response time: ' + tokens['response-time'](req, res) + ' ms'
     ].join(' ');
   }));
   ```
   Ví dụ log:
   ```
   GET / 200 Response time: 12 ms
   ```
