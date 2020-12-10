<template>
  <div class="app-container">
    <div class="g-title">完善信息</div>



    <el-form :model="editForm" label-width="40%" style="width: 100%;align-content: center;display: contents">
      <div style="border: 1px solid seagreen;width: 150px;height: 200px;position: absolute; right:20px;">

        <img :src="signature" alt="未上传图片" @click="sctp"  style="width: 150px;height: 200px;z-index: 99;position: absolute;">

      </div>
      <fileupload
        url="/web/uploadImageFileNew"
        accepttype=".jpg"
        @successcallback="onSuccess"
        @preview="onPreview"
        style="position: absolute; right:60px;top: 320px;z-index: 99;"
      >上传图片
      </fileupload>
      <el-row>
        <el-col :span="9">
          <el-form-item label="姓名" prop="groupName">
            <el-input style="width: 200px;" v-model="editForm.perName" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="性别">
            <el-select v-model="editForm.sex" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in sexList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="出生日期" prop="groupName">
            <el-date-picker
              v-model="editForm.birthday"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
              style="width: 200px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="证件号码">
            <el-input style="width: 200px;" v-model="editForm.perIdCard" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="民族" prop="groupName">
            <el-select v-model="editForm.peopleCode" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in peopleCodeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="政治面貌">
            <el-select v-model="editForm.politicalStatus" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in politicalStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="籍贯" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.hometown" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="工作单位所在地">
            <el-select v-model="editForm.province" style="width: 200px" placeholder="请选择" @change="getCity">
              <el-option
                v-for="item in provinceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select><el-select v-model="editForm.city" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="工作单位名称" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.workplaceName" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="职称">
            <el-select v-model="editForm.grade" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in gradeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="通讯地址" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.address" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="邮政编码">
            <el-input style="width: 200px" v-model="editForm.postalcode" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="固定电话" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.telephone" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="移动电话">
            <el-input style="width: 200px" v-model="editForm.mobilephone" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="电子邮箱" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.email" />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="从事专业">
            <el-input style="width: 200px" v-model="editForm.profession" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="本科学习形式" prop="groupName">
            <el-select v-model="editForm.bachelorStudy" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in bachelorStudyList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="获学士学位专业">
            <el-select v-model="editForm.bachelorMajor" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in bachelorMajorList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业学校" prop="groupName">
            <el-select v-model="editForm.gradSchool" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in gradSchoolList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业专业" prop="groupName">
            <el-select v-model="editForm.gradMajor" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in gradMajorList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="毕业专业备注">
            <el-input style="width: 200px" v-model="editForm.majorNote" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="硕士毕业年月" prop="groupName">
            <el-date-picker
              v-model="editForm.gradDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
              style="width: 200px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="获硕士学位方式">
            <el-select v-model="editForm.masterWay" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in masterWayList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="最后学历" prop="groupName">
            <el-select v-model="editForm.lastExperience" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in lastExperienceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="最后学位">
            <el-select v-model="editForm.lastDegree" style="width: 200px" placeholder="请选择">
              <el-option
                v-for="item in lastDegreeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="报考专业" prop="groupName">
            <el-select v-model="editForm.applyMajor" style="width: 200px" placeholder="请选择" @change="getTutor">
              <el-option
                v-for="item in applyMajorList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item style="margin-left: 100px;" label="报考语言">
            <el-input style="width: 200px" value="英语" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="报考博导" prop="groupName">
            <el-select v-model="editForm.applyMajorTutor" style="width: 200px" @change="getDirection">
              <el-option
                v-for="item in applyMajorTutorList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="研究方向" prop="groupName">
            <el-input style="width: 200px" v-model="editForm.direction" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="发表文章情况">
            <el-input
              style="width: 600px"
              v-model="editForm.articles"
              :rules=" [ { min: 0, max:2000, message: '长度小于2000字符', trigger: 'blur' }]"
              placeholder="限填写一篇"
              type="textarea"
              :autosize="{ minRows: 8,maxRows: 12}"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>


    <div class="g-title">个人简历
      <el-button
        icon="el-icon-circle-plus-outline"
        type="primary"
        @click="editForm.resume.push({
          startEndMon: '',
          placeUnit: '',
          depart: '',
          expDuty:''
        })"
      >添加一条
      </el-button>
    </div>
    <div v-for="(item,index) in editForm.resume" style="width:100%;display: flex;align-items: center;justify-content: space-between;margin-bottom: 10px;">

      <el-col :span="4">
        <el-input v-model="item.startEndMon" placeholder="起止年月(年.月--年.月)" />
      </el-col>

      <el-col :span="3">
        <el-input v-model="item.placeUnit" placeholder="地点" />
      </el-col>

      <el-col :span="3">
        <el-input v-model="item.depart" placeholder="部门" />
      </el-col>
      <el-col :span="3">
        <el-input v-model="item.expDuty" placeholder="职务" />
      </el-col>
      <div>
        <el-button type="danger" @click="editForm.resume.splice(index,1)">删除
        </el-button>
      </div>

    </div>
    <div style="margin:35px;display: flex;align-items: center;justify-content: center;">
      <el-button style="width: 200px;height: 50px;" type="success" @click="submit">提交</el-button>
    </div>
  </div>

