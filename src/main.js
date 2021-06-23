const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
// const x = localStorage.getItem('x')
const xObject = JSON.parse(localStorage.getItem('x'))
xObject === null ? hashMap = [
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AcFun.svg/1200px-AcFun.svg.png'>", url: 'https://www.acfun.cn' },
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/fr/0/0b/Bilibili_Logo.png'>", url: 'https://www.bilibili.com' },
    { logo: "<img src='https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg'>", url: 'https://www.iconfont.cn/' },
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png.>", url: 'https://github.com/' }
] : xObject.length < 4 ? hashMap = [
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AcFun.svg/1200px-AcFun.svg.png'>", url: 'https://www.acfun.cn' },
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/fr/0/0b/Bilibili_Logo.png'>", url: 'https://www.bilibili.com' },
    { logo: "<img src='https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg'>", url: 'https://www.iconfont.cn/' },
    { logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'>", url: 'https://github.com/' }
] : hashMap = xObject


const simplifyUrl = (url) => {
    return url.replace('https://', '').replace("http://", '').replace("www.", '').replace(/\/.*/, '')
}
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
        <div class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
                <svg class="icon">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
        </div>
        </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            console.log('hi')
            e.stopPropagation() // 阻止冒泡
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()

$('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网址是多少:')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url;
    }
    console.log(url);
    hashMap.push({ logo: simplifyUrl(url)[0].toUpperCase(), url: url })
    render()
});

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}


$(document).on('keypress', (e) => {
    const { key } = e
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
})