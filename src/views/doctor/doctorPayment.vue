<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">临床博士网银缴费 </div>

    <table class="content2" style="color: red">

      <td style="font-size: 18px;font-weight: bold; ">注意事项: </td>
      <tr>
        <td colspan="6" style="font-size: 16px">
          1、每天的缴款时间为1:00至21:00，请不要在其他时段登录银行页面付费。 <br>
          2、请牢记您的订单号以便对账使用。<br>
          3、缴费完成后，再次点击“临床博士网银缴费”，即可查看缴费状态。<br>
          4、若银行已扣费，查看信息时显示未交费，请联系管理员。<br>
          5、支持中国银行、中国农业银行、及银联网银支付。<br>
          6、在职临床硕士考生，需在通过学院规定时间的初审之后，才能交纳学费。<br>
          7、系统反馈有延时，如果已经交费，但显示已缴费0元，请等待几分钟后刷新页面。<br>
        </td>
      </tr>
    </table>
    <br>

    <div align="center" style="font-size: 20px;font-weight: bold;color: darkred " v-if="form.feeState === 2">
      <label>缴费状态: 缴费成功</label>
    </div>
    <div align="center" style="font-size: 20px;font-weight: bold;color: darkred " v-else>
      <label>缴费状态: 未缴费</label>
    </div>
    <div style="border: 1px solid #336699;margin-left: 10%;margin-right: 5%;"><br>
      <el-form ref="form" :model="form" label-width="40%" >
        <el-row>
          <el-col :span="11">
            <el-form-item label="姓名" prop="groupName">
              <el-input style="width: 200px;" v-model="form.perName" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="编号" prop="groupName">
              <el-input style="width: 200px;" v-model="form.applyNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="form.feeState === 2">
          <el-col :span="11">
            <el-form-item label="缴费类型：" prop="groupName">
              <el-input style="width: 200px;" v-model="form.feeType" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="缴费时间：" prop="groupName">
              <el-input style="width: 200px;" v-model="form.feeTime" disabled />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="11">
            <el-form-item label="身份证号" prop="groupName">
              <el-input style="width: 200px;" v-model="form.perIdCard" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="11" v-if="form.feeState === 2">
            <el-form-item label="订单号：" prop="groupName">
              <el-input style="width: 200px;" v-model="form.orderNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="11">
            <el-form-item label="应缴金额" prop="groupName">
              <el-input style="width: 200px;" v-model="form.feeNum" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="已缴金额" prop="groupName">
              <el-input style="width: 200px;" v-model="form.paidFeeNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="本次缴费项目" prop="groupName">
              <el-input style="width: 200px;" v-model="form.payType" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="本次支付金额" prop="groupName">
              <el-input style="width: 200px;" v-model="form.arrearNum" disabled />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="form.feeState !== 2">
          <el-col :span="17">
            <el-form-item align="center">
              <el-button type="primary" @click="submit()">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

  </div>
</template>

<script>
import { initPay } from '@/api/doctor'
export default {
  name: 'DoctorPayment',
  data() {
    return {
      form: {
        applyNum: '',
        arrearNum: '',
        feeNum: '',
        feeType: '',
        feeTime: '',
        orderNum: '',
        paidFeeNum: '',
        payType: '',
        perIdCard: '',
        perName: '',
        feeState: '',
        systemState: ''
      }

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    submit() {
      if (!this.form.systemState) {
        this.$message({
          type: 'error',
          message: '每天的缴款时间为1:00至21:00，请不要在其他时段登录银行页面付费'
        })
      } else if (this.form.perName === undefined) {
        this.$message({
          type: 'error',
          message: '请先于【完善信息】处完善个人信息再进行缴费操作！'
        })
      } else {
        this.$router.push({ path: 'RecruitFeeEbankPaymentRequest', query: { 'perIdCard': this.form.perIdCard, 'arrearNum': this.form.arrearNum }})
      }
    },
    fetchData() {
      initPay().then(res => {
        if (res.re === 1) {
          this.form = res.data
        }
      })
    }
  }

}
</script>
<style scoped>
  .content2{
    width:85%;
    border-top: 1px solid #336699;
    border-left: 1px solid #336699;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10%;
  }
</style>
