const express = require('express');
// 새로운 라우터 생성
const router = express.Router();

// JSON 데이터 배열 생성
let data = [
    { id: 1, title: 'hi',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: '배고파',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: '치킨', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: '콜라', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: '햄버거', order: 5, completed: false, createdOn: new Date() },
];

// JSON 데어터 배열 반환
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// id로 찾은 데이터 배열에서 객체 반환
router.get('/:id', function (req, res) {
    // id와 일치하는 data 배열에서 객체 찾기
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    //  개체가 발견되면 개체를 반환, 그렇지 않으면 http 상태코드 404(not-found)반환
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
