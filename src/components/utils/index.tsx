import axios from "axios"
import { base_uri } from "../../app/config"

export const getCharacter = async () => {
    // try {
    //     const url = await fetch(base_uri);
    //     const data = await url.json();
    //     const results = data.results;
    //     console.log(results)
    // } catch(e) {
    //     console.log(e)
    // }

    // fetch(base_uri)
    //     .then( res => {
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then( res => {
    //         const data = res.results
    //         console.log(data)
    //     })
    //     .catch( e => console.log(e))


    // WITH AXIOS:

    // axios.get(base_uri)
    //     .then((res) => {
    //         const data = res.data;
    //         const results = data.results
    //         console.log(results);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });

    // with try and catch
}