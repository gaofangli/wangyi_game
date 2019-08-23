function getGlobalNews(){
      var  _news = [],
            _num = Math.floor(Math.random()*2);

		_news.push({KindShortName:'三石精选',
			ShortTitle:'网易考拉618福利，免费领红卡会员！',
			NewsUrl:'https://pages.kaola.com/pages/activity/069206b011ff48eb9ea883d15531aeda.shtml?tag=fcffdc502dc282756478d8592d7085fa&__da_694f3a5f_5ad4fde77cf92c00',
                        ImageUrl:'https://nie.res.netease.com/r/pic/20190606/c3757cc8-0fa9-4f7d-b964-905125d2a3d9.jpg',
			ShowTime:'2019-06-14'})
_news.push({KindShortName:'三石精选',
			ShortTitle:'网易严选还原端午味，低至9.9元！',
			NewsUrl:'http://u.163.com/a/UP9ej51H',
                        ImageUrl:'https://nie.res.netease.com/r/pic/20190522/7a6ad2c8-8b18-41a7-9325-5ba7ee4a700e.jpg',
			ShowTime:'2019-05-22'})




	return _news[Math.floor(Math.random()*_news.length)]
  }