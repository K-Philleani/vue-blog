<template>
  <div class="blog-footer">
    <el-main class="main">
      <el-row>
        <el-col :span="8">
          <div>{{$t("footer.expressLane")}}</div>
          <div>
            <a href="#" class="out-look">{{$t("footer.gitee")}}</a>
          </div>
          <div>
            <a href="#" class="out-look">CSDN</a>
          </div>
          <div>
            <a href="#" class="out-look">{{$t("footer.admin")}}</a>
          </div>
        </el-col>
        <el-col :span="8" class="item-col weside">
          <div class="item">
            <i class="el-icon-caret-right"></i>
            本站源自码云 fengziy 对源码进行过改动
          </div>
          <div>
            <i class="el-icon-caret-right"></i>
            fengziy@aliyun.com
          </div>
          <div>
            <i class="el-icon-caret-right"></i>
            © Kphilleani-博客 | 渝ICP备17015355
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style scoped>
  .blog-footer {
    padding: 20px;
    text-align: center;
    color: #fff;
    background-color: #555;
  }
  .main {
    width: 70%;
    margin: 0 auto;
    color: #ccc;
  }
  .out-look {
    text-decoration: none;
    color: #ccc;
  }
  .out-look:hover {
    color: #fff;
  }
  .item-col {
    text-align: left;
  }
  .weside {
    font-size: 14px;
  }
</style>