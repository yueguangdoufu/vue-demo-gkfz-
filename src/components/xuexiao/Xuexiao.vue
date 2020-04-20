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
              <el-breadcrumb-item>学校</el-breadcrumb-item>
              <el-breadcrumb-item>学校信息</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="xx_sousuo">
              <el-input placeholder="请输入内容" v-model="input" class="searchClass" ref="input1" @keyup.enter.native="searchClick">
                <div slot="prepend">
                  <div class="centerClass">
                    <el-select v-model="select" placeholder="请选择" style="width: 90px" @change="optionChange">
                      <el-option label="学校" value="1"></el-option>
                      <el-option label="地区" value="2"></el-option>
                      <el-option label="类型" value="3"></el-option>
                      <el-option label="文分" value="4"></el-option>
                      <el-option label="理分" value="5"></el-option>
                    </el-select>
                  </div>
                  <div class="centerClass">
                    <div class="line"></div>
                  </div>
                </div>
                <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
              </el-input>
            </div>
            <div class="xx_table">
              <el-table
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
              >
                <el-table-column prop="xname" label="学校" sortable width="180"></el-table-column>
                <el-table-column prop="xleixing" label="类型" sortable width="180"></el-table-column>
                <el-table-column prop="xwenke" label="文科" sortable width="180"></el-table-column>
                <el-table-column prop="xlike" label="理科" sortable width="180"></el-table-column>
                <el-table-column prop="xdiqu" label="地区" sortable :formatter="formatter"></el-table-column>
              </el-table>
              <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :page-sizes="[10]"
                :total="tableData.length"
                :current-page="currentPage"
                :page-size="pagesize"
                @current-change="handleCurrentChange"
              ></el-pagination>
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
import Header from '../all_com/Header'
import Footer from '../all_com/Footer'
import AsideMenu from '../all_com/AsideMenu'
export default {
  data () {
    return {
      input: '',
      select: '',
      currentPage: 1,
      pageSize: 10,
      opf: { op: ['1'], opa: '/xuexiao' },
      tableData: [
        {
          xname: '四川理工',
          xleixing: '二批',
          xdiqu: '四川',
          xwenke: '100-500',
          xlike: '200-700'
        }
      ],
      searchUrls: [
        '/select_xuexiao_name', '/select_xuexiao_diqu', '/select_xuexiao_leixing', '/select_xuexiao_wenfen',
        '/select_xuexiao_lifen'
      ],
      searchUrl: '/select_xuexiao_name',
      inputValue: ''
    }
  },
  mounted () {
    this.updataCard()
  },
  methods: {
    formatter (row, column) {
      return row.xdiqu
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    optionChange (selVal) {
      var j = parseInt(selVal)
      this.searchUrl = this.searchUrls[j - 1]
      // console.log(this.searchUrl)
    },
    searchClick () {
      const _this = this
      _this.inputValue = _this.$refs.input1.value
      var inpV = encodeURIComponent(_this.inputValue)
      // console.log(_this.inputValue)
      this.$axios({
        method: 'post',
        url: _this.searchUrl,
        contentType: 'application/json;charset=UTF-8',
        data: inpV
      })
        .then(response => {
          _this.tableData = response.data
          for (var i = 0; i < _this.tableData.length; i++) {
            _this.tableData[i].xwenke = _this.tableData[i].xwenke.substr(31, 7)
            _this.tableData[i].xlike = _this.tableData[i].xlike.substr(31, 7)
          }
          // console.log(_this.tableData[0].xdiqu)
        })
        .catch(error => {
          console.log(error)
        })
      // console.log(this.$refs.input1.value)
    },
    updataCard  () {
      const _this = this
      this.$axios({
        method: 'get',
        url: '/select_xuexiao',
        data: {}
      })
        .then(response => {
          _this.tableData = response.data
          for (var i = 0; i < _this.tableData.length; i++) {
            _this.tableData[i].xwenke = _this.tableData[i].xwenke.substr(31, 7)
            _this.tableData[i].xlike = _this.tableData[i].xlike.substr(31, 7)
          }
          // console.log(_this.tableData[0].xdiqu)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: { Header, Footer, AsideMenu }
}
</script>

<style>
/* sousuo */
.searchClass {
  border: 1px solid #c5c5c5;
  border-radius: 20px;
  background: #f4f4f4;
}
.searchClass .el-input-group__prepend {
  border: none;
  background-color: transparent;
  padding: 0 10px 0 30px;
}
.searchClass .el-input-group__append {
  border: none;
  background-color: transparent;
}
.searchClass .el-input__inner {
  height: 36px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchClass .el-icon-search {
  font-size: 16px;
}
.searchClass .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.searchClass .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
.searchClass:hover {
  border: 1px solid #d5e3e8;
  background: #fff;
}
.searchClass:hover .line {
  background-color: #d5e3e8;
}
.searchClass:hover .el-icon-search {
  color: #409eff;
  font-size: 16px;
}
/* main */
.xx_table {
  margin-top: 0px;
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
