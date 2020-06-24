<template>
  <div class="friend">
    <el-card class="box-card">
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" :src="imgLink" alt="">
        <span>{{$t('friend.friend')}}</span>
        <el-button class="ml-auto" style="padding: 3px 0" type="text">
          <router-link to="/apply" tag="span">{{$t('friend.exchange')}}</router-link>
        </el-button>
      </div>
      <div class="text item">
        <a href="#">xxx的微博</a>
      </div>
      <div class="text item">
        <a href="#">yyy的微博</a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgLink: require('@/assets/lianjie.png')
    }
  }
}
</script>
<style scoped>
  .card-icon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: orange;
  }
</style>