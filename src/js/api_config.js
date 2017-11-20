const domain='http://vue.studyit.io/api';

export default {
    //获取轮播图接口
    getLunbo:`${domain}/getLunbo`,

    //获取新闻列表接口
    getNL:`${domain}/getnewslist`,
    getND:`${domain}/getnew/`,

    //获取图片列表接口
    //分类
    photoC:`${domain}/getimgcategory/`,
    //图片列表
    photoL:`${domain}/getimages/`,
    //图片详情
    photoD:`${domain}/getimageinfo/`,
    //缩略图
    photoT:`${domain}/getthumimages/`,

    //商品列表
    goodsL:`${domain}/getgoods/`,
    goodsD:`${domain}/goods/getdesc`,
    goodsT: `${domain}/getthumimages/`,     // 该接口后面需要一个商品id: /getthumimages/:id
    goodsP: `${domain}/getinfo/`,
}