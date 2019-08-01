// components/main/main.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    options:{
      scrollX:true,
      upperThreshold:30,
      scrollWithAnimation:true,
      enableBackToTop:true,
    },
    //一个楼梯的数据
    tablesList:[
      {
        id:'1',
        images:'../../dist/images/tables/1.png',
        alt:'banner图',
        url:'pages/cat/index',
        title:'众筹集采',
        icons:'../../dist/images/icon/zan.png',
        lists:[
          {
            id:'1',
            img:'../../dist/images/tables/11.jpg',
            name:'豆浆机',
            title:'这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置这是一个小的豆浆机，非常好用，非常牛叉的一个小装置',
            pay:'10.00',
            cun:'200+',
            urlHref:'pages/cat/index'
          },
          {
            id: '2',
            img: '../../dist/images/tables/22.png',
            name:'空调',
            title: '美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调美的小空调',
            pay: '1000.00',
            cun: '20+',
            urlHref: 'pages/cat/index'
          }
        ]
      },
      {
        id: '1',
        images: '../../dist/images/tables/2.jpg',
        alt: 'banner图',
        url: 'pages/cat/index',
        title: '众筹集采',
        icons: '../../dist/images/icon/zan.png',
        lists: [
          {
            id: '1',
            img: '../../dist/images/tables/11.jpg',
            name: '豆浆机',
            title: '这是一个小的豆浆机，非常好用，非常牛叉的一个小装置',
            pay: '10.00',
            cun: '200+',
            urlHref: 'pages/cat/index'
          },
          {
            id: '2',
            img: '../../dist/images/tables/22.png',
            name: '空调',
            title: '美的小空调',
            pay: '1000.00',
            cun: '20+',
            urlHref: 'pages/cat/index'
          }
        ]
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
