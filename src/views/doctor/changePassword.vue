<template>
  <div class="app-container">
    <div align="center" style="font-size: 26px;font-weight: bold;color: #304156 ">修改密码 </div>

    <el-form ref="editForm" :model="editForm" :rules="editRules" label-position="left" label-width="100px" status-icon style="margin-top: 15px;">
      <el-form-item label="原始密码" prop="oldPas">
        <el-input v-model="oldPassword" :type="passw" />
      </el-form-item>
      <el-form-item label="新密码" prop="oldPas">
        <el-input v-model="newPassword" :type="passw" />
      </el-form-item>
      <el-form-item label="确认密码" prop="oldPas">
        <el-input v-model="newPassword1" :type="passw" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">确定</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { changePassword } from '@/api/doctor'
export default {
  name: 'ChangePassword',
  data() {
    return {
      passw: 'password',
      oldPassword: '',
      newPassword: '',
      newPassword1: ''
    }
  },
  methods: {
    submit() {
      if (this.newPassword !== this.newPassword1) {
        this.$message({
          type: 'error',
          message: '两次密码输入不一致'
        })
      } else {
        changePassword({ 'oldPassword': this.oldPassword, 'newPassword': this.newPassword }).then(response => {
          if (response.re === 1) {
            this.$message({
              type: 'sucess',
              message: '修改成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: response.data
            })
          }
        })
      }
    }
  }

}
</script>
