<template>
  <div id="app">
    <Blog-header :class="{'navBarWrap':navBarFixed}" />
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{'minHeight': minHeight + 'px'}">
        <router-view/>
      </el-col>
    </el-row>
    <Blog-footer />
  </div>
</template>
<script>
import BlogHeader from './components/blog-header'
import BlogFooter from './components/blog-footer'
export default {
  components: {
    BlogHeader,
    BlogFooter
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', this.watchScroll)
    window.resize = () => {
      this.minHeight = document.documentElement.clientHeight
    }
  },
  data() {
    return {
      navBarFixed: false,
      minHeight: 0,
    }
  },
  methods: {
    // 吸顶
    watchScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 50) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
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
