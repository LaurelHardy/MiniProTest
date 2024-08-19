import base from './base'

// getIndexData
export default (url, data={}, method='GET')=> {
	return new Promise((resolve, reject)=> {
		uni.request({
		    // url: base.host+url, // 小程序
			url, // H5
		    data,
			method,
		    /** header: {
		        'custom-header': 'hello' //自定义请求头信息
		    }, */
		    success: (res) => {
		        resolve(res.data);
		    },
			fail:(err) => {
				reject(err)
			}
		});
	})
}