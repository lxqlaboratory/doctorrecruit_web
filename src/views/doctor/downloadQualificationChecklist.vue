<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 " @click="submit">下载资格审查表(点击下载） </div>
    <a ref="temp" style="position: fixed;z-index:-1;top: 0;left: 0;" :href="serverAddres+'/func/web/downloadQualificationChecklistNew'" download="资格审查表.pdf" />
  </div>
</template>

<script>
import { getBooleanScore } from '@/api/doctor'
export default {
  name: 'DownloadQualificationChecklist',
  data() {
    return {
      serverAddres: ''
    }
  },
  created() {
    this.serverAddres = this.GLOBAL.servicePort
  },
  methods: {
    submit() {
      getBooleanScore().then(res => {
        if (res.re == 1) {
          this.$refs.temp.click()
        } else if (res.re == -1) {
          this.$message({
            type: 'error',
            message: res.data
          })
        }
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
