<template>
    <v-app>
        <br />
        <div>
            <h2>{{ title }}</h2>
            <br />
            <v-card rounded class="mx-auto" color="light-blue lighten-5" max-width="500" centered outlined>

                <form>
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="100" label="Enter Name" required
                        @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>

                    <v-text-field v-model="description" :error-messages="emailErrors" label="Enter Description" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>

                    <v-text-field v-model="link" :error-messages="emailErrors" label="Enter Link" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>

                    <v-btn class="mr-4" color="success" @click="onSubmit">
                        submit
                    </v-btn>
                </form>
            </v-card>
            <!-- <form @submit.prevent="onSubmit" @input="setDirty()" novalidate="true">
                <p>
                    <label for="name">Enter Title:</label>
                    <input id="name" v-model="name" required />
                    <span id="error" v-if="errors && errors.name">{{ errors.name }}</span>
                </p>

                <p>
                    <label for="description">Description:</label>
                    <input id="description" v-model="description" required />
                </p>

                <p>
                    <label for="link">Link:</label>
                    <input type="url" id="link" v-model="link" required />
                </p>

                <p>
                    <button type="submit" v-bind:disabled="formInvalid">Submit</button>
                </p>
            </form> -->
        </div>
    </v-app>
</template>

<script>
import ResourceApi from './data/ResourceApi';
export default {
    name: 'AddResources',
    beforeRouteLeave(to, from, next) {
        if (this.dirty && !this.submitted) {
            const response = confirm('Are your sure want to leave ?');
            next(response);
        }
        else {
            next(true);
        }
    },
    data() {
        return {
            title: 'Add Resource Form',
            name: 'null',
            year: '',
            price: '',
            submitted: false,
            formInvalid: true,
            dirty: false,
            errors: null,
        };
    },
    methods: {
        setDirty() {
            this.dirty = true;
        },
        checkError(name) {
            this.errors = {
                name: null,
            };
            if (!name) {
                this.errors.name = 'Name required';
            }
            else if (name.length < 3) {
                this.errors.name = 'Name should have minimum 3 characters';
            }
            if (this.errors.name) {
                this.formInvalid = true;
                return true;
            }
            this.formInvalid = false;
            return false;
        },
        onSubmit() {
            console.log(`IsDirty ${this.dirty}`);
            if (this.checkError(this.name)) return;
            ResourceApi.addResource(this.name, this.description, this.link)
                .then(() => this.getAllResources())
                .catch((error) => console.log(error.message));
            this.submitted = true;
            this.$router.push({ name: 'StoredResources' });
        },

    },
    watch: {
        name(newVal) {
            this.checkError(newVal);
        },
    },
};
</script>

<style>
h2 {
    text-align: center;
}
</style>