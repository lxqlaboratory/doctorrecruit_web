<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">成绩查询 </div>
    <table class="content" cellspacing="10" width="80%" align="center" >
      <tr>

        <td width="10%" align="right"> 书面表达：</td>
        <td width="30%">{{totalScore}}</td>
        <td width="10%" align="right">听力理解 ：</td>
        <td width="30%">{{totalScore}}</td>
      </tr>
    </table>

    <table class="content" cellspacing="10" width="80%" align="center" >
      <tr>

        <td width="10%" align="right">词语用法：</td>
        <td width="30%">{{totalScore}}</td>
        <td width="10%" align="right">完形填空：</td>
        <td width="30%">{{totalScore}}</td>
      </tr>
    </table>

    <table class="content" cellspacing="10" width="80%" align="center" >
      <tr>

        <td width="10%" align="right">阅读理解：</td>
        <td width="30%">{{totalScore}}</td>
        <td width="10%" align="right">总分：</td>
        <td width="30%">{{totalScore}}</td>
      </tr>
    </table>
    <table class="content" cellspacing="10" width="80%" align="center" >
      <tr>
        <td width="10%" align="right">总分标准分：</td>
        <td width="30%">{{totalScore}}</td>
        <td width="10%" align="right">合格证编号：</td>
        <td width="30%">{{certificateNo}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {getScores } from '@/api/doctor'
  export default {
    name: 'QueryResults',
    data() {
      return {
        totalScore:'111',
        certificateNo:'',
        form:{

        }

      }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData(){
          getScores().then(res=>{
            this.form = res.data
          })
        }
      }

  }
</script>
<style scoped>
  .content2{
    width:80%;
    border-top: 1px solid #336699;
    border-left: 1px solid #336699;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10%;
  }
</style>
