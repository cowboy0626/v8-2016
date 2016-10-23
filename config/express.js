var	config = require('./config'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	jwt = require('jsonwebtoken'),
	express = require('express');

// var	authenticate = expressJwt({ secret : config.tokenSecret });

// 라우팅 설정
var appRoutes = require(config.path.routes + '/app.routes');

// 앱생성 
var app = express();

// 미들웨어 설정 
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

// 뷰 환경 설정 
app.set('views', config.path.views);
app.set('view engine', 'hbs');

// /api 접근제어 
// app.use('/api/me', authenticate, function(req, res){
// 	res.status(200).json(req.user);
// });

// router 설정 
// app.use('/user', userRoutes);
app.use('/', appRoutes);

// static 디렉토리 정의(속도위해서 router 설정 아래에 있어야 함) 
app.use(express.static(config.path.root + '/public'));

// 크로스 도메인 이슈 대응 
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

// 404 에러 대응 
app.use(function(req, res, next){
    return res.render('index');
});

module.exports = app;


