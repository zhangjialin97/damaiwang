var Mock = require('mockjs')

// 张佳林
// 轮播图片
Mock.mock('/api/banner', 'get', startbanner);
function startbanner() {
    let data = [];

    for (let i = 0; i < 1; i++) {
        let user =
            ["img/base/pic1.jpg", "img/base/pic2.jpg", "img/base/pic3.jpg", "img/qinzi/img_03.png"];
        data = user;
    }
    return data;
}

// 登录
// Mock.mock('/api/login', 'post', (option) => {
//     let { userName, passWord } = JSON.parse(option.body);
//     return (userName == "admin", passWord == "123")
// })

// 今日推荐图片
Mock.mock('/api/home/todayimg', 'get', todayimg);
function todayimg() {
    let data = [];

    for (let i = 0; i < 1; i++) {
        let user = {
            todayimg: [
                "img/base/cardimg1.jpg",
                "img/base/cardimg2.jpg",
                "img/base/cardimg3.jpg",
                "img/base/cardimg4.jpg",
                "img/base/cardimg5.jpg",
                "img/base/cardimg6.jpg",
            ]
        };
        data.push(user);
    }
    return data;
}

// 今日推荐文字价格
Mock.mock('/api/home/todayitems', 'get', todayitems);
function todayitems() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.cword(8, 10),
            price: Random.integer(100, 500),
            xiabiao: Random.integer(0, 5)
        };
        data.push(user);
    }
    return data;
}

// 1-5F信息内容
Mock.mock('/api/home/xijudaren', 'get', xijudaren);
function xijudaren() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 4; i++) {
        let user = {
            title: Random.cword(8, 15),
            datefrom: Mock.mock('@date("yyyy-MM-dd")'),
            dateto: Mock.mock('@date("yyyy-MM-dd")'),
            address: Random.city(true),
            price: Random.integer(100, 500),

        };
        data.push(user);
    }
    return data;
}

// 1-5F堆叠图片概要
Mock.mock('/api/home/xijudaren/gaiyao', 'get', xijudarengaiyao);
function xijudarengaiyao() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 1; i++) {
        let user = {
            gaiyao: Random.cword(14, 16),
            price: Random.integer(100, 500),
        };
        data.push(user);
    }
    return data;
}
// 1-5F随机四张
Mock.mock('/api/home/suijiImg', 'get', suijiImg);
function suijiImg() {
    let data = [];

    for (let i = 0; i < 1; i++) {
        let user =
            ["img/base/cardimg1.jpg",
                "img/base/cardimg2.jpg",
                "img/base/cardimg3.jpg",
                "img/base/cardimg4.jpg",
                "img/base/cardimg5.jpg",
                "img/base/cardimg6.jpg",];
        data = user;
    }
    return data;
}


// 1-5F演出排行
Mock.mock('/api/home/xijudaren/paihang', 'get', xijudarenpaihang);
function xijudarenpaihang() {
    let data = [];
    const Random = Mock.Random;
    const num = Math.floor(Math.random() * 4 + 9);
    for (let i = 0; i < num; i++) {
        let user = {
            id: i + 1,
            paihang: Random.cword(12, 20),
        };
        data.push(user);
    }
    return data;
}
// 1-5F大标题
Mock.mock('/api/home/bigTitle', 'get', bigTitle);
function bigTitle() {
    let data = [];
    for (let i = 0; i < 1; i++) {
        let user = {
            bigTitle: ["戏剧达人", "体育赛事", "舞蹈古典", "儿童亲子", "摇滚在路上"]
        }
        data = user;
    }
    return data;
}
// 1-5F大图
Mock.mock('/api/home/bigImg', 'get', bigImg);
function bigImg() {
    let data = [];
    for (let i = 0; i < 1; i++) {
        let user = ["img/base/big4.jpg", "img/base/big5.jpg", "img/base/big1.jpg", "img/base/big2.jpg", "img/base/big3.jpg"]
        data = user;
    }
    return data;
}

//王军军
//价格随机生成
Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['1', '2', '3'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{2}/) //Number()
    },
    dingdan: function () {
        var phonePrefixs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{8,10}\w{10,12}|\w{5,10}\d{10,15}/) //Number()
    }
})

