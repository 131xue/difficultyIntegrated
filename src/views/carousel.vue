<template>
  <div class="carousel_container">
    <div class="carousel_wrapper">
      <div class="left_container">
        <div class="carousel_item">
          <div class="item_content">
            <span>自定义轮播</span>
          </div>
          <div class="item_icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="right_container">

      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'carousel',
    data(){
      return {
       msg:'carousel'
      }
    }
  }
</script>
<style slot="scope">
  .carousel_container{
    margin-top: 2px;
  }
  .carousel_wrapper{
    width: 100%;
    height: 500px;
    display: flex;
  }
  .left_container{
    display: block;
    width: 250px;
    height: 500px;
    border-right: 1px solid rgba(0,0,0,0.3);
    /*border: 1px solid gray;*/
  }
  .carousel_item{
    width: 250px;
    height: 40px;
    background: rgba(0,0,0,0.3);
  }
  .item_content{
    width: 200px;
    height: 40px;
    line-height: 40px;
    float: left;
  }
  .item_icon{
    width: 50px;
    height: 40px;
    line-height: 40px;
    float: right;
  }
  .right_container{
    width: calc(100% - 250px);
    height: 500px;
    background: rgba(0,0,0,0.1);
    float: right;
  }
</style>
