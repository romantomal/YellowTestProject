import axios from "axios";

export default axios.create({
    baseURL: "https://yellow-test-project.herokuapp.com/",
    responseType: "json"
});
