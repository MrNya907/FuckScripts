// ==UserScript==
// @name         微软必应优化助手
// @namespace    https://geoisam.github.io
// @version      2.0.1
// @description  微软必应（Microsoft Bing）搜索结果优化，支持电脑端和移动端
// @author       geoisam@qq.com
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD+0k4S/NFTevzNUtb6yFL/98JQ//W8Tv/ytEz/76tIuO6hREf///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/tVSNv7UVeT80VX/+81T//rIUv/3wlD/9bxO//K0TP/vq0n/76JG/++YQrjwijcS////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP/WUzb+1lby/tRW//zRVf/7zVP/+shS//fCUP/1vE7/8rRM/++rSf/uokb/75hD//COP/Lxgzp6////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD/108S/9dX8v7WVv/+1Fb//NFV//vNU//6yFL/98JQ//S8Tv/ytEz/7qtJ/+6hRf/umEP/8I4///CEO//xezfH8HEyJP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP/YVInrk0Tz310u6dxTKffjcDbn8adK9vrIUv/3wlD/9LxO//K0TP/uq0n/7qFF/+6XQv/vjT7/74M7/+96N//ucDLy7mYsWP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A64RB7N9PI//fTiH/304h/99OIf/fUCT/5XE67vfCUP/0vE7/8bNL/+6qSf/toUX/7ZZB/+6MPf/ugjn/7ng1/+xuMP/qZSz/4381vf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APerRWHkWiz/41Qk/+NUJP/jVCT/41Qk/+NUJP/jVCT/98JPR/S7TOTxs0v/7apI/+ygRP/slkH/7Ys8/+yAN//rdjP/6Wwt/+dhKP/jWyT31NxgQP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A6nAwUudbJ//nWyf/51sn/+dbJ//nWyf/51sn/+dbJ/////8A////APGySInsqUfy7J9D/+uUP//riTr/6n41/+lzMP/maCr/410k/95THv/V212w////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDqYStF6mEr/+phK//qYSv/6mEr/+phK//qYSv/6mEr/////wD///8A////AOynRCTqnUC46ZI9/+mHOP/nezP/5XAt/+JkJv/eWB//2FAZ99bbWv/V3F8Q////AP///wD///8A////AP///wD///8A////AP///wD///8A////AO1oLUXtaC3/7Wgt/+1oLf/taC3/7Wgt/+1oLf/taC3/////AP///wD///8A////AP///wDnkDpH5oQ01uR4L//hbCn/3V8h/9hTGv/VbyHq19pV/9XbXED///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A724vRe9uL//vbi//724v/+9uL//vbi//724v/+9uL/////8A////AP///wD///8A////AP///wD///8A4HMqetxnJPLXWRv/1GMZ7dvOQv/Z2k//1ttYQP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDyczFF8nMx//JzMf/yczH/8nMx//JzMf/yczH/8nMx/////wD///8A////AP///wD///8A////AO3NGxDp0BRg5MYctt2wIv/f1jT/3NhA/9rZSv/Y2lNA////AP///wD///8A////AP///wD///8A////AP///wD///8A////APR6MkX0ejL/9Hoy//R6Mv/0ejL/9Hoy//R6Mv/0ejL/////AP///wD///8A////APbEKhDzxyWQ78of/+vOGP/n0RT/5NMh/+HVLf/e1zn/29hF/9naTjD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9YAzRfWAM//1gDP/9YAz//WAM//1gDP/9YAz//WAM/////8A////AP///wD///8A+MMswPXFKP/xyCL/7cwc/+nQFf/l0hr/49Qm/+DWMv/d1z/g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD3hzRF94c0//eHNP/3hzT/94c0//eHNP/3hzT/94c0/////wD///8A////APzAMiD5wi7/98Qq//TGJv/wyiD/7M4Z/+fREv/k0h//4dQr/97WN4D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APiNNUX4jTX/+I01//iNNf/4jTX/+I01//iNNf/4jTX/////AP///wD///8A/b8zkPvBMP/4wyz/9sUp//LII//uyx3/6s8W/+bSGP/j0yTQ4NUwEP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+pI2RfqSNv/6kjb/+pI2//qSNv/6kjb/+pI2//qSNv////8A////AP///wD9vzTw/L8y//rBL//3wyv/9MYn//DJIP/szRr/6NET8OXSHTD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD7mDdF+5g3//uYN//7mDf/+5g3//uYN//7mDf/+5g3/////wD///8A/r42UP6+Nf/9vzP/+8Ax//nCLf/2xCn/88ck/+/LHsDrzxcQ////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APudN0X7nTf/+503//udN//7nTf/+503//udN//7nTf/////AP///wD/vTew/r41//6+NP/9vzP/+sEv//jDLMD1xShA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+qA4RfqgOP/6oDj/+qA4//qgOP/6oDj/+qA4//qgOP////8A////AP+9N/D/vTb//r41//2/NOD8wDFQ////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD5ozhF+aM4//mjOP/5ozj/+aM4//mjOP/5ozj/+aM4/////wD///8A/703MP+9N8D+vjZg////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APmnOUX5pzn/+ac5//mnOf/5pzn/+ac5//mnOf/5pzn/////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+ao5RfmqOf/5qjn/+ao5//mqOf/5qjn/+ao5//mqOf////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD5rTlF+a05//mtOf/5rTn/+a05//mtOf/5rTn/+a05/////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APixOkX4sTr/+LE6//ixOv/4sTr/+LE6//ixOv/4sTr/////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A97M6RfezOv/3szr/97M6//ezOv/3szr/97M6//ezOfH///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD3tztF97c7//e3O//3tzv/97c7//e3O//3tzv/97c6hv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APa6O0X2ujv/9ro7//a6O//2ujv/9ro7//a6Oob///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9b08RfW9PP/1vTz/9b08//W9O9T1vTs0////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD1wD4S9b871PW/O/H1vzp2////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////AH///gAf//wAD//4AAP/+AAB//gAAP/wAAB/8AwAf/AOAD/wD4A/8A/gP/APwD/wDwA/8A8Af/AOAH/wDgB/8A4A//AMAf/wDAf/8Awf//AMf//wD///8A////AP///wD///8A////AP///wH///8D////D////////8=
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @require      https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.js
// @resource     swalStyle https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.css
// @match        http*://*.bing.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// ==/UserScript==


