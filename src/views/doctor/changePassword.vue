<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">修改密码 </div>

    <el-form :model="editForm" :rules="editRules"  label-position="left"  label-width="100px" ref="editForm" status-icon style="margin-top: 15px;">
      <el-form-item label="原始密码" prop="oldPas" >
        <el-input disabled v-model="editForm.oldPas"/>
      </el-form-item>
      <el-form-item label="新密码" prop="oldPas" >
        <el-input disabled v-model="editForm.oldPas"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="oldPas" >
        <el-input disabled v-model="editForm.oldPas"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {physicalexaminationReportView } from '@/api/doctor'
  export default {
    name: 'ChangePassword',
    data() {
      return {
        editForm:{
          oldPas:'',
          newPas:''
        },
        editRules:[]
      }
    },
    created() {

    },
    methods: {

      }

  }
</script>
