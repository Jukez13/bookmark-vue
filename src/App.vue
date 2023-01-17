<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-spacer />
        <v-toolbar-title>Remember Me!</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
    </div>
    <br /> <br />
    <v-tabs fixed-tabs centered>
      <v-tab><router-link :to="{ name: 'StoredResources' }" style="padding-right:40px">
          Stored Resources
        </router-link>
      </v-tab>
      <v-tab>
        <router-link :to="{ name: 'AddResources' }" style="padding-right:40px">
          Add Resources
        </router-link>
      </v-tab>
    </v-tabs>
    <router-view />

  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