const pjs = {
    option: [{
        name: "bing_Center",
        value: true
    }, {
        name: "bing_FAQ",
        value: false
    }, {
        name: "bing_News",
        value: false
    }, {
        name: "bing_Image",
        value: false
    }, {
        name: "bing_Video",
        value: false
    }, {
        name: "bing_Search",
        value: false
    }, {
        name: "bing_Footer",
        value: true
    }],
    getValue(name, value) {
        return GM_getValue(name, value)
    },
    setValue(name, value) {
        GM_setValue(name, value)
    }
}

const main = {
    initValue() {
        pjs.option.forEach((v) => {
            pjs.getValue(v.name) === undefined && pjs.setValue(v.name, v.value)
        })
    },

    addPluginStyle() {
        GM_addStyle(`
.swal2-title { margin-bottom: 1.25em !important;}
.pjs-popup { font-size: 14px !important;font-weight: bold !important;}
.pjs-setting-label { display: flex;align-items: center;justify-content: space-between;padding: 12px 0;}
.pjs-setting-label input[type="checkbox"] { position: absolute;opacity: 0;width: 0;height: 0;}
.pjs-setting-checkbox { position: relative;display: inline-block;width: 48px;height: 26px;background-color: #e0e0e0;border-radius: 19px;transition: background-color 0.3s;}
.pjs-setting-checkbox::before { content: "";position: absolute;left: 2px;top: 2px;width: 22px;height: 22px;background-color: #fff;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,0.3);transition: transform 0.3s;}
.pjs-setting-label input:checked + .pjs-setting-checkbox { background-color: #7066e0;}
.pjs-setting-label input:checked + .pjs-setting-checkbox::before { transform: translateX(22px);}
`)
        GM_addStyle(GM_getResourceText("swalStyle"))
    },

    registerMenuCommand() {
        GM_registerMenuCommand("⚙️ 设置", () => {
            let dom = `<div>
<label class="pjs-setting-label">搜索结果平铺居中<input type="checkbox" id="S-Center" ${pjs.getValue("bing_Center") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏相关用户问题<input type="checkbox" id="S-FAQ" ${pjs.getValue("bing_FAQ") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏相关资讯文章<input type="checkbox" id="S-News" ${pjs.getValue("bing_News") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏中间相关图像<input type="checkbox" id="S-Image" ${pjs.getValue("bing_Image") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏中间相关视频<input type="checkbox" id="S-Video" ${pjs.getValue("bing_Video") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏底部相关搜索<input type="checkbox" id="S-Search" ${pjs.getValue("bing_Search") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏底部页脚信息<input type="checkbox" id="S-Footer" ${pjs.getValue("bing_Footer") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
</div>`

            Swal.fire({
                title: "Bing Config",
                html: dom,
                showCloseButton: true,
                confirmButtonText: "保存",
                footer: `<div style="text-align: center;font-size: 1em;">✨ 助手免费开源　谨防上当受骗 ✨</div>`,
                customClass: {
                    popup: "pjs-popup",
                },
            }).then((res) => {
                if (res.isConfirmed) {
                    pjs.option.forEach((v) => {
                        pjs.setValue(v.name, v.value)
                    })
                    history.go(0)
                }
            })

            document.querySelector("#S-Center").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_Center")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-FAQ").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_FAQ")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-News").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_News")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Image").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_Image")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Video").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_Video")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Search").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_Search")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Footer").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "bing_Footer")
                targetItem.value = e.currentTarget.checked
            })
        })
    },

    autoGoGoGo() {
        const bingCenter = pjs.getValue("bing_Center")
            , bingFAQ = pjs.getValue("bing_FAQ")
            , bingNews = pjs.getValue("bing_News")
            , bingImage = pjs.getValue("bing_Image")
            , bingVideo = pjs.getValue("bing_Video")
            , bingSearch = pjs.getValue("bing_Search")
            , bingFooter = pjs.getValue("bing_Footer")

        let targetItem = null
        targetItem = pjs.option.find(item => item.name == "bing_Center")
        targetItem.value = bingCenter
        targetItem = pjs.option.find(item => item.name == "bing_FAQ")
        targetItem.value = bingFAQ
        targetItem = pjs.option.find(item => item.name == "bing_News")
        targetItem.value = bingNews
        targetItem = pjs.option.find(item => item.name == "bing_Image")
        targetItem.value = bingImage
        targetItem = pjs.option.find(item => item.name == "bing_Video")
        targetItem.value = bingVideo
        targetItem = pjs.option.find(item => item.name == "bing_Search")
        targetItem.value = bingSearch
        targetItem = pjs.option.find(item => item.name == "bing_Footer")
        targetItem.value = bingFooter

        GM_addStyle(`
[class$="_ad"],
[class^="ad_"],
[class^="ads_"],
.ad_sc,
.adsblock,
#ads_banner,
#sacs_win,
li.b_algo:has([class*="_ad"]),
li.b_algo:has(.b_attribution[data-partnertag]),
li.b_algo[style],
.b_hPanel:has([class*="bingApp_"]),
.sidebar:has(.ads_dwn),
#bgPro,
#b_pole,
#id_mobile,
#suspenBar,
#b_opalpers,
#bnp_ttc_div,
#bnp_rich_div,
#b_ims_bza_pole,
#ev_talkbox_wrapper,
#idCont [id*="id_qrcode"],
#b_notificationContainer_bop,
main div:has([class*="_adTA"]),
.cn_related_search_upsell_container,
li.b_ans:has(#opal_serpftrcta),
li:has(.b_adSlug),
.b_ad
{
    display: none !important;
}
`)

        if (bingFAQ) {
            GM_addStyle(`li.b_ans:has(.b_vPanel) { display: none !important; }`)
        }

        if (bingNews) {
            GM_addStyle(`li.b_ans:has(#ans_nws),li.b_ans:has(.new_see_more) { display: none !important; }`)
        }

        if (bingImage) {
            GM_addStyle(`li.b_ans:has(.imgPart),li.b_ans:has(.acfImgAns) { display: none !important; }`)
        }

        if (bingVideo) {
            GM_addStyle(`li.b_ans:has(#serpvidans) { display: none !important; }`)
        }

        if (bingSearch) {
            GM_addStyle(`li.b_ans:has(.b_rs),li.b_ans:has(.b_mrs),#b_recSQ { display: none !important; }`)
        }

        if (bingFooter) {
            GM_addStyle(`
            #b_footer ul { display: none !important; }
            #b_footerItems { padding: 0 !important;text-align: center; }
            #b_footerItems span { float: none !important; }
`)
        }

        if (bingCenter) {
            GM_addStyle(`
#b_content,#b_mcw { display: flex !important;flex-direction: column;width:100% !important;padding: 0 !important; }
#b_content ol{ display: flex !important;flex-direction: column;justify-content: center;width:100% !important;max-width: 1080px !important;padding: 0 !important;margin: 1.25rem auto !important; }
#b_content ol li:has(.b_ans),#b_content ol li:has(.b_algo) { margin: auto 2.5rem !important; }
#b_content main { order: 0; }
#b_content aside { order: -1; }
#b_content footer { order: 1; }
#b_tween{ text-align:center; }
.b_vPanel div { max-width:100% !important; }
.b_deep ul,.b_nwsAns,.b_rs{ width:100% !important; }
.b_nwsAns,.b_pag:has(.b_widePag) { display: flex !important;justify-content: center;align-items: center; }
li.b_ans:has(.richrswrapper),li.b_ans:has(.b_rrsr) { display: none !important; }
`)
        }
    },

    init() {
        this.initValue()
        this.addPluginStyle()
        this.registerMenuCommand()
        this.autoGoGoGo()
    }
}

main.init()
