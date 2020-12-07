<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">临床博士网银缴费 </div>

    <table class="content2">

      <td style="font-size: 18px;font-weight: bold;color: #304156 ">注意事项: </td>
      <tr v-for="(items,index) in noticeList"  :key="index">
        <td colspan="6" >{{ items }} </td>
      </tr>
    </table>

    <div align="center" style="font-size: 20px;font-weight: bold;color: darkred ">
      <label>缴费状态:</label>
    </div>
    <el-form :model="form" label-width="300px" ref="form" >
      <el-row>
        <el-col :span="9">
          <el-form-item label="姓名" prop="groupName" >
            <el-input v-model="form.perName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="编号" prop="groupName" >
            <el-input v-model="form.applyNum"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="身份证号" prop="groupName" >
            <el-input v-model="form.perIdCard"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="应缴金额" prop="groupName" >
            <el-input v-model="form.paidFeeNum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="已缴金额" prop="groupName" >
            <el-input v-model="form.perName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="本次缴费项目" prop="groupName" >
            <el-input v-model="form.payType"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="本次支付金额" prop="groupName" >
            <el-input v-model="form.feeNum"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row >
        <el-col :span="8" >
          <el-form-item align="center">
            <el-button type="primary" @click="">提交</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8" >
          <el-form-item align="center">
            <el-button @click="">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import {physicalexaminationReportView } from '@/api/doctor'
  export default {
    name: 'DoctorPayment',
    data() {
      return {
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
