import {Container,Main,Footer,Header} from "element-ui";
const element = {
    install: function (Vue) {
        Vue.use(Container)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Header)
    }
}
export default element