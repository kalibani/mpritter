<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
                <a href="#" class="active" id="login-form-link">Login</a>
              </div>
              <div class="col-xs-6">
                <a href="#" id="register-form-link">Register</a>
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" v-on:submit.prevent="doLogin(login)" role="form" style="display: block;">
                  <div class="form-group">
                    <input type="username" name="username" tabindex="1" class="form-control" v-model="login.username" placeholder="Username" required>
                  </div>
                  <div class="form-group">
                    <input type="password" name="password"  tabindex="2" class="form-control" v-model="login.password" placeholder="Password" required>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Login">
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" v-on:submit.prevent="doRegister(register)" role="form" style="display: none;">
                  <div class="form-group">
                    <input type="email" name="email" id="email" tabindex="1" class="form-control" v-model="register.email" placeholder="email" required>
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" id="password" tabindex="2" class="form-control" v-model="register.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <input type="text" name="username" id="username" tabindex="1" class="form-control" v-model="register.username" placeholder="Username" required>
                  </div>
                  <div class="form-group">
                    <input type="text" name="fullname" id="fullname" tabindex="1" class="form-control" v-model="register.fullname"placeholder="Fullname" required>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'LoginRegister',
    data () {
      return {
        login: {
          username: '',
          password: ''
        },
        register: {
          email: '',
          password: '',
          username: '',
          fullname: ''
        }
      }
    },

    beforeCreate(){
      let token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/home')
      }else {
        this.$router.push('/')
      }
    },

    methods: {
      ...mapActions([
        'doRegister',
        'doLogin'
      ])
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  @import "../assets/loginregister.css";
</style>
