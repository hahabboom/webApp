import axios from "axios";
export default class Singer {
    /**
     * 获取歌手
     * @returns {Promise<unknown>}
     */
    static getSInger (option) {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: '/api/artist/list',
                params: option
            })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }
}
