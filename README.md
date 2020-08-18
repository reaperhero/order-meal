# 无人点菜系统


- api

1. http://a.itying.com/api/productlist

```
{
    "result": [
        {
            "_id": "5ac0896ca880f20358495508",
            "title": "精选热菜",
            "pid": "0",
            "list": [
                {
                    "_id": "5ac1a22011f48140d0002955",
                    "cate_id": "5ac0896ca880f20358495508",
                    "catename": "精选热菜",
                    "title": "娃娃菜炖豆腐",
                    "price": "2",
                    "img_url": "upload\\20180417\\1523969206225.jpg"
                },
                {
                    "_id": "5ac1eb591a6b2f48fcb06210",
                    "cate_id": "5ac0896ca880f20358495508",
                    "catename": "精选热菜",
                    "title": "香酥黄金鱼",
                    "price": "22",
                    "img_url": "upload\\20180417\\1523969277382.jpg"
                },
                {
                    "_id": "5ac1f04bd1bef433a42614cd",
                    "cate_id": "5ac0896ca880f20358495508",
                    "catename": "精选热菜",
                    "title": "猪肉白菜",
                    "price": "25",
                    "img_url": "upload\\20180417\\1523969336562.jpg"
                },
                {
                    "_id": "5ad5ee4018644907b8dd58fa",
                    "cate_id": "5ac0896ca880f20358495508",
                    "catename": "精选热菜",
                    "title": "鲜蔬菌菇粥",
                    "price": "21",
                    "img_url": "upload\\20180417\\1523969600601.jpg"
                }
            ]
        },
        {
            "_id": "5ac089e4a880f20358495509",
            "title": "特色菜",
            "pid": "0",
            "list": [
                {
                    "_id": "5ac1e7e28169fd522c9f5c96",
                    "cate_id": "5ac089e4a880f20358495509",
                    "catename": "小吃零食",
                    "title": "手撕包菜",
                    "price": "67",
                    "img_url": "upload\\20180417\\1523969226807.jpeg"
                },
                {
                    "_id": "5ac2e79b127ca21160ffe32a",
                    "cate_id": "5ac089e4a880f20358495509",
                    "catename": "特色菜",
                    "title": "拍黄瓜",
                    "price": "1",
                    "img_url": "upload\\20180417\\1523969433759.jpg"
                }
            ]
        },
        {
            "_id": "5ac0d726a880f2035849550a",
            "title": "城心小炒",
            "pid": "0",
            "list": [
                {
                    "_id": "5ad5b650c677913cdc50b04b",
                    "cate_id": "5ac0d726a880f2035849550a",
                    "catename": "城心小炒",
                    "title": "凉拌三丝",
                    "price": "1",
                    "img_url": "upload\\20180417\\1523955280626.jpeg"
                }
            ]
        },
        {
            "_id": "5ac1ef07d1bef433a42614cc",
            "title": "田园时蔬",
            "pid": "0",
            "list": [
                {
                    "_id": "5ac1f17d8aebb531f8a01b45",
                    "cate_id": "5ac1ef07d1bef433a42614cc",
                    "catename": "田园时蔬",
                    "title": "八宝酱菜",
                    "price": "76",
                    "img_url": "upload\\20180417\\1523969398170.jpg"
                }
            ]
        },
        {
            "_id": "5ad5bca1e4c24f45a84dbf1a",
            "title": "粗粮主食",
            "pid": "0",
            "list": [
                {
                    "_id": "5ad5ee1c18644907b8dd58f9",
                    "cate_id": "5ad5bca1e4c24f45a84dbf1a",
                    "catename": "粗粮主食",
                    "title": "牛肉馅饼",
                    "price": "24",
                    "img_url": "upload\\20180417\\1523969564844.jpg"
                }
            ]
        },
        {
            "_id": "5add9afb7ec0870a30c42292",
            "title": "最常点的菜",
            "pid": "0",
            "list": []
        }
    ]
}
```
2. http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955

```
{
    "result": [
        {
            "_id": "5ac1a22011f48140d0002955",
            "shop_id": 0,
            "cate_id": "5ac0896ca880f20358495508",
            "catename": "精选热菜",
            "title": "娃娃菜炖豆腐",
            "price": "2",
            "product_bar_code": "6921168550098",
            "num": "10",
            "description": "规格:500ml/瓶",
            "status": "1",
            "is_best": "1",
            "is_hot": "1",
            "content": "<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>",
            "img_url": "upload\\20180417\\1523969206225.jpg",
            "type": "1",
            "sort": "",
            "is_host": 1
        }
    ]
}
```

- run

```
npm install
```


```
npm start
```

