<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">支付检查 </div><br>
    <div style="border: 1px solid black;margin-left: 30%;margin-right: 30%;">
      <el-form ref="editForm" :model="editForm" :rules="editRules" label-position="left" label-width="100px" status-icon style="margin-top: 15px;">
        <br>
        <el-row align="middle">
          <el-col :span="7">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item label="姓名">
              <el-input v-model="editForm.perName" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item label="编号">
              <el-input v-model="editForm.applyNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item label="订单号">
              <el-input v-model="editForm.orderNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item label="支付金额">
              <el-input v-model="editForm.arrearNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item label="已缴金额">
              <el-input v-model="editForm.paidFeeNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
          &nbsp;
          </el-col>
          <el-col :span="10">
            <el-form-item align="center">
              <el-button type="primary" @click="$router.push({ path: ''} )">确认支付</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>

  </div>
</template>

<script>
import { ebankPaymentRequest } from '@/api/doctor'
export default {
  name: 'RecruitFeeEbankPaymentRequest',
  data() {
    return {
      editForm: {
        perName: '',
        applyNum: '',
        orderNum: '',
        paidFeeNum: '',
        arrearNum: '',
        billInfo: '',
        octopusViewId: '',
        perIdCard: '',
        sign: '',
        subsysid: '',
        sysid: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      ebankPaymentRequest({ perIdCard: this.$route.query.perIdCard, arrearNum: this.$route.query.arrearNum + '' }).then(res => {
        if (res.re === 1) {
          this.editForm = res.data
        }
      })
    }
  }

}
</script>
<style scoped>
  .g-title {
    font-weight: bold;
    font-size: 26px;
    background-color: whitesmoke;
    border-radius: 3px;
    color: #333;
    border-left: 7px solid #62bbc3;
    margin: 10px 0 25px 0;
    padding: 8px 15px;
  }
</style>
