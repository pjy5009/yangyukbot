const express = require('express');
const app = express();
const port = 3000;

// 홈 경로에 대한 응답
app.get('/', (req, res) => {
  res.send('양육비 챗봇 서버가 실행 중입니다!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`✅ 서버가 http://localhost:${port} 에서 실행 중입니다`);
});

