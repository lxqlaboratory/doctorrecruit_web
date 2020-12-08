<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">下载资格审查表 </div>
  </div>
</template>

<script>
  import {physicalexaminationReportView } from '@/api/doctor'
  export default {
    name: 'downloadQualificationChecklist',
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
