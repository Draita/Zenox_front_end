import axios from "axios";
import config from "@/config";

axios.defaults.baseURL = 'https://zenox-back-end.onrender.com/';
axios.defaults.withCredentials = true