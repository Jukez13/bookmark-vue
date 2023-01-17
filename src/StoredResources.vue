<template>
    <v-app>
        <div>
            <br /> <br />
            <div id="res" v-if="resources && resources.length">
                <div v-for="(resource) in resources" :key="resource.id">
                    <br />
                    <v-card rounded class="mx-auto" color="light-blue lighten-5" max-width="600" centered outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div>
                                    <b>Title : {{ resource.title }}</b>
                                    <br /> <br />
                                </div>
                                <div>
                                    Description : {{ resource.description }}
                                    <br /> <br />
                                </div>
                                <div>
                                    Link: <a v-bind:href="resource.link"> CLick Here to know more!</a>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions>
                            <v-btn @click="deleteResource(resource.id)" depressed color="error">
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
            <div v-else-if="isloading">
                <p class="loading">Loading resources data from the server, please wait!</p>
            </div>
            <div v-else>
                <h3 class="error">No resource data available</h3>
            </div>

        </div>
    </v-app>
</template>

<script>
import ResourceApi from './data/ResourceApi';
export default {
    name: 'StoredResources',
    data() {
        return {
            resources: [],
            isloading: true,

        };
    },
    mounted() {
        this.getAllResources();
    },
    methods: {
        getAllResources() {
            ResourceApi.getAllResources()
                .then((data) => {
                    this.resources = data;
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .finally(() => {
                    this.isloading = false;
                })
        },
        addResources(newtitle, newdescription, newlink) {
            ResourceApi.addResource(newtitle, newdescription, newlink)
                .then(() => this.getAllResources())
                .catch((error) => console.log(error.message));
        },
        deleteResource(resid) {
            ResourceApi.deleteResource(resid)
                .then(() => this.getAllResources())
                .catch((error) => console.log(error.message));

        },


    },

};
</script >

<style scoped>
#res {
    text-align: center;
}
</style>