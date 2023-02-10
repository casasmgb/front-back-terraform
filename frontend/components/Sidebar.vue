<template>
  <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style">
    <v-list dense class="pt-3 white--text" >

      <v-chip
        color="primary"
        class="ma-2"
        v-for="source in sources"
        :key="source.id"
        @click="selectSource(source.id)"
      >
          <v-avatar size="3px">
                <img
                  class="img-circle elevation-7 mb-1"
                  :src="getImgUrl(source.id)" />
          </v-avatar>



          <v-card-title>{{ source.name }}</v-card-title>
      </v-chip>
    </v-list>
      
  </v-navigation-drawer>
</template>


<script>
import axios from 'axios'

export default {

 props: {
      api_key: String,
      drawer: Boolean
    },

  data: () => ({
    sources: [],
    languages: [],
    errors: []
  }),

created () {
    axios.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
      .then(response => {
        //this.articles = response.data.articles
        this.sources = response.data.sources
        this.languages = response.data.sources.language

      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
      getImgUrl(pic) {
         return require('../assets/images/'+pic+'.png')
      },

      selectSource(source){
        this.$emit('selectsource',source)
      }
  },
  selectLanguage(language){
        this.$emit('selectLanguage',language)
  }
}
</script>