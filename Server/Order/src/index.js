const express = require('express');
const jwt = require('jsonwebtoken');
const redis = require('redis');

const app = express();

app.post('/api/order', (req, res) => {
  const { userId, userPhone, userAddress, productCount } = req.body;

  // 토큰을 생성하는 코드
  const token = jwt.sign({
    userId,
    userPhone,
    userAddress,
    productCount,
  }, 'secretKey', {
    expiresIn: '1h',
  });

  // Redis에 토큰을 저장하는 코드
  const redisClient = redis.createClient({
    host: 'arn:aws:elasticache:ap-northeast-2:000585456056:replicationgroup:codefightercluster',
    port: 6379
  });
  redisClient.set('token:' + token, JSON.stringify({
    userId,
    userPhone,
    userAddress,
    productCount,
  }), (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Redis에 토큰을 저장했습니다.');
      res.json({
        success: true,
      });
    }
  });
});

app.listen(3000);