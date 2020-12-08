<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">成绩查询 </div><br/>
    <div style="border: 1px solid #336699;margin-left: 20%;margin-right: 20%;">
      <table cellspacing="10" width="80%" align="center" >
        <tr>
          <td width="20%" align="right"> 书面表达：</td>
          <td width="30%">{{form.score545}}</td>
          <td width="20%" align="right">听力理解 ：</td>
          <td width="30%">{{form.score546}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>

          <td width="20%" align="right">词语用法：</td>
          <td width="30%">{{form.score548}}</td>
          <td width="20%" align="right">完形填空：</td>
          <td width="30%">{{form.score549}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>

          <td width="20%" align="right">阅读理解：</td>
          <td width="30%">{{form.score550}}</td>
          <td width="20%" align="right">总分：</td>
          <td width="30%">{{form.score459}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>
          <td width="20%" align="right">总分标准分：</td>
          <td width="30%">{{form.totalScore}}</td>
          <td width="20%" align="right">合格证编号：</td>
          <td width="30%">{{form.certificateNo}}</td>
        </tr>
      </table>
    </div>
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
          applyId:'',
          score545:'',
          score546:'',
          score548:'',
          score549:'',
          score550:'',
          score459:'',
          totalScore:'',
          certificateNo:''
        }

      }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData(){
          getScores().then(res => {
              this.form = res
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
