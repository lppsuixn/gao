muban.海螺3.二级.title = '.hl-dc-title&&Text;.hl-data-xs&&Text';
muban.海螺3.二级.desc = 'li.hl-col-xs-12:eq(1)&&Text;;;li.hl-col-xs-12--em:eq(2)&&Text;li.hl-col-xs-12--em:eq(3)&&Text';
var rule={
    title:'飞兔影视',
    host:'https://www.feitu.tv',
    模板:'海螺3',
    // url:'/filter/fyclass/page/fypage/',
	url:'/filter/fyfilter/',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}/page/fypage{{fl.year}}',
    filter: {
        "1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"冒险","v":"20"},{"n":"剧情","v":"11"},{"n":"动作","v":"6"},{"n":"科幻","v":"9"},{"n":"动画电影","v":"21"},{"n":"喜剧","v":"7"},{"n":"爱情","v":"8"},{"n":"战争","v":"12"},{"n":"恐怖","v":"10"},{"n":"犯罪","v":"28"},{"n":"惊悚","v":"25"},{"n":"经典","v":"29"},{"n":"悬疑","v":"24"},{"n":"奇幻","v":"23"},{"n":"同性","v":"22"},{"n":"灾难","v":"27"},{"n":"网络电影","v":"30"},{"n":"歌舞","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"欧美","v":"/area/欧美"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"泰国","v":"/area/泰国"},{"n":"新马","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"欧美剧","v":"16"},{"n":"港剧","v":"14"},{"n":"日剧","v":"15"},{"n":"韩剧","v":"31"},{"n":"台剧","v":"33"},{"n":"泰剧","v":"32"},{"n":"新马剧","v":"34"},{"n":"其它剧","v":"35"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"39"},{"n":"韩国综艺","v":"38"},{"n":"欧美综艺","v":"36"},{"n":"日本综艺","v":"37"},{"n":"港台综艺","v":"41"},{"n":"其它综艺","v":"42"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"欧美动漫","v":"43"},{"n":"日本动漫","v":"44"},{"n":"国产动漫","v":"45"},{"n":"港台动漫","v":"48"},{"n":"韩国动漫","v":"46"},{"n":"其它动漫","v":"49"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "52":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"52"},{"n":"国产情色","v":"53"},{"n":"巨乳美乳","v":"62"},{"n":"制服诱惑","v":"63"},{"n":"欧美极品","v":"57"},{"n":"自拍偷拍","v":"66"},{"n":"AI换脸","v":"67"},{"n":"萌妹萝莉","v":"70"},{"n":"国产主播","v":"61"},{"n":"情色乱伦","v":"59"},{"n":"变态另类","v":"60"},{"n":"动漫精品","v":"58"},{"n":"中文字幕","v":"56"},{"n":"熟女人妻","v":"64"},{"n":"三级伦理","v":"65"},{"n":"海外明星","v":"68"},{"n":"日本无码","v":"54"},{"n":"福利视频","v":"69"},{"n":"日本有码","v":"55"},{"n":"女同性恋","v":"72"},{"n":"人妖系列","v":"73"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "51":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"欧美","v":"/area/欧美"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"泰国","v":"/area/泰国"},{"n":"新马","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "50":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"欧美","v":"/area/欧美"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"泰国","v":"/area/泰国"},{"n":"新马","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
    },
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		52:{cateId:'52'},
		51:{cateId:'51'},
		50:{cateId:'50'}
	},
    searchUrl:'/search/**-fypage/',
	class_parse: 'body&&.hl-nav li:gt(0);a&&Text;a&&href;.*/(\\d+)/',
    cate_exclude:'成人影院',
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        } else {
            input
        }
    `,
}
