<template>
  <div class="app-container">
    <div class="g-title">完善信息</div>
    <el-form :model="editForm" label-width="220px" style="width: 80%;align-content: center;">
      <el-row>
        <el-col :span="9">
          <el-form-item label="姓名" prop="groupName" >
            <el-input v-model="editForm.perName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="性别">
            <el-select v-model="editForm.sex" style="width: 100%">
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="出生日期" prop="groupName" >
            <el-date-picker
              v-model="editForm.birthday"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="证件号码">
            <el-input v-model="editForm.perIdCard"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="民族" prop="groupName" >
            <el-select v-model="editForm.peopleCode" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="政治面貌">
            <el-select v-model="editForm.politicalStatus" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="籍贯" prop="groupName" >
            <el-input v-model="editForm.hometown"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="工作单位所在地">
            <el-select style="width: 50%" v-model="editForm.province"></el-select><el-select style="width: 50%" v-model="editForm.city"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="工作单位名称" prop="groupName" >
            <el-input v-model="editForm.workplaceName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="职称">
            <el-select v-model="editForm.grade" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="通讯地址" prop="groupName" >
            <el-input v-model="editForm.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="邮政编码">
            <el-input v-model="editForm.postalcode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="固定电话" prop="groupName" >
            <el-input v-model="editForm.telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="移动电话">
            <el-input v-model="editForm.mobilephone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="电子邮箱" prop="groupName" >
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="从事专业">
            <el-input v-model="editForm.profession"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="本科学习形式" prop="groupName" >
            <el-select v-model="editForm.bachelorStudy" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="获学士学位专业">
            <el-input v-model="editForm.bachelorMajor"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业学校" prop="groupName" >
            <el-select v-model="editForm.gradSchool" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业专业" prop="groupName" >
            <el-select v-model="editForm.gradMajor" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="毕业专业备注">
            <el-input v-model="editForm.majorNote"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业年月" prop="groupName" >
            <el-input v-model="editForm.gradDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="获硕士学位方式">
            <el-select v-model="editForm.masterWay" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="最后学历" prop="groupName" >
            <el-select v-model="editForm.lastExperience" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="最后学位">
            <el-select v-model="editForm.lastDegree" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="报考专业" prop="groupName" >
            <el-select v-model="editForm.applyMajor" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="报考语言">
            <el-input v-model="editForm.applyLanguage"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="报考博导" prop="groupName" >
            <el-select v-model="editForm.applyMajorTutor" style="width: 100%"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item label="研究方向" prop="groupName" >
            <el-input v-model="editForm.direction"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item label="发表文章情况">
            <el-input :rules=" [ { min: 0, max:2000, message: '长度小于2000字符', trigger: 'blur' }]" placeholder="限填写一篇"
                      type="textarea"
                      v-model="editForm.articles"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="g-title">个人简历</div>
       <div style="width:100%;display: flex;align-items: center;justify-content: space-between;margin-bottom: 10px;" v-for="(item,index) in editForm.resume">

          <el-col :span="4">
            <el-input placeholder="起止年月(年.月--年.月)" v-model="item.year"></el-input>
          </el-col>

          <el-col :span="3">
            <el-input placeholder="地点" v-model="item.place"></el-input>
          </el-col>

          <el-col :span="3">
            <el-input placeholder="部门" v-model="item.apart"></el-input>
          </el-col>
          <el-col :span="3">
            <el-input placeholder="职务" v-model="item.work"></el-input>
          </el-col>
          <div >
          <el-button @click="editForm.resume.splice(index,1)" type="danger" >删除
          </el-button>
          <el-button @click="editForm.resume.push({
                      year: '',
                      place: '',
                      apart: '',
                      work:''
        })" icon="el-icon-circle-plus-outline" style="margin:0 0 15px 15px;" type="primary">添加一条
          </el-button>
        </div>

       </div>
    <div style="margin:35px;display: flex;align-items: center;justify-content: center;">
      <el-button @click="" style="width: 200px;height: 50px;" type="success">提交</el-button>
    </div>
    </div>

</template>

<script>
  import {physicalexaminationReportView } from '@/api/doctor'
  export default {
    name: 'PerfectInfo',
    data() {
      return {
        editForm:{
          aa:'',
          perName : '',
          sex : '',
          birthday : '',
          perIdCard : '',
          peopleCode : '',
          politicalStatus : '',
          hometown : '',
          provinc : '',
          city : '',
          workplaceName : '',
          grade : '',
          address : '',
          postalcode : '',
          telephone : '',
          mobilephone : '',
          email : '',
          profession : '',
          bachelorStudy : '',
          bachelorMajor : '',
          gradSchool : '',
          gradMajor : '',
          gradDate : '',
          masterWay : '',
          lastExperience : '',
          lastDegree : '',
          applyMajor : '',
          applyLanguage : '',
          applyMajorTutor : '',
          direction : '',
          majorNote : '',
          articles : '',
          resume:[
            {
              year: '',
              place: '',
              apart: '',
              work: '',
            },
          ],
        },
        genders: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
      }
    },
    created() {

    },
    methods: {

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
