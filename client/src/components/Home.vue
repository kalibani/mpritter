<template lang="html">
  <div class="container">
    <br>
    <Header/>
	  <div class="row">
      <div class="col-lg-12">
		    <div class="well well-lg">
          <div class="media1">
            <a class="pull-left" href="#">
            <img class="media-object img-circle" width="80px" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png">
            </a>
            <div class="media-body">
              <div class="form-group" style="padding:12px;">
                <textarea class="form-control animated" v-model="twitter.isi" placeholder="Update your status"></textarea>
                <button class="btn btn-info pull-right" @click = "postTweet(twitter)" style="margin-top:10px" type="button">Share</button>
              </div>
            </div>
          </div>
        </div>
	    </div>
    </div>
    <div class="well well-lg">
      <ul>
        <li class="clearfix">
          <img style="float:left;"class="media-object img-circle" width="80px" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png">
          <div class="legend-info" style="width: 90%;">
            <strong> nama </strong>
            <p>twitt</p>
          </div>
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


    created(){

    },

    methods:{
      ...mapActions(['postTweet'])
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
