/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
  <div class="index_container">
    <!-- 总容器 -->
    <el-container>
      <!-- header -->
      <el-header height="150px">
        <Header />
      </el-header>
      <!-- 侧栏容器 -->
      <el-container>
        <el-aside width="200px">
          <AsideMenu :op="opf" />
          <!--把本组件data里的opf，传给子组件props里的op-->
        </el-aside>
        <!-- main -->
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>帮助</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="hp_main">
              <el-image style="width: 800px; height: 400px;margin-top:100px;margin-left:100px" :src="url" :fit="fit"></el-image>
            </div>
          </el-main>
          <!-- footer -->
          <el-footer height="150px">
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import Header from './all_com/Header'
import Footer from './all_com/Footer'
import AsideMenu from './all_com/AsideMenu'
export default {
  data () {
    return {
      input: '',
      select: '',
      opf: { op: [], opa: '/help' },
      url: require('../assets/pic/hp.png'),
      fit: 'fill'
    }
  },
  components: { Header, Footer, AsideMenu }
}
</script>

<style>
/* main */
.hp_main{
  width: 1100px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
}
/* all */
.index_container {
  width: 1400px;
  margin: 0 auto;
}
/* header yonghu */
.yonghuxinxi_container {
  width: 150px;
  height: 150px;
}
.denglu,
.tuichu {
  width: 50%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  float: left;
}
.touxiang {
  width: 90px;
  height: 90px;
  margin-left: 30px;
  float: left;
  border-radius: 50%;
}
.yonghuming {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
/* 基本总体element框架 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 150px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* header row style */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
