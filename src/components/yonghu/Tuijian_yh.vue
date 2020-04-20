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
              <el-breadcrumb-item>用户</el-breadcrumb-item>
              <el-breadcrumb-item>用户推荐</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="xx_table">
              <el-table
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                :default-sort="{prop: 'xleixing', order: 'descending'}"
              >
                <el-table-column prop="xname" label="学校" sortable width="180"></el-table-column>
                <el-table-column prop="xdiqu" label="地区" sortable width="180"></el-table-column>
                <el-table-column prop="xleixing" label="类型" sortable width="180"></el-table-column>
                <el-table-column prop="xwenke" label="文科" sortable width="180"></el-table-column>
                <el-table-column prop="xlike" label="理科" sortable :formatter="formatter"></el-table-column>
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
      opf: { op: ['2'], opa: '/tuijian_yh' },
      tableData: [
        {
          xname: '四川理工',
          xleixing: '二批',
          xdiqu: 'sc',
          xwenke: '100-500',
          xlike: '200-700'
        }
      ],
      userData: {
        empUser: '',
        empPass: '',
        role: '',
        wenli: '',
        fenshu: ''
      },
      xxUrl: '/select_xuexiao_lifen'
    }
  },
  mounted () {
    this.addData()
    this.updataCard()
  },
  methods: {
    formatter (row, column) {
      return row.xlike
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    addData () {
      const _this = this
      _this.userData.empUser = window.sessionStorage.getItem('empUser')
      _this.userData.empPass = window.sessionStorage.getItem('empPass')
      _this.userData.role = window.sessionStorage.getItem('role')
      _this.userData.wenli = window.sessionStorage.getItem('wenli')
      _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
      if (_this.userData.wenli === '文科') {
        _this.xxUrl = '/select_xuexiao_wenfen'
      } else {
        _this.xxUrl = '/select_xuexiao_lifen'
      }
    },
    updataCard  () {
      const _this = this
      this.$axios({
        method: 'post',
        url: _this.xxUrl,
        data: _this.userData.fenshu
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
/* main */
.xx_table {
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
