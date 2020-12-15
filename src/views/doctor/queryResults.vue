<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">成绩查询 </div><br/>
    <div style="border: 1px solid #336699;margin-left: 20%;margin-right: 10%;">
      <table cellspacing="10" width="80%" align="center" >
        <tr>
          <td width="20%" align="right" style="font-weight: bold;"> 书面表达：</td>
          <td width="30%" style="color: red">{{form.score545}}</td>
          <td width="20%" align="right" style="font-weight: bold;">听力理解 ：</td>
          <td width="30%" style="color: red">{{form.score546}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>

          <td width="20%" align="right" style="font-weight: bold;">词语用法：</td>
          <td width="30%" style="color: red">{{form.score548}}</td>
          <td width="20%" align="right" style="font-weight: bold;">完形填空：</td>
          <td width="30%" style="color: red">{{form.score549}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>

          <td width="20%" align="right" style="font-weight: bold;">阅读理解：</td>
          <td width="30%" style="color: red">{{form.score550}}</td>
          <td width="20%" align="right" style="font-weight: bold;">总分：</td>
          <td width="30%" style="color: red">{{form.score459}}</td>
        </tr>
      </table>
      <table cellspacing="10" width="80%" align="center" >
        <tr>
          <td width="20%" align="right" style="font-weight: bold;">总分标准分：</td>
          <td width="30%" style="color: red">{{form.totalScore}}</td>
          <td width="20%" align="right" style="font-weight: bold;">合格证编号：</td>
          <td width="30%" style="color: red">{{form.certificateNo}}</td>
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
