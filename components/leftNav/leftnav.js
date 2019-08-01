// components/leftNav/leftnav.js
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
      listNav:[
        {
          id:'0',
          title:'--热销推荐--'
        },
        {
          id: '1',
          title: '空调'
        },
        {
          id: '2',
          title: '冰箱'
        },
        {
          id: '3',
          title: '彩电'
        },
        {
          id: '4',
          title: '橱柜'
        },
        {
          id: '5',
          title: '小家电'
        },
        {
          id: '6',
          title: '护理'
        },
        {
          id: '7',
          title: '手机'
        },
        {
          id: '8',
          title: '汽车'
        }, {
          id: '9',
          title: '玩具'
        }
      ],
      tagClass:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tables(e){
      let tag = e.currentTarget.dataset.keys;
      if(tag != 0){
        this.setData({
          tagClass: tag
        })
        this.triggerEvent("passValue", {
          pValue: tag
        });
      }
    }
  }
})
