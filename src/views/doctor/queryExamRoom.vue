<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">考场信息查询 </div>
    <div class="g-title">缴费信息</div>
    <div style="padding-left:35px;width: 70%;min-height: 10vh;">
      <el-row :gutter="20">
        <el-col :span="8">
          <label>缴费状态:</label>
          <span>{{feeState}}</span>
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
    <div style="padding-left:35px;width: 70%;min-height: 10vh;">
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
          <span>{{classRoomName}}</span>
        </el-col>
        <el-col :span="8">
          <label>是否现场确认:</label>
          <span>{{checkState}}</span>
        </el-col>
      </el-row><br/>
    </div>
  </div>
</template>

<script>
  import {physicalexaminationReportView } from '@/api/doctor'
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

    },
    methods: {

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
