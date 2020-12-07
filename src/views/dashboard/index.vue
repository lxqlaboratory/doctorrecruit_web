<template>
  <div class="dashboard-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>系统通知</span>
      </div>
    </div>
    <div v-html="html"></div>

  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
      noticeList: '',
      html:''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {

    }
  }
}
</script>