//精彩请求返回
function babyJing() {
    let data = [];
    for (let i = 0; i < 1; i++) {
        let user = [
            '/img/base/big1.jpg',
            "/img/base/cardimg6.jpg",
            "/img/base/cardimg2.jpg",
            "/img/base/cardimg6.jpg",
            "/img/base/cardimg4.jpg",
            "/img/base/cardimg4.jpg",
            "/img/base/big5.jpg",
            '/img/base/cardimg6.jpg'
        ];
        data = user;
    }
    return data;
}
//选项卡图片请求返回
function babyageImg() {
    let data = [];
    for (let i = 0; i < 1; i++) {
        let user = [
            '/img/base/child3.png',
            "/img/base/child3.png",
            "/img/base/child5.png",
            "/img/base/child5.png",
            "/img/base/child5.png",
            "/img/base/child2.png"
        ];
        data = user;
    }
    return data;
}
//精彩文字信息请求返回
function babyCai() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.ctitle(),
            money: Mock.Random.phone(),
        };
        data.push(user);
    }
    return data;
}
//选项卡文字信息请求
function babyAge() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.ctitle(),
            money: Mock.Random.phone(),
            date: Random.date('yyyy-MM-dd'),
            desc: Random.csentence(),
            adress: Random.city(),
            xiaobiao: Math.floor(Math.random() * 6),
            id: i + 1
        };
        data.push(user);
    }
    return data;
}
//选项卡生成不通的文字信息请求返回
function babyAgeZero() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.ctitle(),
            money: Mock.Random.phone(),
            date: Random.date('yyyy-MM-dd'),
            desc: Random.csentence(),
            adress: Mock.mock('@county(true)'),
            xiaobiao: Math.floor(Math.random() * 6),
            id: i + 1
        };
        data.push(user);
    }
    return data;
}
//热门排行信息请求生成
function babyranking() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 7; i++) {
        let info = {
            title: Random.ctitle(),
            money: Mock.Random.phone(),
            date: Random.date('yyyy-MM-dd'),
            desc: Random.csentence(),
            address: Mock.mock('@county(true)'),
            xiaobiao: i + 1,
            dateTo: Random.date('yyyy-MM-dd')
        }
        data.push(info);
    }
    return data;
}
//热门排行图片请求生成
function babyrankingImg() {
    let data = [];
    for (let i = 0; i < 1; i++) {
        let info = [
            '/img/base/cardimg2.jpg',
            '/img/base/cardimg6.jpg',
            '/img/base/cardimg4.jpg',
            '/img/base/cardimg3.jpg',
            '/img/base/cardimg6.jpg',
            '/img/base/cardimg4.jpg',
            '/img/base/cardimg3.jpg',
        ]
        data = info;
    }
    return data;
}
Mock.mock('/api/babyCai/guress', 'get', babyCai);
Mock.mock('/api/babyCai/jingCai', 'get', babyJing);
Mock.mock('/api/babyCai/ageJson', 'get', babyAge);
Mock.mock('/api/babyCai/ageimg', 'get', babyageImg);
Mock.mock('/api/babyCai/ageJsonzero', 'get', babyAgeZero);
Mock.mock('/api/babyCai/rankinginfo', 'get', babyranking);
Mock.mock('/api/babyCai/rankingImg', 'get', babyrankingImg);
Mock.mock('/api/pay/dingdan', 'get', Mock.Random.dingdan());
// Mock.mock('/api/login', 'post', (option) => {
//     let { userName, passWord } = JSON.parse(option.body);
//     return (userName == "admin", passWord == "123")
// })
//张林照
function Like(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            //字段
            name:Random.csentence(15),
            /*价格*/
            RMB: Random.natural(60,999),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/sport/Like','get',Like)
//图片 Mock
function tebleDat(){
    let abc = [];
    // 生成一个随机对象
    // const Random = Mock.Random;
    let arrImgs = [
        require('../../public/img/base/cardimg1.jpg'),
        require('../../public/img/base/cardimg2.jpg'),
        require('../../public/img/base/big1.jpg'),
        require('../../public/img/base/cardimg4.jpg'),
        require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/cardimg6.jpg'),
    ]
    for(let i = 0 ; i < 6   ; i++){
        let uesr = {
            id:i+1, //每次累加
            imgSrc:arrImgs[i],
        };
        abc.push(uesr);
    }
    return abc;
}
Mock.mock('/api/sport/getDaet','get',tebleDat);
//Tabs切换Mock数据

function Tabs(){
    let abc = [];
    // 生成一个随机对象
    const Random = Mock.Random;
    let arrImgs = [
        // require('../../public/img/base/cardimg1.jpg'),
        // require('../../public/img/base/cardimg2.jpg'),
        // require('../../public/img/base/big1.jpg'),
        // require('../../public/img/base/cardimg4.jpg'),
        // require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/child1.png'),
        require('../../public/img/base/child2.png'),
        require('../../public/img/base/child3.png'),
        require('../../public/img/base/child4.png'),
        require('../../public/img/base/child5.png'),
        require('../../public/img/base/child6.png'),
    ]
    for(let i = 0 ; i < 6   ; i++){
        let uesr = {
            id:i+1, //每次累加
            imgSrc:arrImgs[i],
            name:Random.cword(10),
            city:Random.city(),
            Time:Random.datetime()
        };
        abc.push(uesr);
    }
    return abc;
}
Mock.mock('/api/sport/Tabs','get',Tabs);
function DDTT(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <4; i++) {
        let user = {
            id: i + 1,
            //字段
            name:Random.csentence(10),
            /*价格*/
            RMB: Random.natural(60,999),
            TIME:Random.date('yyyy-MM-dd'),
            DD:Random.natural(6),
            DJ:Random.natural(1,20),
            DL:Random.natural(200,300),
            Gy:"微信支付"
        };
        data.push(user);
    }
    return data;
}
function HOTL(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/cardimg1.jpg",
                "img/base/cardimg2.jpg",
                "img/base/cardimg3.jpg",
                "img/base/cardimg4.jpg",
                "img/base/cardimg5.jpg",
                "img/base/cardimg6.jpg",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/HOTL','get',HOTL)

function tableDate6(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 50),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/HOTX','get',tableDate6)

Mock.mock('/api/MyD/DD','get',DDTT)
// 增删改查数据
function TBS(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <4; i++) {
        let user = {
            id: i + 1,
            //字段
            date:Random.date('yyyy-MM-dd'),
            name:Random.cname(),
            address:Random.county()
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/sport/User','get',TBS)

var Mock = require('mockjs')

// 今日推荐
Mock.mock('/api/home/todayitems', 'get', todayitems);
function todayitems() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.cword(8, 10),
            price: Random.integer(100, 500),
            xiabiao: Random.integer(0, 5)
        };
        data.push(user);
    }
    return data;
}

