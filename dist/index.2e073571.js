(function () {
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li.last');
// const x = localStorage.getItem('x')
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse(localStorage.getItem('x'));
$16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject === null ? hashMap = [
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AcFun.svg/1200px-AcFun.svg.png'>",
        url: 'https://www.acfun.cn'
    },
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/fr/0/0b/Bilibili_Logo.png'>",
        url: 'https://www.bilibili.com'
    },
    {
        logo: "<img src='https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg'>",
        url: 'https://www.iconfont.cn/'
    },
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'>",
        url: 'https://github.com/'
    }
] : $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject.length < 4 ? hashMap = [
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AcFun.svg/1200px-AcFun.svg.png'>",
        url: 'https://www.acfun.cn'
    },
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/fr/0/0b/Bilibili_Logo.png'>",
        url: 'https://www.bilibili.com'
    },
    {
        logo: "<img src='https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg'>",
        url: 'https://www.iconfont.cn/'
    },
    {
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'>",
        url: 'https://github.com/'
    }
] : hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject;
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = (url)=>{
    return url.replace('https://', '').replace("http://", '').replace("www.", '').replace(/\/.*/, '');
};
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = ()=>{
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    hashMap.forEach((node, index)=>{
        const $li = $(`<li>\n        <div class="site">\n            <div class="logo">${node.logo}</div>\n            <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>\n            <div class="close">\n                <svg class="icon">\n                    <use xlink:href="#icon-close"></use>\n                </svg>\n            </div>\n        </div>\n        </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
        $li.on('click', ()=>{
            window.open(node.url);
        });
        $li.on('click', '.close', (e)=>{
            console.log('hi');
            e.stopPropagation(); // 阻止冒泡
            hashMap.splice(index, 1);
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
        });
    });
};
$16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
$('.addButton').on('click', ()=>{
    let url = window.prompt('请问你要添加的网址是多少:');
    if (url.indexOf('http') !== 0) url = 'https://' + url;
    console.log(url);
    hashMap.push({
        logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0].toUpperCase(),
        url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap);
    localStorage.setItem('x', string);
};
$(document).on('keypress', (e)=>{
    const { key: key  } = e;
    for(let i = 0; i < hashMap.length; i++)if (hashMap[i].logo.toLowerCase() === key) window.open(hashMap[i].url);
});

})();
//# sourceMappingURL=index.2e073571.js.map
