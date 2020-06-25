<template>
  <div>
    <el-menu 
      class="d-flex" 
      mode="horizontal" 
      :default-active="activeIndex" 
      :router="true" type="flex"
    >
      <el-menu-item class="mr-auto">
        <router-link to="/" class="link">Kphilleani</router-link>
      </el-menu-item>
      <el-menu-item index="/home">{{$t("header.home")}}</el-menu-item>
      <el-menu-item index="/archive">{{$t("header.archive")}}</el-menu-item>
      <el-menu-item index="/about">{{$t("header.about")}}</el-menu-item>
      <el-submenu index="">
        <template slot="title">{{$t("header.language")}}</template>
        <el-menu-item @click="toggleLang('zh')">{{$t("header.chinese")}}</el-menu-item>
        <el-menu-item @click="toggleLang('en')">{{$t("header.english")}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  mounted() {
    this.urlActive()
  },
  data() {
    return {
      activeIndex: this.$route.path
    }
  },
  methods: {
    urlActive() {
      this.activeIndex = '/home'
      this.$router.push('/home')    
    },
    toggleLang(lang) {
				if(lang === 'zh') {
          this.$store.commit({
            type: 'changeLocale',
            lang: 'zh'
          })
					this.$i18n.locale = this.$store.state.locale
					this.$message({
						message: '切换为中文！',
						type: 'success'
					})
				} else if(lang === 'en') {
           this.$store.commit({
            type: 'changeLocale',
            lang: 'en'
          })
					this.$i18n.locale = this.$store.state.locale
					this.$message({
						message: 'Switch to English!',
						type: 'success'
					})
				}
			}
  }
}
</script>
<style scoped>
.link {
  text-decoration: none;
}
</style>