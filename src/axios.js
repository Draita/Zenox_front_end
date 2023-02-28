import axios from "axios";
import config from "@/config";

axios.defaults.baseURL = 'https://zenox-back-end.azurewebsites.net/';
axios.defaults.withCredentials = true