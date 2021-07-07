const getIconUrl = function (ctx) {
    const { siteUrl } = ctx.request.body

    return new Promise((resolve, reject) => {
        const website = siteUrl.split('/').slice(0, 3).join('/')
        const protocol = website.includes('https') ? 'https:' : 'http:'
        ctx.http.get(siteUrl).then((data) => {
            const html = data
            //匹配规则1
            let reg = /href.*?\.ico/gi
            let iconUrl = html.match(reg)
            if (iconUrl) {
                let result = iconUrl[0].split('=').pop().substr(1)
                if (result.includes('http')) {
                    resolve(result)
                } else if (result.includes('//')) {
                    resolve(protocol + result)
                }
                else {
                    if (result[0] === '/') {
                        resolve(website + result)
                    } else {
                        resolve(website + '/' + result)
                    }

                }
            } else {
                //匹配规则2     
                let reg2 = /rel=.*?\.png/gi
                let result2 = html.match(reg2)
                if (result2) {
                    let iconUrl = result2[0].split("href=").pop().substr(1)
                    if (iconUrl.includes('http')) {
                        resolve(iconUrl)
                    } else if (iconUrl.includes('//')) {
                        resolve(protocol + iconUrl)
                    } else {
                        if (iconUrl[0] === '/') {
                            resolve(website + iconUrl)
                        } else {
                            resolve(website + '/' + iconUrl)
                        }

                    }
                } else {
                    resolve(website + '/favicon.ico')
                }
            }
            }, (err) => {
                reject(err)
            })

    })
}

module.exports = {
    getIconUrl
}