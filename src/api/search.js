import axios from "axios";
export default class Singer {
    /**
     * 获取热门搜索
     * @returns {Promise<unknown>}
     */
    static getHotSearch (option) {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: '/api/search/hot',
                params: option
            })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }
}
