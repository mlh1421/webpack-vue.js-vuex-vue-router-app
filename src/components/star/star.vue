<template>
  <div class="star">
    <span v-for="itemClass in itemsClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  import style from './style.less'
  const LENGTH=5
  const CLS_ON='on'
  const CLS_HALF='half'
  const CLS_OFF='off'
  export default{
//    props:{     //对象写法
//      size:{
//        type:Number
//      },
//      score:{
//        type:Number
//      }
//    },
    props:['size','score'],     //一样的效果数组写法
    computed:{
      starType:function () {
        return 'star-'+this.size;
      },
      itemsClasses:function () {
        let result=[];
        let score=Math.floor(this.score*2)/2;//向下0.5倍取整
        let hasDecimal=score%1!==0;
        let integer=Math.floor(score);
        for(let i=0;i<integer;i++){
          result.push(CLS_ON);
        }
        if(hasDecimal){
          result.push(CLS_HALF);
        }
        while(result.length<LENGTH){
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>

<style lang="less">
</style>
