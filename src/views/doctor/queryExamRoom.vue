<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">考场信息查询 </div>
    <div class="g-title">缴费信息</div>
    <div style="padding-left:35px;width: 100%;min-height: 10vh;">
      <el-row :gutter="20">
        <el-col :span="8">
          <label>缴费状态:</label>
          <span v-if="this.feeState===1">未缴费</span>
          <span v-else>已缴费</span>
        </el-col>
        <el-col :span="8">
          <label>缴费金额:</label>
          <span>{{feeNum}}</span>
        </el-col>
        <el-col :span="8">
          <label>缴费日期:</label>
          <span>{{feeTime}}</span>
        </el-col>
      </el-row>
    </div>

    <div class="g-title">考试信息</div>
    <div style="padding-left:35px;width: 100%;min-height: 10vh;">
      <el-row :gutter="20">
        <el-col :span="8">
          <label>准考证号:</label>
          <span>{{examNo}}</span>
        </el-col>
        <el-col :span="8">
          <label>考场编号:</label>
          <span>{{exameRoomNum}}</span>
        </el-col>
        <el-col :span="8">
          <label>考场考位数:</label>
          <span>{{seatCount}}</span>
        </el-col>
      </el-row>
      <br/>
      <el-row :gutter="20" style="margin-left: 20px">
        <el-col :span="8">
          <label>座号:</label>
          <span>{{examSeatNum}}</span>
        </el-col>
        <el-col :span="8">
          <label>教室:</label>
          <span>{{classroomName}}</span>
        </el-col>
        <el-col :span="8">
          <label>是否现场确认:</label>
          <span v-if="this.checkState===1">已现场确认</span>
          <span v-else>未现场确认</span>
        </el-col>
      </el-row><br/>
    </div>
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
