### Helmet là gì?
- Helmet là middleware trong Node.js, dùng với Express, giúp bảo mật ứng dụng web bằng cách thiết lập các tiêu đề HTTP bảo mật.
- Nó giúp ngăn ngừa các lỗ hổng bảo mật phổ biến như XSS (Cross-Site Scripting), clickjacking, và các vấn đề liên quan đến headers HTTP.

### Các tính năng chính của Helmet:
- Thiết lập các tiêu đề bảo mật HTTP:
  - Ví dụ: `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `X-XSS-Protection`.
- Ngăn ngừa Clickjacking: 
  - Cài đặt `X-Frame-Options` để ngăn ứng dụng bị nhúng vào iframe.
- Bảo vệ chống XSS: 
  - Cài đặt `X-XSS-Protection` để ngăn chặn các cuộc tấn công XSS.

### Cách sử dụng Helmet:

```javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Sử dụng Helmet để bảo mật ứng dụng
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

- Helmet giúp dễ dàng cải thiện bảo mật ứng dụng mà không cần cấu hình thủ công các tiêu đề bảo mật.
