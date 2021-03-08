import axios from "axios";
export default class Singer {
    /**
     * 获取排行榜
     * @returns {Promise<unknown>}
     */
    static getRank (option) {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: '/api/toplist/detail',
                params: option
            })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }
}
