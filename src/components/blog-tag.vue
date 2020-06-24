<template>
  <div class="side">
    <el-card>
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" src="../assets/biaoqian.png" />
        <span>{{$t('tag.tag')}}</span>
      </div>
      <div class="item">
        <el-tag type="success" size="mini" class="tag-item" @click="tag('java')">Java [20]</el-tag>
        <el-tag type="info" size="mini" class="tag-item" @click="tag('SpringBoot')">SpringBoot [12]</el-tag>
        <el-tag type="success" size="mini" class="tag-item" @click="tag('MyBatis')">MyBatis [7]</el-tag>
        <el-tag type="warning" size="mini" class="tag-item" @click="tag('SpringCloud')">SpringCloud [30]</el-tag>
        <el-tag type="danger" size="mini" class="tag-item" @click="tag('Vue')">Vue [10]</el-tag>
        <el-tag type="success" size="mini" class="tag-item" @click="tag('React')">React [20]</el-tag>
        <el-tag type="info" size="mini" class="tag-item" @click="tag('Angular')">Angular [3]</el-tag>
        <el-tag type="danger" size="mini" class="tag-item" @click="tag('JavaScript')">JavaScript [22]</el-tag>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    tag(name) {
      this.$router.push({
        name: 'tag',
        params: {
          'name': name
        }
      })
    }
  }
}
</script>
<style scoped>
  .side {
    margin-bottom: 50px;
  }
  .box-card .item:hover {
		color: #409EFF;
		cursor: pointer;
	}
	
	.box-card span {
		font-weight: bold;
	}
	
	.card-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	
	.tag-item {
    margin: 5px 10px;
	}
</style>