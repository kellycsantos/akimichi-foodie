import axios from "axios"

export const baseUrl = 'https://web-661jpg3gcv5j.up-pl-waw1-k8s-1.apps.prod.run-on-seenode.com/'

export default async function getMenu(){
   await axios.get(baseUrl+ 'menu')
    .then(response => {
        return response})
}