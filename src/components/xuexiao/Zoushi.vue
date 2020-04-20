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
              <el-breadcrumb-item>分数走势</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="zs_sousuo">
              <el-input placeholder="请输入内容" v-model="input" class="searchClass" ref="input1" @keyup.enter.native="searchClick">
                <div slot="prepend">
                  <div class="centerClass">
                    <el-select v-model="select" placeholder="请选择" style="width: 90px" @change="optionChange">
                      <el-option label="学校" value="1"></el-option>
                    </el-select>
                  </div>
                  <div class="centerClass">
                    <div class="line"></div>
                  </div>
                </div>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="zs_tu">
              <div id="myChart3"></div>
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
      opf: { op: ['1'], opa: '/zoushi' },
      tableData: [{
        xname: '乐山师范学院',
        li17low: 100,
        li17high: 200,
        li18low: 100,
        li18high: 200,
        li19low: 100,
        li19high: 200,
        wen17low: 100,
        wen17high: 200,
        wen18low: 100,
        wen18high: 200,
        wen19low: 100,
        wen19high: 200
      }],
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
    drawLine () {
      var echarts = require('echarts')

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('myChart3'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.tableData[0].xname
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['文科低分', '文科高分', '理科低分', '理科高分']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2017', '2018', '2019']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '文科低分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[0].wen17low, this.tableData[0].wen18low, this.tableData[0].wen19low]
          },
          {
            name: '文科高分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[0].wen17high, this.tableData[0].wen18high, this.tableData[0].wen19high]
          },
          {
            name: '理科低分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[0].li17low, this.tableData[0].li18low, this.tableData[0].li19low]
          },
          {
            name: '理科高分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[0].li17high, this.tableData[0].li18high, this.tableData[0].li19high]
          }
        ]
      })
      // console.log(this.tableData[0].li17low)
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
          _this.tableData[0].xname = response.data[0].xname
          _this.tableData[0].li17low = parseInt(response.data[0].xlike.substr(5, 3))
          _this.tableData[0].li17high = parseInt(response.data[0].xlike.substr(9, 3))
          _this.tableData[0].li18low = parseInt(response.data[0].xlike.substr(18, 3))
          _this.tableData[0].li18high = parseInt(response.data[0].xlike.substr(22, 3))
          _this.tableData[0].li19low = parseInt(response.data[0].xlike.substr(31, 3))
          _this.tableData[0].li19high = parseInt(response.data[0].xlike.substr(35, 3))
          _this.tableData[0].wen17low = parseInt(response.data[0].xlike.substr(5, 3))
          _this.tableData[0].wen17high = parseInt(response.data[0].xlike.substr(9, 3))
          _this.tableData[0].wen18low = parseInt(response.data[0].xlike.substr(18, 3))
          _this.tableData[0].wen18high = parseInt(response.data[0].xlike.substr(22, 3))
          _this.tableData[0].wen19low = parseInt(response.data[0].xlike.substr(31, 3))
          _this.tableData[0].wen19high = parseInt(response.data[0].xlike.substr(35, 3))
          this.drawLine()
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
          _this.tableData[0].xname = response.data[0].xname
          _this.tableData[0].li17low = parseInt(response.data[0].xlike.substr(5, 3))
          _this.tableData[0].li17high = parseInt(response.data[0].xlike.substr(9, 3))
          _this.tableData[0].li18low = parseInt(response.data[0].xlike.substr(18, 3))
          _this.tableData[0].li18high = parseInt(response.data[0].xlike.substr(22, 3))
          _this.tableData[0].li19low = parseInt(response.data[0].xlike.substr(31, 3))
          _this.tableData[0].li19high = parseInt(response.data[0].xlike.substr(35, 3))
          _this.tableData[0].wen17low = parseInt(response.data[0].xlike.substr(5, 3))
          _this.tableData[0].wen17high = parseInt(response.data[0].xlike.substr(9, 3))
          _this.tableData[0].wen18low = parseInt(response.data[0].xlike.substr(18, 3))
          _this.tableData[0].wen18high = parseInt(response.data[0].xlike.substr(22, 3))
          _this.tableData[0].wen19low = parseInt(response.data[0].xlike.substr(31, 3))
          _this.tableData[0].wen19high = parseInt(response.data[0].xlike.substr(35, 3))
          this.drawLine()
          // console.log(_this.tableData[0])
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
/* huizhi */
.zs_tu{
  width: 1100px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  float: left;
}
#myChart3{
  width: 800px;
  height: 400px;
  float: left;
  padding-left: 100px;
  margin-top: 90px;
  margin-bottom: 60px;
}
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
