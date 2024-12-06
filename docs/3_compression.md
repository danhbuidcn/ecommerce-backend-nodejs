### Compression là gì?

- Compression là một middleware trong Node.js, giúp nén (compress) dữ liệu HTTP response trước khi gửi tới client. 
- Điều này giúp giảm băng thông sử dụng và tăng tốc độ tải trang, đặc biệt với các tài nguyên lớn như HTML, CSS, JavaScript.

### Cách hoạt động:

- Compression nén các dữ liệu trước khi gửi từ server đến client bằng các thuật toán như gzip hoặc brotli.
- Client sẽ tự động giải nén dữ liệu khi nhận được, miễn là client hỗ trợ định dạng nén.

### Cách sử dụng Compression:

1. Cài đặt:
   Trước tiên, bạn cần cài đặt `compression` qua npm:
   ```bash
   npm install compression
   ```

2. Sử dụng với Express:
   ```javascript
   const express = require('express');
   const compression = require('compression');

   const app = express();

   // Sử dụng middleware compression
   app.use(compression());

   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });

   app.listen(3000, () => {
     console.log('Server running on port 3000');
   });
   ```

### Lợi ích của Compression:
- Giảm kích thước dữ liệu: Giúp giảm băng thông và thời gian tải trang.
- Tăng tốc độ tải trang: Dữ liệu nén sẽ giúp giảm thời gian truyền tải từ server đến client, đặc biệt đối với các trang web có nhiều tài nguyên lớn.

### Các thuật toán nén phổ biến:
- gzip: Được hỗ trợ rộng rãi, có hiệu quả nén cao.
- brotli: Cung cấp tỷ lệ nén tốt hơn gzip, nhưng yêu cầu hỗ trợ từ cả server và client.
