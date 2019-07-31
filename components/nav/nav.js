// components/nav/nav.js
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
    navLists:[
      {
        id:'1',
        title:'小家电',
        url:"/pages/homes/home",
        imgSrc:"../../dist/images/nav/1.png"
      },
      {
        id: '2',
        title: '家电慧',
        url: 'javascript:',
        imgSrc: "../../dist/images/nav/2.png"
      },
      {
        id: '3',
        title: '全网比价',
        url: 'javascript:',
        imgSrc: "../../dist/images/nav/3.png"
      },
      {
        id: '4',
        title: '冰洗',
        url: 'javascript:',
        imgSrc: "../../dist/images/nav/4.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击跳转
    taburl:function(e){
      console.log(e);
      let url = e.currentTarget.dataset["url"];
      wx.navigateTo({
        url: url,
      })
    }
  }
})
