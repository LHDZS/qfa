let serverPath = 'http://www.wenzhang.xiaoniren.cn'

export const http = 'http://www.wenzhang.xiaoniren.cn'

export function post (url, body) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
export function get (url, body) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
export function del (url, body) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'DELETE',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(serverPath + url)
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
export function put (url, body) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'PUT',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(serverPath + url)
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
