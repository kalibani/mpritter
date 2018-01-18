<template lang="html">
  <div class="">
    <h1 class="page-header">My Profile</h1>
    <div class="row">
      <!-- left column -->
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="text-center">
          <div v-if="!user.image">
            <h2>Select an image</h2>
            <input type="file" class="text-center center-block well well-sm" @change="onFileChange">
          </div>
          <div v-else>
            <img class="avatar img-circle img-thumbnail" alt="avatar" :src="user.image"/>
            <br><br>
            <input type="file" class="text-center center-block well well-sm" @change="onFileChange">
          </div>
        </div>
      </div>
      <!-- edit form column -->
      <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
        <h3>Personal info</h3>
        <form class="form-horizontal"role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">Username:</label>
            <div class="col-lg-8">
              <input class="form-control" v-model="profile.username" type="text">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Fullname:</label>
            <div class="col-lg-8">
              <input type="text" v-model="profile.fullname" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input type="email" v-model="profile.email" class="form-control" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Password:</label>
            <div class="col-lg-8">
              <input type="password" v-model="user.password" class="form-control">
              <br>
              <button class="btn btn-primary" @click.prevent="updateProfiles(profile.userId)" style="float:right;">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return {
      user:{
        image: '',
        password: ''
      }
    }
  },

  computed:{
    ...mapState(['profile'])
  },
  '$route' (to, from) {
    this.getProfile()
    
  },
  created(){
    this.getProfile()
  },

  methods:{
    ...mapActions([
      'getProfile',
      'updateProfile'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.user.image = files[0]
    },
    updateProfiles (id) {
      let obj = {
        id: id,
        username: this.profile.username,
        fullname: this.profile.fullname,
        password: this.user.password,
        image: this.user.image
      }
      this.updateProfile(obj)
    }
  }
}
</script>

<style lang="css">
</style>
