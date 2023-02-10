<template>
    <v-layout row wrap align-center>
          <v-flex xs8  offset-md2>
            <div v-for="article in articles" :key="article.title">
              <v-card>
                <v-img
                  height="350px"
                  v-bind:src="article.urlToImage"
                ></v-img>
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ article.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
                <v-card-text>
                  {{ article.description }}
                </v-card-text>
                <v-card-text class="font-italic">
                  {{ article.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn disabled small color="normal">
                    {{article.source.name}}
                  </v-btn>

         <v-btn rounded color="primary" dark v-bind:href="article.url" target="_blank">Read More</v-btn>
                </v-card-actions>   
            </div>
          </v-flex>
        </v-layout>
</template>

<script>
export default {
  props: {
      articles: Array
  },
}
</script>