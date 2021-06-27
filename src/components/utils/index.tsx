import { base_uri } from "../../app/config"

export const getCharacter = async () => {
    try {
        const url = await fetch(base_uri);
        const data = await url.json();
        const results = data.results;
        console.log(results)
    } catch(e) {
        console.log(e)
    }
}