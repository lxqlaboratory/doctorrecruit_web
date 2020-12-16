<template>
<div>
  <table class="content">
    <tr>
    <td colspan="6" style="font-size: 16px;font-weight: bold;color: #304156 ">缴费完成</td>
    </tr>
    <tr  >
      <td colspan="1"  style="font-size: 23px">姓名:</td>
      <td colspan="2" style="color: rgb(98,187,185);font-size: 23px">
       {{perName}}</td>
      <td colspan="1"  style="font-size: 23px">编号：</td>
      <td colspan="2" style="color: rgb(98,187,185);font-size: 23px">
        {{applyNum}}</td>

    </tr>
    <tr  >
      <td colspan="1" style="font-size: 23px" >订单号：</td>
      <td colspan="2" style="color: rgb(98,187,185);font-size: 23px">
        {{orderNum}}</td>
      <td colspan="1" style="font-size: 23px" >支付金额：</td>
      <td colspan="2" style="color: rgb(98,187,185);font-size: 23px">
        {{amountStr}}</td>

    </tr>
  </table>
</div>
</template>

<script>
  import { getPaymentUserInfo } from '@/api/doctor'
    export default {
        name: "recruitFeeEbankPaymentReturn",
      data() {
        return {
          perName:'',
          applyNum: '',
          orderNum: '',
          amountStr: ''
        }
      },
      created() {
        this.fetchData()
      },
      methods: {

        fetchData() {
          this.applyNum = this.$route.query.applyNum
          this.orderNum = this.$route.query.orderNum
          this.amountStr = this.$route.query.amountStr
          getPaymentUserInfo({
            applyNum: this.$route.query.applyNum
          }).then(res => {
            if (res.re == 1) {
              this.perName = res.data.perName
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
