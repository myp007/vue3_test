/*
 * @Author: m
 * @Date: 2024-11-02 10:53:10
 * @LastEditTime: 2024-11-02 14:21:34
 * @Description: 首页mock数据
 * @FilePath: \website\src\mock\data\home.js
 */
export default {
    getHomeData: () => {
        return {
            code: '200',
            data: {
                wins_list: [
                    { type: 'M', id: '10' },
                    { type: 'W', id: '11' },
                    { type: 'D', id: '12' },
                    { type: 'RT', id: '13' },
                    { type: 'M', id: '14' },
                    { type: 'W', id: '15' }
                ]
            }
        }
    }
}
