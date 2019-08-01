// components/tables/table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultMessage:{
      type:Object,
      value:"",
      observer(newval,oldval){
        console.log(newval,oldval);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:{},
  },
  //初始化方法
  ready(){
    console.log(this.tableMessage);
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
