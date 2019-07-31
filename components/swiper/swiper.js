// components/swiper/swiper.js
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
      autoplay:true,
      current:0,
      interval:6000,
      duration:500,
      circular:true,
      indicatorDots:true,
      indicatorColor:"#eee",
      ndicatorActiveCcolor:"#ffbe00",
      skipHiddenItemlayout:true
    },
    images:[
      {
        id:"1",
        src:"../../dist/images/image/1.jpeg",
        title:"111",
        url:""
      },
      {
        id: "2",
        src: "../../dist/images/image/2.jpg",
        title: "22222",
        url: ""
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