</template>

<script>
  import fileupload from '../../components/upload/fileupload'
import { getBasePeopleCode, getSex, getPoliticalStatus, getBaseProTown, getCityByProvince, getGrade, getBachelorStudy, getBachelorDegree, getGradSchool, getGradMajor, getInitResume, getMasterDegree, getLastExperienceList, getDegreeList, getApplyMajor, getApplyTutor, getResearchDirection, doctorRecruitSubmit, getInitInfo } from '@/api/doctor'
export default {
  name: 'PerfectInfo',
  data() {
    return {
      signature: '',
      url: '/func/web/uploadImageFileNew',
      serverAddres:'',
      gradeList: [],
      cityList: [],
      provinceList: [],
      majorId: '',
      applyMajorTutorList: [],
      applyMajorList: [],
      lastDegreeList: [],
      lastExperienceList: [],
      masterWayList: [],
      gradSchoolList: [],
      gradMajorList: [],
      bachelorMajorList: [],
      bachelorStudyList: [],
      politicalStatusList: [],
      sexList: [],
      peopleCodeList: [],
      editForm: {
        aa: '',
        perName: '',
        sex: '',
        birthday: '',
        perIdCard: '',
        peopleCode: '',
        politicalStatus: '',
        hometown: '',
        provinc: '',
        city: '',
        workplaceName: '',
        grade: '',
        address: '',
        postalcode: '',
        telephone: '',
        mobilephone: '',
        email: '',
        profession: '',
        bachelorStudy: '',
        bachelorMajor: '',
        gradSchool: '',
        gradMajor: '',
        gradDate: '',
        masterWay: '',
        lastExperience: '',
        lastDegree: '',
        applyMajor: '',
        applyMajorTutor: '',
        direction: '',
        majorNote: '',
        articles: '',
        resume: [
          {
            depart: '',
            expDuty: '',
            placeUnit: '',
            startEndMon: ''
          }
        ]
      },
      genders: [{
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }]
    }
  },
  components: { fileupload },
  created() {
    this.fetchData()
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSuccess(response, file, fileList) {
      if(response.re == 1){
        this.$message({
          message: '上传成功',
          type: 'success'
        });
        this.fetchData()
      }
      else{
        this.$message({
          message: response.data,
          type: 'error'
        });
      }
    },
    sctp() {
      this.$refs.okdo.submit
    },
    submit() {
      if (this.editForm.perName === '' || this.editForm.perName === undefined) {
        this.$message({
          type: 'error',
          message: '姓名不能为空'
        })
      } else if (this.editForm.peopleCode === '' || this.editForm.peopleCode === undefined) {
        this.$message({
          type: 'error',
          message: '民族不能为空'
        })
      } else if (this.editForm.sex === '' || this.editForm.sex === undefined) {
        this.$message({
          type: 'error',
          message: '姓别不能为空'
        })
      } else if (this.editForm.birthday === '' || this.editForm.birthday === undefined) {
        this.$message({
          type: 'error',
          message: '出生日期不能为空'
        })
      } else if (this.editForm.politicalStatus === '' || this.editForm.politicalStatus === undefined) {
        this.$message({
          type: 'error',
          message: '政治面貌不能为空'
        })
      } else if (this.editForm.hometown === '' || this.editForm.hometown === undefined) {
        this.$message({
          type: 'error',
          message: '籍贯不能为空'
        })
      } else if (this.editForm.province === '' || this.editForm.province === undefined) {
        this.$message({
          type: 'error',
          message: '工作单位所在地不能为空'
        })
      } else if (this.editForm.city === '' || this.editForm.city === undefined) {
        this.$message({
          type: 'error',
          message: '工作单位所在地不能为空'
        })
      } else if (this.editForm.workplaceName === '' || this.editForm.workplaceName === undefined) {
        this.$message({
          type: 'error',
          message: '工作单位名称不能为空'
        })
      } else if (this.editForm.address === '' || this.editForm.address === undefined) {
        this.$message({
          type: 'error',
          message: '通讯地址不能为空'
        })
      } else if (this.editForm.mobilephone === '' || this.editForm.mobilephone === undefined) {
        this.$message({
          type: 'error',
          message: '移动电话不能为空'
        })
      } else if (this.editForm.email === '' || this.editForm.email === undefined) {
        this.$message({
          type: 'error',
          message: '电子邮箱不能为空'
        })
      } else if (this.editForm.profession === '' || this.editForm.profession === undefined) {
        this.$message({
          type: 'error',
          message: '从事专业不能为空'
        })
      } else if (this.editForm.bachelorStudy === '' || this.editForm.bachelorStudy === undefined) {
        this.$message({
          type: 'error',
          message: '本科学习形式不能为空'
        })
      } else if (this.editForm.bachelorMajor === '' || this.editForm.bachelorMajor === undefined) {
        this.$message({
          type: 'error',
          message: '获得学士学位专业不能为空'
        })
      } else if (this.editForm.gradSchool === '' || this.editForm.gradSchool === undefined) {
        this.$message({
          type: 'error',
          message: '硕士毕业学校不能为空'
        })
      } else if (this.editForm.gradDate === '' || this.editForm.gradDate === undefined) {
        this.$message({
          type: 'error',
          message: '硕士毕业年月不能为空'
        })
      } else if (this.editForm.gradMajor === '' || this.editForm.gradMajor === undefined) {
        this.$message({
          type: 'error',
          message: '硕士毕业专业不能为空'
        })
      } else if (this.editForm.masterWay === '' || this.editForm.masterWay === undefined) {
        this.$message({
          type: 'error',
          message: '获硕士学位方式不能为空'
        })
      } else if (this.editForm.grade === '' || this.editForm.grade === undefined) {
        this.$message({
          type: 'error',
          message: '职称不能为空'
        })
      } else if (this.editForm.lastExperience === '' || this.editForm.lastExperience === undefined) {
        this.$message({
          type: 'error',
          message: '最后学历不能为空'
        })
      } else if (this.editForm.lastDegree === '' || this.editForm.lastDegree === undefined) {
        this.$message({
          type: 'error',
          message: '最后学位不能为空'
        })
      } else if (this.editForm.birthday === '' || this.editForm.birthday === undefined) {
        this.$message({
          type: 'error',
          message: '出生日期不能为空'
        })
      } else if (this.editForm.applyMajor === '' || this.editForm.applyMajor === undefined) {
        this.$message({
          type: 'error',
          message: '报考专业不能为空'
        })
      } else if (this.editForm.applyMajorTutor === '' || this.editForm.applyMajorTutor === undefined) {
        this.$message({
          type: 'error',
          message: '报考博导不能为空'
        })
      } else {
        doctorRecruitSubmit({ perName: this.editForm.perName, sex: this.editForm.sex, birthday: this.editForm.birthday, peopleCode: this.editForm.peopleCode, politicalStatus: this.editForm.politicalStatus, hometown: this.editForm.hometown, province: this.editForm.province, city: this.editForm.city, workplaceName: this.editForm.workplaceName, grade: this.editForm.grade, postalcode: this.editForm.postalcode, telephone: this.editForm.telephone, mobilephone: this.editForm.mobilephone, email: this.editForm.email, profession: this.editForm.profession, address: this.editForm.address, bachelorStudy: this.editForm.bachelorStudy, bachelorMajor: this.editForm.bachelorMajor, gradSchool: this.editForm.gradSchool, gradMajor: this.editForm.gradMajor, gradDate: this.editForm.gradDate, masterWay: this.editForm.masterWay, lastExperience: this.editForm.lastExperience, lastDegree: this.editForm.lastDegree, applyMajor: this.editForm.applyMajor, applyMajorTutor: this.editForm.applyMajorTutor, direction: this.editForm.direction, articles: this.editForm.articles, majorNote: this.editForm.majorNote, resume: this.editForm.resume }).then(res => {
          if (res.re === 1) {
            this.$message({
              type: 'sucess',
              message: '提交成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: '提交失败'
            })
          }
        })
      }
    },
    getCity() {
      this.editForm.city = ''
      getCityByProvince({ province: this.editForm.province }).then(res => {
        this.editForm.city = ''
        this.cityList = res.data
      })
    },
    getDirection() {
      getResearchDirection({ tutorId: this.editForm.applyMajorTutor }).then(res => {
        this.editForm.direction = res
      })
    },
    getTutor() {
      this.editForm.applyMajorTutor = []
      getApplyTutor({ majorId: this.editForm.applyMajor }).then(res => {
        if (res.re === 1) {
          this.applyMajorTutorList = res.data
        } else {
          console.log(res)
        }
      })
    },
    fetchData() {

      this.url = '/func/web/uploadImageFileNew'
      this.serverAddres = this.GLOBAL.servicePort
      getInitInfo().then(res => {

        this.editForm.perName = res.infoPersonInfoDoctorRecruit.infoPersonInfo.perName
        this.editForm.email = res.infoPersonInfoDoctorRecruit.infoPersonInfo.email
        if (res.infoPersonInfoDoctorRecruit.infoPersonInfo.genderCode !== '0') {
          this.editForm.sex = res.infoPersonInfoDoctorRecruit.infoPersonInfo.genderCode
        }
        this.editForm.mobilephone = res.infoPersonInfoDoctorRecruit.infoPersonInfo.mobilePhone
        this.editForm.address = res.infoPersonInfoDoctorRecruit.infoPersonInfo.perAddress
        this.editForm.birthday = new Date(res.infoPersonInfoDoctorRecruit.infoPersonInfo.perBirthday)
        this.editForm.perIdCard = res.infoPersonInfoDoctorRecruit.infoPersonInfo.perIdCard
        this.editForm.gradDate = new Date(res.masterDate)
        this.editForm.postalcode = res.infoPersonInfoDoctorRecruit.infoPersonInfo.perPostalCode
        if (res.infoPersonInfoDoctorRecruit.peopleId !== 0) {
          this.editForm.peopleCode = res.infoPersonInfoDoctorRecruit.peopleId + ''
        }
        this.editForm.collegeId = res.infoPersonInfoDoctorRecruit.collegeId
        this.editForm.lastDegree = res.infoPersonInfoDoctorRecruit.lastDegree
        this.editForm.lastExperience = res.infoPersonInfoDoctorRecruit.lastStudyLevel
        this.editForm.hometown = res.infoPersonInfoDoctorRecruit.perNativePlace
        this.editForm.telephone = res.infoPersonInfoDoctorRecruit.perTelephone
        this.editForm.politicalStatus = res.infoPersonInfoDoctorRecruit.politicsCode
        this.editForm.grade = res.infoPersonInfoDoctorRecruit.proTechPositionCode
        if (res.bachelorMajorId !== undefined) {
          this.editForm.bachelorMajor = res.bachelorMajorId + ''
        }
        this.editForm.profession = res.devoteMajor
        this.editForm.province = res.workProvince
        this.editForm.city = res.workCity
        this.editForm.bachelorStudy = res.studyForm
        this.editForm.majorNote = res.majorNote
        this.editForm.workplaceName = res.workUnit
        if (res.masterMajorId !== undefined) {
          this.editForm.gradMajor = res.masterMajorId + ''
        }
        this.editForm.masterWay = res.masterDegreeForm
        this.editForm.direction = res.researchDirect
        if (res.majorId !== undefined) {
          this.editForm.applyMajor = res.majorId + ''
          getApplyTutor({ majorId: this.editForm.applyMajor }).then(res => {
            if (res.re === 1) {
              this.applyMajorTutorList = res.data
            } else {
              console.log(res)
            }
          })
          if (res.tutorId !== undefined) {
            this.editForm.applyMajorTutor = res.tutorId + ''
          }
        }

        if (res.articles !== undefined) {
          this.editForm.articles = res.articles + ''
        }
        if (res.masterCultivateUnitId !== undefined) {
          this.editForm.gradSchool = res.masterCultivateUnitId + ''
        }

        getInitResume().then(res => {
          this.editForm.resume = res.data
        })
      })
      getBasePeopleCode().then(res => {
        if (res.re === 1) {
          this.peopleCodeList = res.data
        } else {
          console.log(res)
        }
      })
      getSex().then(res => {
        if (res.re === 1) {
          this.sexList = res.data
        } else {
          console.log(res)
        }
      })
      getPoliticalStatus().then(res => {
        if (res.re === 1) {
          this.politicalStatusList = res.data
        } else {
          console.log(res)
        }
      })
      getBachelorStudy().then(res => {
        if (res.re === 1) {
          this.bachelorStudyList = res.data
        } else {
          console.log(res)
        }
      })
      getBachelorDegree().then(res => {
        if (res.re === 1) {
          this.bachelorMajorList = res.data
        } else {
          console.log(res)
        }
      })
      getGradSchool().then(res => {
        if (res.re === 1) {
          this.gradSchoolList = res.data
        } else {
          console.log(res)
        }
      })
      getGradMajor().then(res => {
        if (res.re === 1) {
          this.gradMajorList = res.data
        } else {
          console.log(res)
        }
      })
      getMasterDegree().then(res => {
        if (res.re === 1) {
          this.masterWayList = res.data
        } else {
          console.log(res)
        }
      })
      getLastExperienceList().then(res => {
        if (res.re === 1) {
          this.lastExperienceList = res.data
        } else {
          console.log(res)
        }
      })
      getDegreeList().then(res => {
        if (res.re === 1) {
          this.lastDegreeList = res.data
        } else {
          console.log(res)
        }
      })
      getApplyMajor().then(res => {
        if (res.re === 1) {
          this.applyMajorList = res.data
        } else {
          console.log(res)
        }
      })
      getBaseProTown().then(res => {
        if (res.re === 1) {
          this.provinceList = res.data
        } else {
          console.log(res)
        }
      })
      getGrade().then(res => {
        if (res.re === 1) {
          this.gradeList = res.data
        } else {
          console.log(res)
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
