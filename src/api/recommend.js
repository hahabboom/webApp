import axios from "axios";
export default class Recommand {
    /**
     * 获取banner数据
     * @returns {Promise<unknown>}
     */
    static getBanner () {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: '/api/top/playlist/highquality'
            })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }

    /**
     * 获取推荐歌单
     * @returns {Promise<unknown>}
     */
    static getsongList () {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: '/api/personalized'
            })
                .then(({ data }) => {
                    resolve(data)
                })
        })
    }
}
