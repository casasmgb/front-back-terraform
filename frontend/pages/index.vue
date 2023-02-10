<template>
  <div>
    <Sidebar :drawer="true" :api_key="api_key" @selectsource="setResource" ></Sidebar>
       <Article :articles="articles"></Article>
      </div>
    </template>
</template>
<script>
import axios from "axios";
import Article from '../components/Article';
import Sidebar from '../components/Sidebar'; // import the SideMenu component
export default {
  components: {
    Article,
    Sidebar
  },
  head () {
    return {
    title: 'News Aggregator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'keyword 1, keyword 2'},
      { hid: 'description', name: 'description', content: 'A news aggregator'}
    ],
    }
  },
  data () {
    return {
      articles: [],
      api_key:'9ea1ab728d064e058f5615edc94bf515', 
      drawer: false
    } 
  },

  async created() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }

    try {
    const res = await axios.get(this.$env.get() + 'news', config);
          this.articles = res.data.articles;
          console.log(this.articles);
    } catch (err) {
  console.log(err);
    }
  },

      methods: {
            setResource(source){             
              axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
              .then(response => {
                this.articles = response.data.articles
                console.log(response.data)             
              })
              .catch(e => {
                this.errors.push(e)
              })

            }
         }
}
</script>