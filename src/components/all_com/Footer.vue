<template>
  <div class="ft_list">
    <ul v-for="(item,index) in fturl" :key="index">
      <li><a :href="item.url">{{item.text}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fturl: [{ text: '乐山师范学院计算机科学与技术', url: 'http://www1.lsnu.edu.cn/' },
        { text: '唐逍遥', url: '' }, { text: '联系我:huitailanguia@foxmail.com', url: '' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.ft_list{
  margin-top: 20px;
}
  .ft_list ul{
     list-style: none;
    margin: 0px;
  }
  .ft_list ul li a {
  text-decoration: none;
}
.ft_list ul li a:link,.ft_list ul li a:visited {
  color: #666666;
}
.ft_list ul li a:hover,.ft_list ul li a:active  {
  color: orangered;
}
.ft_list ul li {
  margin: 0px;
  padding: 10px 10px 8px 25px;
  line-height: 16px;
  text-align: center;
  white-space:nowrap;
  font-size: 13px;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
