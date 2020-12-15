<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">考场信息查询 </div>
    <div class="g-title">缴费信息</div>
    <table class="content">
      <tr  >
        <td colspan="1" height="80px" style="font-weight: bold; font-size: 23px">缴费状态</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> <span v-if="this.feeState===1">未缴费</span>
          <span v-else>已缴费</span></td>

        <td colspan="1" style="font-weight: bold;font-size: 23px" >缴费金额</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{feeNum}}</td>
        <td colspan="1" style="font-weight: bold;font-size: 23px">缴费日期</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{feeTime}}</td>
      </tr>
    </table>


    <div class="g-title">考试信息</div>

    <table class="content">
      <tr  >
        <td colspan="1" height="80px" style="font-weight: bold; font-size: 23px">准考证号</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{examNo}}</td>

        <td colspan="1" style="font-weight: bold;font-size: 23px" >考场编号</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{exameRoomNum}}</td>
        <td colspan="1" style="font-weight: bold;font-size: 23px">考场考位数</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px">{{seatCount}}</td>
      </tr>
      <tr  >
        <td colspan="1" height="80px" style="font-weight: bold; font-size: 23px">座号</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{examSeatNum}}</td>

        <td colspan="1" style="font-weight: bold;font-size: 23px" >教室</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> {{classroomName}}</td>
        <td colspan="1" style="font-weight: bold;font-size: 23px">是否现场确认</td>
        <td colspan="1" style="color: rgb(98,187,185);font-size: 23px"> <span v-if="this.checkState===1">已现场确认</span>
          <span v-else>未现场确认</span></td>
      </tr>
    </table>

  </div>
</template>

<script>
  import {getFeeState,getFeeNum,getFeeTime,getExamNo,getExamSeatNum,getExamRoomNum,isCheck,getClassRoom } from '@/api/doctor'
  export default {
    name: 'QueryExamRoom',
    data() {
      return {
        examNo:'',
        exameRoomNum:'',
        seatCount:'',
        examSeatNum:'',
        classRoomName:'',
        checkState:'',
        feeState:'',
        feeNum:'',
        feeTime:'',
        form:{

        }

      }
    },
    created() {
      this.fetchData()
    },
    methods: {
        fetchData(){
          getFeeState().then(res => {
            this.feeState = res
          }),
            getFeeNum().then(res => {
              this.feeNum = res
            }),
            getFeeTime().then(res => {
              this.feeTime = res
            }),
            getExamNo().then(res => {
              this.examNo = res
            }),
            getExamRoomNum().then(res => {
            this.exameRoomNum = res
            }),
            getExamSeatNum().then(res => {
              this.examSeatNum = res
            }),
            getClassRoom().then(res => {
              this.seatCount =res.seatCount
              this.classroomName = res.classroomName
              this.exameRoomNum = res.exameRoomNum
            }),
            isCheck().then(res => {
              this.checkState =res
            })
        }
      }

  }
</script>
<style scoped>
  .g-title {
    font-weight: bold;
    font-size: 22px;
    background-color: whitesmoke;
    border-radius: 3px;
    color: #333;
    border-left: 7px solid #62bbc3;
    margin: 10px 0 25px 0;
    padding: 8px 15px;
  }
</style>