// 登录
Mock.mock('/api/login', 'post', (option) => {
    let { userName, passWord } = JSON.parse(option.body);
    return (userName == "admin", passWord == "123")
})

// 戏剧达人
Mock.mock('/api/home/xijudaren', 'get', xijudaren);
function xijudaren() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 4; i++) {
        let user = {
            title: Random.cword(8, 10),
            datefrom: Mock.mock('@date("yyyy-MM-dd")'),
            dateto: Mock.mock('@date("yyyy-MM-dd")'),
            address: Mock.mock("@county(true)"),
            price: Random.integer(100, 500),

        };
        data.push(user);
    }
    return data;
}

// 王军军
// 猜你喜欢
Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['1', '2', '3'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{2}/) //Number()
    }
})

function babyCai() {
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 6; i++) {
        let user = {
            title: Random.ctitle(),
            money: Mock.Random.phone(),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/babyCai', 'get', babyCai);

// 耿照凤 
// 猜你喜欢
function tableDate() {
    let data = [];
    const Random = Mock.Random;
    let arrImg = [
        require('../../public/img/base/cardimg1.jpg'),
        require('../../public/img/base/cardimg2.jpg'),
        require('../../public/img/base/cardimg3.jpg'),
        require('../../public/img/base/cardimg4.jpg'),
        require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/cardimg6.jpg'),
    ]
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i + 1,
            imgSrc: arrImg[i],
            name: '小柯音乐剧 我变了我...',
            price: Mock.mock('@integer(100,500)'),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData', 'get', tableDate);


// 耿照凤 
// 猜你喜欢
function tableDate() {
    let data = [];
    const Random = Mock.Random;
    let arrImg = [
        require('../../public/img/base/cardimg1.jpg'),
        require('../../public/img/base/cardimg2.jpg'),
        require('../../public/img/base/cardimg3.jpg'),
        require('../../public/img/base/cardimg4.jpg'),
        require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/cardimg5.jpg'),
        require('../../public/img/base/cardimg6.jpg'),
    ]
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i + 1,
            imgSrc: arrImg[i],
            name: '小柯音乐剧 我变了我...',
            price: Mock.mock('@integer(100,500)'),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData', 'get', tableDate);

// 耿照凤
// 音乐专区  舞蹈专区
function tableDates() {
    let data = [];
    const Random = Mock.Random;
    let arrImgS = [
        require('../../public/img/base/child1.png'),
        require('../../public/img/base/child2.png'),
        require('../../public/img/base/child3.png'),
        require('../../public/img/base/child4.png'),
        require('../../public/img/base/child5.png'),
        require('../../public/img/base/child6.png'),
    ]
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i + 1,
            tupian: arrImgS[i],
            name: '小柯音乐剧未来三部曲之《我变了.我没变》',
            price: Mock.mock('@integer(0,200)'),
            wenzi :'深圳市少年宫剧场',
            date:'2002.11.2-2021.3.30',
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getDataS', 'get', tableDates);

//热门排行
function tableDatq() {
    let data = [];
    const Random = Mock.Random;
    let arrImgS = [
        require('../../public/img/base/cardimg6.jpg'),
        require('../../public/img/base/cardimg4.jpg'),
        require('../../public/img/base/cardimg2.jpg'),
        require('../../public/img/base/cardimg1.jpg'),
        require('../../public/img/base/cardimg2.jpg'),
        require('../../public/img/base/cardimg1.jpg'),
    ]
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i + 1,
            tupian: arrImgS[i],
            date:'2002.11.2-2021.3.30',
            name: '小柯音乐剧未来三部曲之《我变了.我没变》',
            price: Mock.mock('@integer(100,200)'),
            wenzi :'深圳市少年宫剧场'
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/gotData', 'get', tableDatq);

//李曙杰
//猜你喜欢的mock接口
var Mock = require('mockjs')
function tableDate(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            name:Random.csentence(15),
            RMB: Random.natural(60, 1000),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData','get',tableDate)

function tableDate1(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <3; i++) {
        let user = {
            url:[
                "img/qinzi/img_16.png",
                "img/qinzi/img_17.png",
                "img/qinzi/img_18.png",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData1','get',tableDate1)

function tableDate2(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            name:Random.csentence(15),
            RMB: Random.natural(60, 1000),
            url:[
                "img/base/child2.png",
                "img/base/child3.png",
                "img/base/child4.png",
                "img/base/child2.png",
                "img/base/child3.png",
                "img/base/child4.png",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData2','get',tableDate2)

function tableDate5(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/cardimg1.jpg",
                "img/base/cardimg1.jpg",
                "img/base/cardimg1.jpg",
                "img/base/cardimg1.jpg",
                "img/base/cardimg1.jpg",
                "img/base/cardimg1.jpg",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData5','get',tableDate5)

function tableDate6(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData6','get',tableDate6)

function tableDate7(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData7','get',tableDate7)

function tableDate8(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/calendar01.png",
                "img/base/calendar03.png",
                "img/base/calendar01.png",
                "img/base/calendar04.png",
                "img/base/calendar05.png",
                "img/base/calendar06.png",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData8','get',tableDate8)

function tableDate9(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData9','get',tableDate9)

//列表页的数据
//热门推荐图片数据
function tableDate11(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/big1.jpg",
                "img/base/big2.jpg",
                "img/base/big1.jpg",
                "img/base/big4.jpg",
                "img/base/big5.jpg",
                "img/base/big5.jpg",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData11','get',tableDate11)

//热门推荐文字数据
function tableDate12(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData12','get',tableDate12)

//最近开场图片数据
function tableDate13(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/calendar04.png",
                "img//base/calendar05.png",
                "img//base/calendar06.png",
                "img/base/calendar07.png",
                "img/base/calendar08.png",
                "img/base/calendar09.png",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData13','get',tableDate13)

//最近开场文字数据
function tableDate14(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData14','get',tableDate14)

//最新上架图片数据

function tableDate15(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            url:[
                "img/base/child1.png",
                "img//base/child2.png",
                "img//base/child3.png",
                "img/base/child4.png",
                "img/base/child5.png",
                "img/base/child6.png",
            ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData15','get',tableDate15)

//最新上架文字数据

function tableDate16(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <1; i++) {
        let user = {
            id: i + 1,
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData16','get',tableDate16)



//评论数据
function write(){
    let data = [];
    const Random = Mock.Random;
    var ll =["/img/base/hz1.png","/img/base/hz2.png","/img/base/hz3.png","/img/base/hz4.png"]
    for (var i = 0; i <6; i++) {
        var num = Math.floor(Math.random()*5)
        let user = {
            date:Random.date("yyyy-MM-dd"),
            name:Mock.mock("@cword(14, 20)"),
            imgurl:ll[num],
            time:Random.now(),
            txt:Random.float(0,4,1,1),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getwrite','get',write)



