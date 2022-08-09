<template>
  <div class="carousel_container">
    <div class="carousel_wrapper">
      <div class="left_container">
        <div v-for="item in carouselList"
             @click="activeItem(item.id)"
             :class="[item.id == curId ? 'active_carousel':'','carousel_item']">
          <div class="item_content">
            <span>{{item.name}}</span>
          </div>
          <div class="item_icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="right_container">
        <div v-if="curId == 1">
          <div class="one_container_wrapper">
            <div class="one_container">
              <button type="button" @click="leftClick" class="left_carousel_arrow arrow_group">
                <i class="el-icon-arrow-left"></i>
              </button>
              <div v-if="viewVisible">
                <img :src="url" class="carousel_img"/>
              </div>
              <button type="button" @click="rightClick" class="right_carousel_arrow arrow_group">
                <i class="el-icon-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
        <div v-else>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'carousel',
    data(){
      return {
       msg:'carousel',
       curId:1,
       index:0,
        viewVisible:true,
       carouselList:[
         {id:1,name:'单张轮播'},
         {id:2,name:'多张轮播'}
       ],
       imgList:[
         {id:1,url:require('@/assets/imgs/carousel/1.jpg')},
         {id:2,url:require('@/assets/imgs/carousel/2.jpg')},
         {id:3,url:require('@/assets/imgs/carousel/3.jpg')},
         {id:4,url:require('@/assets/imgs/carousel/4.jpg')},
       ],
      }
    },
    created(){
      this.url = this.imgList[this.index].url
    },
    methods:{
      activeItem(id){
        this.curId = id
      },
      leftClick(){
        if(this.index>0){
          this.viewVisible = false
          this.index --
          this.url = this.imgList[this.index].url
          this.$nextTick(()=>{
            this.viewVisible = true
          })
        }
      },
      rightClick(){
        if(this.index<this.imgList.length-1){
          this.viewVisible = false
          this.index ++
          this.url = this.imgList[this.index].url
          this.$nextTick(()=>{
            this.viewVisible = true
          })

        }
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
  }
  .carousel_item{
    width: 250px;
    height: 40px;
    cursor: pointer;
  }
  .active_carousel{
    background: rgba(31,45,61,.20);
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
  .one_container_wrapper{
    width: 440px;
    height: 250px;
    margin: 0 auto;
  }
  .one_container{
    /*一个绝对定位的元素，如果父辈元素中也出现了已定位
    （无论是绝对定位、相对定位，还是固定定位）的元素，
    那么将以父辈这个元素，为参考点。*/
    position: relative;
    width: 440px;
    height: 250px;
    float: left;
    overflow: hidden;
    transition: all .5s;
  }
  .arrow_group{
    position: absolute;
    border:none;
    outline: none;
    height: 36px;
    width: 36px;
    cursor: pointer;
    background-color: rgba(31,45,61,.20);
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: all .5s;
  }
  .carousel_img{
    background-size: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    transition: all .5s;
  }
  .left_carousel_arrow{
    left:-10%;
    z-index: 99;
  }
  .right_carousel_arrow{
    right:-10%;
  }
  .left_carousel_arrow:hover,.right_carousel_arrow:hover{
    background-color: rgba(31,45,61,.40);
  }
  .one_container:hover .left_carousel_arrow{
    left: 2%;
    z-index: 99;
  }
  .one_container:hover .right_carousel_arrow{
    right: 2%;
    z-index: 99;
  }
</style>
