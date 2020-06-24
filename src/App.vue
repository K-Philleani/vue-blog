<template>
  <div id="app">
    <Blog-header :class="{'navBarWrap':navBarFixed}"></Blog-header>
    <router-view/>
  </div>
</template>
<script>
import BlogHeader from './components/bolg-header'
export default {
  components: {
    BlogHeader
  },
  data() {
    return {
      navBarFixed: false
    }
  }
}
</script>

<style lang="less">
.app{
		font-family: "microsoft yahei";
	}
	#content{
		background-color: #f9f9f9;
		padding: 30px 0;
	}
	.navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
    width: 100%;
  }
</style>
