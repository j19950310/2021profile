import { createStore } from 'vuex'
const project = [
    // 可不可熟成紅茶
    {
        title: '可不可熟成紅茶',
        isMain: true,
        date: new Date(2021, 1, 1),
        link: 'https://www.kebuke.com/',
        detail: {
            創意發想: 'Lee Ming / Luju Lu',
            網站設計: 'Lee Ming',
            插畫: '可不可熟成紅茶',
            設計協助: 'Luju Lu / Zoe Lin',
            程式開發: 'Jay Wu',
        },
        note: 'AJAX地圖系統，原高畫質圖片使用 Lazy loading 預載低畫質。',
    },
    // KKStream
    {
        title: 'KKStream',
        isMain: true,
        date: new Date(2021, 10, 1),
        link: 'https://kkstream.com/',
        detail: {
            設計總監: 'Lee Ming',
            專案經理: 'Luju Lu',
            創意發想: 'Paul Lai / Lindy Wei / Ash Hsu / Momo Chang / Lee Ming / Luju Lu',
            品牌設計: 'Ash Hsu / Lindy Wei / Momo Chang',
            網站設計: 'Paul Lai / Luju Lu',
            程式開發: 'Jay Wu',
            程式開發協助: 'Evan Yang',
        },
        note: '前後端分離架構，用Nuxt達成SPA效果。',
    },
    // KOKO
    {
        title: 'KOKO',
        isMain: true,
        date: null,
        link: 'https://www.kokobank.com/bank',
        detail: null,
        note: '前端頁面切版，滾動特效',
    },
    // VISION GET WILD
    {
        title: 'VISION GET WILD',
        isMain: true,
        link: 'https://dcaward-vgw.org.tw',
        date: new Date(2021, 4, 1),
        detail: {
            視覺統籌: '​ 三頁文',
            設計總監: 'Lee Ming​',
            前期發想: 'Paul Lai / Lee Ming / Jay Wu',
            網站設計: 'Paul Lai',
            程式開發: 'Jay Wu',
            '3D技術協助': '廖君晏​',
        },
        note: '放視大賞2021入口活動網站。Three.js場景，表單控制處理，Shader渲染製作。',
    },
    // 實踐大學入學服務中心
    {
        title: '實踐大學入學服務中心',
        isMain: true,
        date: new Date(2020, 6, 1),
        link: 'https://admission.usc.edu.tw/',
        detail: {
            創意設計總監: 'Lee Ming',
            網站設計: 'Zoe Lin',
            程式開發: 'Jay Wu',
            工程經理: 'Elroy Tsai',
        },
        note: '首頁特殊分佈Section, CSS模擬3D球體模型。',
    },
    // C-LAB
    {
        title: 'C-LAB',
        isMain: false,
        date: new Date(2020, 7, 1),
        link: 'https://clab.org.tw/',
        detail: {
            創意設計總監: 'Lee Ming',
            前期概念: 'Ellen Feng / Paul Lai',
            網站設計: 'Ellen Feng',
            網站助理設計: 'Paul Lai',
            工程經理: 'Elroy Tsai',
            前端開發: 'Evan Yang / Jay Wu',
            後端開發: 'Julia Wang / Jeff Cho / Jay Wu',
        },
        note: '後端資料撈取，主機部署架設與協調溝通。',
    },
    // 雨林新零售
    {
        title: '雨林新零售',
        isMain: true,
        date: null,
        link: 'https://www.rainforestretail.com.tw/',
        detail: {
            創意設計總監: 'Lee Ming​',
            網站設計: 'Luju Lu',
            設計協助: 'Zoe Lin',
            開發經理: 'Elroy Tsai',
            程式開發: 'Jay Wu',
            程式開發協助: 'Ting Wei',
        },
        note: 'SVG特效開發，支援度高。',
    },
    // 台灣設計力調查
    {
        title: '台灣設計力調查',
        isMain: true,
        link: 'https://designsurvey.org.tw/',
        date: new Date(2020, 4, 1),
        detail: {
            'Creative Director': 'Lee Ming',
            'Key Visual': 'Lee Ming / Tani Tasi',
            'Lead Designer': 'Tani Tasi',
            'Assistant Designer': 'Luju Lu',
            'Lead Developer': 'Julia Wang / Elroy Tasi',
            'Effect Developer': 'Jay Wu',
            'Assistant Developer': 'Jeff Cho / Jay Wu',
        },
        note: '主要特效製作。',
    },
]

export default createStore({
    state: () => ({
        project,
    }),
    getters: {},
    mutations: {},
    actions: {},
})
