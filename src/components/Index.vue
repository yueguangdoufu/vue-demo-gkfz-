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
          <AsideMenu :op="opf"/>
        </el-aside>
        <!-- main -->
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="ind_main_all">
              <div class="main_left">
                <div class="zouma">
                  <el-carousel height="350px">
                    <el-carousel-item v-for="(item,index) in zmurl" :key="index">
                      <a :href="item.link"><img :src="item.src"/></a>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="tiaozhuan">
                  <a v-for="(item,index) in url"
                    :key="index" :href="item.link"><img
                    class="tz_xuanxiang"
                    :src="item.src"
                    @click="tzClick(index)"
                  /></a>
                </div>
                <div class="qushi">
                  <div class="qs_tou">
                    <el-link
                      style="font-size: 20px"
                      :underline="false"
                      :href='zsUrl'
                      target="_blank"
                    >趋势图</el-link>
                  </div>
                  <div class="qs_tu">
                    <div id="myChart1"></div>
                    <div id="myChart2"></div>
                  </div>
                </div>
                <div class="zhuanti">
                  <div class="zt_tou">
                    <el-link
                      style="font-size: 20px"
                      :underline="false"
                      target="_blank"
                    >专题</el-link>
                  </div>
                  <div class="zt_list">
                    <ul>
                      <li>
                        <span class="sort hot">1</span>
                        <a
                          title="教育部拟同意2所独立学院转设为民办本科学校"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76367.html"
                        >教育部拟同意2所独立学院转设为民办本科学校</a>
                      </li>
                      <li>
                        <span class="sort hot">2</span>
                        <a
                          title="国务院常务会议 部署深入推进“放管服”改革 培育壮大新动能促进稳就业"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76299.html"
                        >国务院常务会议 部署深入推进“放管服”改革 培育壮大新动能促进稳就业</a>
                      </li>
                      <li>
                        <span class="sort hot">3</span>
                        <a
                          title="2020年“国培计划”助力打赢疫情阻击战和脱贫攻坚战"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76297.html"
                        >2020年“国培计划”助力打赢疫情阻击战和脱贫攻坚战</a>
                      </li>
                      <li>
                        <span class="sort no">4</span>
                        <a
                          title="《关于应对新冠肺炎疫情影响做好事业单位公开招聘高校毕业生工作的通知》答记者问"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76275.html"
                        >《关于应对新冠肺炎疫情影响做好事业单位公开招聘高校毕业生工作的通知》答记者问</a>
                      </li>
                      <li>
                        <span class="sort no">5</span>
                        <a
                          title="教育部关于加强“三个课堂”应用的指导意见"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76247.html"
                        >教育部关于加强“三个课堂”应用的指导意见</a>
                      </li>
                      <li>
                        <span class="sort no">6</span>
                        <a
                          title="教育部关于批准2019年下半年中外合作办学项目的通知"
                          target="_blank"
                          href="https://www.youzy.cn/news/article-76240.html"
                        >教育部关于批准2019年下半年中外合作办学项目的通知</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lianjie">
                  <div class="lj_tou">
                    <el-link
                      style="font-size: 20px; color: #606266"
                      :underline="false"
                      href
                      target="_blank"
                      disabled="true"
                    >友情链接</el-link>
                  </div>
                  <div class="lj_list">
                    <ul class="lj_ul">
                      <li>
                        <a href="http://sz.houxue.com/" title="厚学网" target="_blank">厚学网</a>
                      </li>

                      <li>
                        <a href="http://www.souxuexiao.com/" title="搜学校网" target="_blank">搜学校网</a>
                      </li>

                      <li>
                        <a href="https://www.youzy.cn/" title="优志愿" target="_blank">优志愿</a>
                      </li>

                      <li>
                        <a href="http://www.youzy.cn/" title="高考志愿填报" target="_blank">高考志愿填报</a>
                      </li>

                      <li>
                        <a href="http://www.yuloo.com/zxks/" title="自学考试" target="_blank">自学考试</a>
                      </li>

                      <li>
                        <a href="http://zuowen.xuexila.com/" title="优秀作文范文" target="_blank">优秀作文范文</a>
                      </li>

                      <li>
                        <a
                          href="http://www.yingsheng.com/topic/1692"
                          title="培训体系"
                          target="_blank"
                        >培训体系</a>
                      </li>

                      <li>
                        <a href="http://www.huatu.com/a/gwy/" title="省公务员考试" target="_blank">省公务员考试</a>
                      </li>

                      <li>
                        <a href="http://xialinying.com/" title="军事夏令营" target="_blank">军事夏令营</a>
                      </li>

                      <li>
                        <a href="http://www.kokojia.com" title="IT培训" target="_blank">IT培训</a>
                      </li>

                      <li>
                        <a href="http://www.cnrencai.com/ceping/" title="人才测评" target="_blank">人才测评</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="main_right">
                <div class="paiming">
                  <div class="pm_tou">
                    <el-link
                      style="font-size: 20px; color: #606266"
                      :underline="false"
                      href
                      target="_blank"
                      disabled="true"
                    >排名</el-link>
                  </div>
                  <div class="pm_list">
                    <ul>
                      <li>
                        <span class="sort hot">1</span>
                        <a
                          title="北京大学"
                          target="_blank"
                          href="https://www.pku.edu.cn/"
                        >北京大学</a>
                      </li>
                      <li>
                        <span class="sort hot">2</span>
                        <a
                          title="清华大学"
                          target="_blank"
                          href="https://www.tsinghua.edu.cn/"
                        >清华大学</a>
                      </li>
                      <li>
                        <span class="sort hot">3</span>
                        <a
                          title="复旦大学"
                          target="_blank"
                          href="https://www.fudan.edu.cn/"
                        >复旦大学</a>
                      </li>
                      <li>
                        <span class="sort no">4</span>
                        <a
                          title="浙江大学"
                          target="_blank"
                          href="http://www.zju.edu.cn/"
                        >浙江大学</a>
                      </li>
                      <li>
                        <span class="sort no">5</span>
                        <a
                          title="南京大学"
                          target="_blank"
                          href="https://www.nju.edu.cn/"
                        >南京大学</a>
                      </li>
                      <li>
                        <span class="sort no">6</span>
                        <a
                          title="上海交通大学"
                          target="_blank"
                          href="https://www.sjtu.edu.cn/"
                        >上海交通大学</a>
                      </li>
                      <li>
                        <span class="sort no">7</span>
                        <a
                          title="华中科技大学"
                          target="_blank"
                          href="http://www.hust.edu.cn/"
                        >华中科技大学</a>
                      </li>
                      <li>
                        <span class="sort no">8</span>
                        <a
                          title="中国科学技术大学"
                          target="_blank"
                          href="https://www.ustc.edu.cn/"
                        >中国科学技术大学</a>
                      </li>
                      <li>
                        <span class="sort no">9</span>
                        <a
                          title="中国人民大学"
                          target="_blank"
                          href="https://www.ruc.edu.cn/"
                        >中国人民大学</a>
                      </li>
                      <li>
                        <span class="sort no">10</span>
                        <a
                          title="天津大学"
                          target="_blank"
                          href="http://www.tju.edu.cn/"
                        >天津大学</a>
                      </li>
                      <li>
                        <span class="sort no">11</span>
                        <a
                          title="武汉大学"
                          target="_blank"
                          href="https://www.whu.edu.cn/"
                        >武汉大学</a>
                      </li>
                      <li>
                        <span class="sort no">12</span>
                        <a
                          title="南开大学"
                          target="_blank"
                          href="https://www.nankai.edu.cn/"
                        >南开大学</a>
                      </li>
                      <li>
                        <span class="sort no">13</span>
                        <a
                          title="山东大学"
                          target="_blank"
                          href="https://www.sdu.edu.cn/"
                        >山东大学</a>
                      </li>
                      <li>
                        <span class="sort no">14</span>
                        <a
                          title="中山大学"
                          target="_blank"
                          href="http://www.sysu.edu.cn/"
                        >中山大学</a>
                      </li>
                      <li>
                        <span class="sort no">15</span>
                        <a
                          title="西安交通大学"
                          target="_blank"
                          href="http://www.xjtu.edu.cn/"
                        >西安交通大学</a>
                      </li>
                      <li>
                        <span class="sort no">16</span>
                        <a
                          title="哈尔滨工业大学"
                          target="_blank"
                          href="http://www.hit.edu.cn/"
                        >哈尔滨工业大学</a>
                      </li>
                      <li>
                        <span class="sort no">17</span>
                        <a
                          title="东南大学"
                          target="_blank"
                          href="https://www.seu.edu.cn/"
                        >东南大学</a>
                      </li>
                      <li>
                        <span class="sort no">18</span>
                        <a
                          title="四川大学"
                          target="_blank"
                          href="http://www.scu.edu.cn/"
                        >四川大学</a>
                      </li>
                      <li>
                        <span class="sort no">19</span>
                        <a
                          title="吉林大学"
                          target="_blank"
                          href="https://www.jlu.edu.cn/"
                        >吉林大学</a>
                      </li>
                      <li>
                        <span class="sort no">20</span>
                        <a
                          title="同济大学"
                          target="_blank"
                          href="https://www.tongji.edu.cn/"
                        >同济大学</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tuijian">
                   <div class="tj_tou">
                    <el-link
                      style="font-size: 20px; color: #606266"
                      :underline="false"
                      href
                      target="_blank"
                      disabled="true"
                    >推荐</el-link>
                  </div>
                  <div class="tj_list">
                    <ul>
                      <li>
                        <span class="sort hot">1</span>
                        <a
                          title="四川大学"
                          target="_blank"
                          href="http://www.scu.edu.cn/"
                        >四川大学</a>
                      </li>
                      <li>
                        <span class="sort hot">2</span>
                        <a
                          title="西南交通大学"
                          target="_blank"
                          href="https://www.swjtu.edu.cn/"
                        >西南交通大学</a>
                      </li>
                      <li>
                        <span class="sort hot">3</span>
                        <a
                          title="电子科技大学"
                          target="_blank"
                          href="https://www.uestc.edu.cn/"
                        >电子科技大学</a>
                      </li>
                      <li>
                        <span class="sort no">4</span>
                        <a
                          title="西南财经大学"
                          target="_blank"
                          href="https://www.swufe.edu.cn/"
                        >西南财经大学</a>
                      </li>
                      <li>
                        <span class="sort no">5</span>
                        <a
                          title="西南科技大学"
                          target="_blank"
                          href="http://www.swust.edu.cn/"
                        >西南科技大学</a>
                      </li>
                      <li>
                        <span class="sort no">6</span>
                        <a
                          title="成都理工大学"
                          target="_blank"
                          href="http://www.cdut.edu.cn/"
                        >成都理工大学</a>
                      </li>
                      <li>
                        <span class="sort no">7</span>
                        <a
                          title="四川农业大学"
                          target="_blank"
                          href="https://www.sicau.edu.cn/"
                        >四川农业大学</a>
                      </li>
                      <li>
                        <span class="sort no">8</span>
                        <a
                          title="电子科技大学(沙河校区)"
                          target="_blank"
                          href="https://www.uestc.edu.cn/"
                        >电子科技大学(沙河校区)</a>
                      </li>
                      <li>
                        <span class="sort no">9</span>
                        <a
                          title="成都工业学院"
                          target="_blank"
                          href="http://www.cdtu.edu.cn/"
                        >成都工业学院</a>
                      </li>
                      <li>
                        <span class="sort no">10</span>
                        <a
                          title="成都体育学院"
                          target="_blank"
                          href="http://www.cdsu.edu.cn/"
                        >成都体育学院</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="dongtai">
                  <div class="dt_tou">
                    <el-link
                      style="font-size: 20px; color: #606266"
                      :underline="false"
                      href
                      target="_blank"
                      disabled="true"
                    >动态</el-link>
                  </div>
                  <div class="dt_list">
                    <ul>

                                <li><span class="sort hot ">1</span><a title="教育部面向战略性新兴产业、电子商务行业开展“24365校园招聘”专场活动" target="_blank" href="https://www.youzy.cn/news/article-76824.html">教育部面向战略性新兴产业、电子商务行业开展“24365校园招聘”专场活动</a></li>

                                <li><span class="sort hot ">2</span><a title="广西艺术学院2020年本、专科招生简章（二）" target="_blank" href="https://www.youzy.cn/news/article-76817.html">广西艺术学院2020年本、专科招生简章（二）</a></li>

                                <li><span class="sort hot ">3</span><a title="广西艺术学院2020年本、专科招生简章（一）" target="_blank" href="https://www.youzy.cn/news/article-76816.html">广西艺术学院2020年本、专科招生简章（一）</a></li>

                                <li><span class="sort  ">4</span><a title="教育部办公厅、国务院国资委办公厅关于举办战略性新兴产业面向2020届高校毕业生网络招聘会的通知" target="_blank" href="https://www.youzy.cn/news/article-76809.html">教育部办公厅、国务院国资委办公厅关于举办战略性新兴产业面向2020届高校毕业生网络招聘会的通知</a></li>

                                <li><span class="sort  ">5</span><a title="教育部办公厅、商务部办公厅关于举办电子商务行业面向2020届高校毕业生网上招聘活动的通知" target="_blank" href="https://www.youzy.cn/news/article-76808.html">教育部办公厅、商务部办公厅关于举办电子商务行业面向2020届高校毕业生网上招聘活动的通知</a></li>

                                <li><span class="sort  ">6</span><a title="北京理工大学2020年艺术类招生简章" target="_blank" href="https://www.youzy.cn/news/article-76798.html">北京理工大学2020年艺术类招生简章</a></li>

                                <li><span class="sort  ">7</span><a title="天津财经大学2020年艺术类招生简章" target="_blank" href="https://www.youzy.cn/news/article-76796.html">天津财经大学2020年艺术类招生简章</a></li>

                                <li><span class="sort  ">8</span><a title="强化防溺水工作 确保学生生命安全" target="_blank" href="https://www.youzy.cn/news/article-76785.html">强化防溺水工作 确保学生生命安全</a></li>

                                <li><span class="sort  ">9</span><a title="长安大学2020年戏剧与影视学类招生实施办法" target="_blank" href="https://www.youzy.cn/news/article-76782.html">长安大学2020年戏剧与影视学类招生实施办法</a></li>

                                <li><span class="sort  ">10</span><a title="兰州大学2020年保送生招生简章" target="_blank" href="https://www.youzy.cn/news/article-76775.html">兰州大学2020年保送生招生简章</a></li>

                            </ul>
                  </div>
                </div>
              </div>
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
      fit: 'cover',
      opf: { op: [], opa: '/index' },
      zsUrl: '/#/zoushi',
      url: [
        { src: require('../assets/pic/xx.png'), link: '/#/xuexiao' },
        { src: require('../assets/pic/dl.png'), link: '#' },
        { src: require('../assets/pic/gl.png'), link: '#' },
        { src: require('../assets/pic/bz.png'), link: '/#/help' }
      ],
      zmurl: [
        { src: require('../assets/pic/scdx.png'), link: 'http://www.scu.edu.cn/' },
        { src: require('../assets/pic/xnjt.png'), link: 'https://www.swjtu.edu.cn/' },
        { src: require('../assets/pic/dzkj.png'), link: 'https://www.uestc.edu.cn/' },
        { src: require('../assets/pic/lssf.png'), link: 'http://www1.lsnu.edu.cn/' }
      ],
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
      }, {
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
      userData: {
        empUser: '',
        empPass: '',
        role: '',
        wenli: '',
        fenshu: ''
      }
    }
  },
  components: { Header, Footer, AsideMenu },
  mounted () {
    this.updataCard()
  },
  methods: {
    drawLine () {
      var echarts = require('echarts')

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('myChart1'))
      var myChart1 = echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.tableData[1].xname
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
            data: [this.tableData[1].wen17low, this.tableData[1].wen18low, this.tableData[1].wen19low]
          },
          {
            name: '文科高分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[1].wen17high, this.tableData[1].wen18high, this.tableData[1].wen19high]
          },
          {
            name: '理科低分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[1].li17low, this.tableData[1].li18low, this.tableData[1].li19low]
          },
          {
            name: '理科高分',
            type: 'line',
            // stack: 750,
            data: [this.tableData[1].li17high, this.tableData[1].li18high, this.tableData[1].li19high]
          }
        ]
      })
      myChart1.setOption({
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
    },
    tzClick (e) {
      const _this = this
      _this.addData()
      if (e === 1 && (_this.userData.empUser !== '' || _this.userData.empUser != null)) {
        alert('你已登录!')
      }
      if (e === 2 && _this.userData.role !== '管理员') {
        console.log(_this.userData.role)
        // sessionStorage.clear()
        _this.$router.push('/login')
      }
      if (e === 1 && (_this.userData.empUser === '' || _this.userData.empUser == null)) {
        _this.$router.push('/login')
      }
      if (e === 2 && _this.userData.role === '管理员') {
        _this.$router.push('/xuexiao_gl')
      }
    },
    addData () {
      const _this = this
      _this.userData.empUser = window.sessionStorage.getItem('empUser')
      _this.userData.empPass = window.sessionStorage.getItem('empPass')
      _this.userData.role = window.sessionStorage.getItem('role')
      _this.userData.wenli = window.sessionStorage.getItem('wenli')
      _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
    },
    updataCard  () {
      const _this = this
      this.$axios({
        method: 'get',
        url: '/select_xuexiao',
        data: {}
      })
        .then(response => {
          for (var i = 0; i < 2; i++) {
            _this.tableData[i].xname = response.data[i].xname
            _this.tableData[i].li17low = parseInt(response.data[i].xlike.substr(5, 3))
            _this.tableData[i].li17high = parseInt(response.data[i].xlike.substr(9, 3))
            _this.tableData[i].li18low = parseInt(response.data[i].xlike.substr(18, 3))
            _this.tableData[i].li18high = parseInt(response.data[i].xlike.substr(22, 3))
            _this.tableData[i].li19low = parseInt(response.data[i].xlike.substr(31, 3))
            _this.tableData[i].li19high = parseInt(response.data[i].xlike.substr(35, 3))
            _this.tableData[i].wen17low = parseInt(response.data[i].xlike.substr(5, 3))
            _this.tableData[i].wen17high = parseInt(response.data[i].xlike.substr(9, 3))
            _this.tableData[i].wen18low = parseInt(response.data[i].xlike.substr(18, 3))
            _this.tableData[i].wen18high = parseInt(response.data[i].xlike.substr(22, 3))
            _this.tableData[i].wen19low = parseInt(response.data[i].xlike.substr(31, 3))
            _this.tableData[i].wen19high = parseInt(response.data[i].xlike.substr(35, 3))
            // console.log(response.data[i].xname)
          }

          this.drawLine()
          // console.log(_this.tableData[0].li17low)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
/* main all */
.ind_main_all {
  width: 1200px;
}
.main_left {
  width: 800px;
  float: left;
  margin: 10px;
  margin-right: 5px;
}
.main_right {
  width: 300px;
  float: left;
  margin: 10px;
  margin-left: 5px;
}
.tiaozhuan {
  background-color: #fff;
  border-radius: 10px;
  height: 140px;
  margin-top: 20px;
}
.tz_xuanxiang {
  width: 100px;
  height: 100px;
  margin: 45px;
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.zouma {
  margin-top: 10px;
}
.qushi,
.zhuanti {
  width: 800px;
  background-color: #fff;
  min-height: 300px;
  margin-top: 20px;
  float: left;
  border-radius: 10px;
}
.qs_tou,
.zt_tou,
.lj_tou,.pm_tou,.tj_tou,.dt_tou {
  width: 800px;
  height: 40px;
  text-align: left;
  line-height: 40px;
  float: left;
  margin-top: 10px;
}
.qs_tu {
  float: left;
  margin-top: 10px;
}
#myChart1,
#myChart2 {
  width: 500px;
  height: 300px;
  float: left;
  margin-left: 100px;
  margin-top: 10px;
}
.sort.hot {
  background: #e84c33;
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  top: 12px;
  left: 0;
  font-size: 12px;
}
.sort.no {
  background: #a5a5a5;
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  top: 12px;
  left: 0;
  font-size: 12px;
}
.lianjie {
  width: 800px;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 20px;
  float: left;
}
.lj_list {
  float: left;
  margin-top: 10px;
}
.lj_list ul li a:link,
.lj_list ul li a:visited {
  color: #666666;
}
.lj_list ul li a:hover,
.lj_list ul li a:active {
  color: orangered;
}
.lj_list ul li {
  float: left;
  margin: 5px 0;
  font-size: 12px;
  line-height: 12px;
  margin-right: 10px;
}
.zt_list ul,
.lj_list ul,.pm_list ul,.tj_list ul,.dt_list ul {
    list-style: none;
    margin: 0px;
}
.zt_list ul li a,
.lj_list ul li a,.pm_list ul li a,.tj_list ul li a,.dt_list ul li a {
  text-decoration: none;
}
.zt_list ul li a:link,.zt_list ul li a:visited,
.pm_list ul li a:link,.pm_list ul li a:visited,
.tj_list ul li a:link,.tj_list ul li a:visited,
.dt_list ul li a:link,.dt_list ul li a:visited {
  color: black;
}

.zt_list ul li a:hover,.zt_list ul li a:active,
.pm_list ul li a:hover,.pm_list ul li a:active,
.tj_list ul li a:hover,.tj_list ul li a:active,
.dt_list ul li a:hover,.dt_list ul li a:active  {
  color: orangered;
}
.zt_list ul li,.pm_list ul li,.tj_list ul li,.dt_list ul li {
  margin: 0px;
  padding: 10px 10px 8px 25px;
  line-height: 16px;
  text-align: left;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.zt_list,.pm_list,.tj_list {
  float: left;
}
.paiming,.tuijian,.dongtai{
  width: 300px;
  min-height: 200px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  float: left;
}
/* zouma */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
