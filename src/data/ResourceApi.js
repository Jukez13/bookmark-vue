import axios from 'axios';

export default class ResourceApi {
    static resourcesUrl = 'http://localhost:3001/resources';

    static getAllResources() {
        console.log(this.resourcesUrl);
        return new Promise((resolve, reject) => {
            axios.get(this.resourcesUrl)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }

    static addResource(newtitle, newdescription, newlink) {

        const newResource = {
            title: `${newtitle}`,
            description: `${newdescription}`,
            link: `${newlink}`
        }
        return new Promise((resolve, reject) => {
            axios.post(this.resourcesUrl, newResource)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
            axios.get(this.resourcesUrl)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });

    }
    static deleteResource(resid) {
        const deleteResourceUrl = `${this.resourcesUrl}/${resid}`
        return new Promise((resolve, reject) => {
            axios.delete(deleteResourceUrl)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
}