import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer QEstNkGCWpw9aF2hQPYGudyoSiUdf29k69Putu4VEINzj0_KAO2ILlyNSwaxrjnBIVST_CB8ca-cyhnEH-bCzohaMtrB1G2h1VHXXecf4bIgqgUi_KngabPNVXhsYnYx'
    }
});

