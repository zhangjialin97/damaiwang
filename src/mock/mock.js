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
Mock.mock('/api/login', 'post', (option) => {
    let { userName, passWord } = JSON.parse(option.body);
    return (userName == "admin", passWord == "123")
})

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

// 王军军
//价格随机生成
Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['1', '2', '3'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{2}/) //Number()
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
// Mock.mock('/api/login', 'post', (option) => {
//     let { userName, passWord } = JSON.parse(option.body);
//     return (userName == "admin", passWord == "123")
// })