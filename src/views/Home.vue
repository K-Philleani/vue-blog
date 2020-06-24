<template>
  <div>
     <el-row type="flex" justify="space-round">
        <el-col :span="16">
          <div v-for="item in 5" :key="item">
            <Blog-content />
          </div>
          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :total="50"
            >
            </el-pagination>
          </div>
        </el-col>
        <el-col 
          :span="6" 
          class="hidden-sm-and-down" 
          :style="{marginLeft: '70px'}">
          <div>
            <Tag />
          </div>
          <div>
            <Friend />
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import BlogContent from '../components/blog-content'
import Tag from '../components/blog-tag'
import Friend from '../components/blog-friend'
export default {
  components: {
    BlogContent,
    Tag,
    Friend
  },
  data() {
    return {
      tagImg: require('@/assets/tag.png'),
      imgVue: require('@/assets/vue.jpg')
    }
  }  
}
</script>
<style scoped>
  .pagination {
    background-color: #F9F9F9;
  }
  
</style>
