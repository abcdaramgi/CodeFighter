// kafka에서 데이터를 받아서 DB에 저장하는 코드

const express = require('express');
const kafka = require('kafka-node');
const redis = require('redis');
const { Client } = require('pg');

const app = express();

const redisClient = redis.createClient({
    host: 'arn:aws:elasticache:ap-northeast-2:000585456056:replicationgroup:codefightercluster',
    port: 6379
});

const client = new Client({
    host: 'arn:aws:rds:ap-northeast-2:000585456056:db:codefighterdb',
    port: 5432,
    user: 'codefighter',
    password: 'codefighter',
    database: 'codefighterdb',
});

client.connect();