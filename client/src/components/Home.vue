<template lang="html">
  <div class="container">
    <br>
    <Header/>
	  <div class="row">
      <br>
      <span class="pull-right" style="margin-right:2%;">
        <button type="button" @click="logout" class="btn btn-sm btn-danger" name="button">
          <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
        </button>
      </span>
      <br><br>
      <div class="col-lg-12">
		    <div class="well well-lg">
          <div class="media1">
            <a class="pull-left" href="#">
            <img class="media-object img-circle" width="80px" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png">
            </a>
            <div class="media-body">
              <div class="form-group" style="padding:12px;">
                <textarea class="form-control animated" v-model="twitter.isi" placeholder="Update your status"></textarea>
                <button class="btn btn-info pull-right" @click = "postTweet(twitter).then(getAllTweet()).then(clear())" style="margin-top:10px" type="button">Share</button>
              </div>
            </div>
          </div>
        </div>
	    </div>
    </div>
    <div class="well well-lg" v-for="t in twits">
      <ul>
        <li class="clearfix">
          <img style="float:left;"class="media-object img-circle" width="10%" v-if = "t.posted_by.image" :src="t.posted_by.image" alt="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png">
          <div class="legend-info" style="margin-left:12%;">
            <strong> {{t.posted_by.username}} </strong>
            <p>{{t.isi}}</p>
          </div>
          <span class="pull-right" v-if="profile.userId == t.posted_by._id">
            <button type="button" @click="deleteTwit(t._id).then(getAllTweet())" class="btn btn-sm btn-danger" name="button">
              <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
            </button>
            <button type="button" @click="toProfile" class="btn btn-sm btn-info" name="button">
              <i class="fa fa-user" aria-hidden="true"></i> Profile
            </button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Header from '@/components/Header'
  export default {
    data(){
      return {
        twitter: {
          isi : ''
        }
      }
    },

    components:{
      Header
    },

    computed:{
      ...mapState([
        'twits',
        'profile'
      ]),
      clear(){
        this.twitter = ''
      }
    },

    created(){
      this.getAllTweet()
      this.getProfile()
    },

    methods:{
      ...mapActions([
        'postTweet',
        'getAllTweet',
        'getProfile',
        'deleteTwit'
      ]),

      toProfile() {
        this.$router.push({ name: 'Profile', params: { id: this.profile.userId }})
      },
      logout(){
        localStorage.removeItem('token')
        location.reload()
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="css">
  .animated {
    -webkit-transition: height 0.2s;
    -moz-transition: height 0.2s;
    transition: height 0.2s;
  }



</style>
