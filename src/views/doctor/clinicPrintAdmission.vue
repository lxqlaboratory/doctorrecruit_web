<template>
  <div class="app-container">
    <a  style="font-size: 26px;font-weight: bold;color: #304156 " :href="serverAddres+'/func/web/downloadDoctorOfMedicineAdmissionPageNew'" download="准考证.pdf" >
    打印准考证（点击下载）
    </a>

  </div>
</template>
<script>
    export default {
        name: "clinicPrintAdmission",
      data() {
        return {
          serverAddres: ''
        }
      },
      created() {
        this.serverAddres = this.GLOBAL.servicePort
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

