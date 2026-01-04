
import { Skill, ExperienceItem, PortfolioItem, PortfolioCategory } from './types';

export const SKILLS: Skill[] = [
  { name: '平面設計', percentage: 97 },
  { name: '手冊編排', percentage: 97 },
  { name: '活動主視覺', percentage: 97 },
  { name: '行銷設計', percentage: 97 },
  { name: '品牌識別', percentage: 89 },
  { name: '包裝設計', percentage: 89 },
  { name: '周邊商品', percentage: 97 },
  { name: 'UIUX設計', percentage: 80 },
  { name: '網頁設計', percentage: 89 },
  { name: '插畫設計', percentage: 70 }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '01',
    period: '2023 to NOW',
    company: 'Freelancer',
    role: '約聘/專案設計師',
    description: [
      '愛富利整合行銷 活動主視覺設計/ 活動輸出物設計/ 年報&文宣編排',
      '威席藝術 活動主視覺設計/ 品牌行銷設計/ IP商品設計',
      '經濟部能源發展署 活動主視覺設計/ 活動周邊設計/ 手冊編排',
      '沈氏藝術 主視覺設計/ 周邊商品設計/ 年報&文宣編排',
      'YUHAO 封面設計/ 海報DM視覺設計/ 社群PO圖/ 禮贈品設計',
      'TranX 視覺設計/ 展場攤位設計/ 簡報編排',
      'EZ資訊 產品UI介面設計',
      'AEROMATE 包裝識別設計/ 包裝系列設計'
    ]
  },
  {
    id: '02',
    period: '2021 - 2022',
    company: 'NZXT',
    role: '創意設計經理',
    description: [
      '領導團隊，使各項設計需求達高水平的成果。',
      '引導團隊共同合作，激盪出理想的設計解決方案。',
      '跨部門溝通協調，提高創意活動的質量與效率。'
    ]
  },
  {
    id: '03',
    period: '2018 - 2021',
    company: 'NZXT',
    role: '資深平面設計',
    description: [
      '負責執行NZXT brand與行銷上的各項設計需求',
      '確保公司印刷與數位資產的高品質呈現',
      '品牌識別/ 產品行銷/ 周邊商品/ 網頁視覺/ UIUX'
    ]
  },
  {
    id: '04',
    period: '2017 - 2018',
    company: 'TutorABC',
    role: '品牌視覺設計',
    description: [
      '廣告稿&企業形象視覺設計',
      '海報DM/ 外牆大圖/ 設計與印刷完稿',
      '企業贈品設計執行/ 行銷活動網頁視覺設計',
      '網頁/ BANNER/ EDM 設計與切版'
    ]
  },
  {
    id: '05',
    period: '2013 - 2016',
    company: '采富創意印刷',
    role: '設計主任',
    description: [
      '平面視覺設計/ 傳單與型錄美編',
      '書籍封面設計與內頁排版',
      '包裝設計提案與印刷完稿',
      '掌控部門工作品質&進度',
      '跨部門以及與客戶溝通協調'
    ]
  },
  {
    id: '06',
    period: '2012 - 2013',
    company: '閣林國際',
    role: '商品設計師',
    description: [
      'IP授權商品設計提案/ 製作執行/ 打樣送審',
      '廠商溝通與協調',
      '展場布置規劃'
    ]
  },
  {
    id: '07',
    period: '2009 - 2011',
    company: '誼碩國際圖書',
    role: '設計主編',
    description: [
      '兒童繪本美術監製',
      '親子雜誌專案企劃',
      '廣告文宣編排設計'
    ]
  },
  {
    id: '08',
    period: '2006 - 2008',
    company: '蘇荷兒童美術館',
    role: '專任美術教師',
    description: [
      '專業兒童美術教學',
      '美術館主題展覽規劃佈置',
      '教案教材設計編寫',
      '兒童相關教學活動企劃執行'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p01',
    category: PortfolioCategory.BRAND,
    title: 'Work 01',
    imageUrl: 'https://www.dropbox.com/scl/fi/jxoimj8x2kvh96j99jkj1/ALBA001.jpg?rlkey=ctftlki2jtvvm7sxzy741a22x&raw=1'
  },
  {
    id: 'p02',
    category: PortfolioCategory.BRAND,
    title: 'Work 02',
    imageUrl: 'https://www.dropbox.com/scl/fi/5090mtewyyxzboogv4rgx/ALBA002.jpg?rlkey=asb35ufhc42drfq7ochj5vb0k&raw=1'
  },
  {
    id: 'p03',
    category: PortfolioCategory.PRODUCT,
    title: 'Work 03',
    imageUrl: 'https://www.dropbox.com/scl/fi/8q3mg1uz6wx2mz5c005dn/ALBA003.jpg?rlkey=was976premsn5kltwifteq5r9&raw=1'
  },
  {
    id: 'p04',
    category: PortfolioCategory.LAYOUT,
    title: 'Work 04',
    imageUrl: 'https://www.dropbox.com/scl/fi/h225hi2ei5b1udovssgay/ALBA004.jpg?rlkey=m1d46a4y4js5o7hhhpn6v64l5&raw=1'
  },
  {
    id: 'p05',
    category: PortfolioCategory.PRODUCT,
    title: 'Work 05',
    imageUrl: 'https://www.dropbox.com/scl/fi/m2r1t3wernh3vt3gmvufs/ALBA005.jpg?rlkey=bm88uv3dt9ms5ep82jzc4om7l&raw=1'
  },
  {
    id: 'p06',
    category: PortfolioCategory.VISUAL,
    title: 'Work 06',
    imageUrl: 'https://www.dropbox.com/scl/fi/o99d9iw8jzrplpziuw2lr/ALBA006.jpg?rlkey=thvtqz0c8fafo7xnjyl025vaf&raw=1'
  },
  {
    id: 'p07',
    category: PortfolioCategory.BRAND,
    title: 'Work 07',
    imageUrl: 'https://www.dropbox.com/scl/fi/m2dtdeaaahq7mf4wls1pe/ALBA007.jpg?rlkey=4y9kyb2se4bdf267ebknux6qf&raw=1'
  },
  {
    id: 'p08',
    category: PortfolioCategory.LAYOUT,
    title: 'Work 08',
    imageUrl: 'https://www.dropbox.com/scl/fi/7gc5kol4tdvheldk0uh3j/ALBA008.jpg?rlkey=slvedxb9nbxqpj48zvdj7bx7t&raw=1'
  },
  {
    id: 'p09',
    category: PortfolioCategory.DIGITAL,
    title: 'Work 09',
    imageUrl: 'https://www.dropbox.com/scl/fi/cimlrwtynxk1tu330isjf/ALBA009.jpg?rlkey=whn6s6vp7gi9l8t5tuistr7eh&raw=1'
  },
  {
    id: 'p10',
    category: PortfolioCategory.DIGITAL,
    title: 'Work 10',
    imageUrl: 'https://www.dropbox.com/scl/fi/xtpjsv5cdp97rqh811pm9/ALBA010.jpg?rlkey=9qo1s0kk2qvcbjcrse0djgz5h&raw=1'
  },
  {
    id: 'p11',
    category: PortfolioCategory.LAYOUT,
    title: 'Work 11',
    imageUrl: 'https://www.dropbox.com/scl/fi/4r1bdbc0vd8iel2ma41r7/ALBA011.jpg?rlkey=7smko1f9m0yy9c82qw9kkngy0&raw=1'
  },
  {
    id: 'p12',
    category: PortfolioCategory.LAYOUT,
    title: 'Work 12',
    imageUrl: 'https://www.dropbox.com/scl/fi/tmeqpcskg54npigahqlx5/ALBA012.jpg?rlkey=x4d9m8jwnh3n6s9j64aor83ru&raw=1'
  },
  {
    id: 'p13',
    category: PortfolioCategory.BRAND,
    title: 'Work 13',
    imageUrl: 'https://www.dropbox.com/scl/fi/owc424z859l2y6h84z55o/ALBA013.jpg?rlkey=9wpbn4m3jzgl0m0uf123d18cm&raw=1'
  },
  {
    id: 'p14',
    category: PortfolioCategory.BRAND,
    title: 'Work 14',
    imageUrl: 'https://www.dropbox.com/scl/fi/bvr5t5eezacbix8dse47q/ALBA014.jpg?rlkey=mnwedt4sgy0747g0u937053cp&raw=1'
  },
  {
    id: 'p15',
    category: PortfolioCategory.LAYOUT,
    title: 'Work 15',
    imageUrl: 'https://www.dropbox.com/scl/fi/i30u6ix8rmekfs66vyjl9/ALBA015.jpg?rlkey=9uzabcoi89yg8x39d0h2ry4j1&raw=1'
  },
  {
    id: 'p16',
    category: PortfolioCategory.VISUAL,
    title: 'Work 16',
    imageUrl: 'https://www.dropbox.com/scl/fi/d3z67z0qucrq0vvqwxu8n/ALBA016.jpg?rlkey=otvl9muhphpu3b0a8ueczo3rr&raw=1'
  },
  {
    id: 'p17',
    category: PortfolioCategory.PRODUCT,
    title: 'Work 17',
    imageUrl: 'https://www.dropbox.com/scl/fi/9dfxslh3uhgaof6svab1p/ALBA017.jpg?rlkey=6mggf8hz448wq7vi20lhryi1v&raw=1'
  },
  {
    id: 'p18',
    category: PortfolioCategory.DIGITAL,
    title: 'Work 18',
    imageUrl: 'https://www.dropbox.com/scl/fi/0qp0znd6mprhxay7kcqkk/ALBA018.jpg?rlkey=a3au66598brfjzh43cr6k4ao1&raw=1'
  },
  {
    id: 'p19',
    category: PortfolioCategory.VISUAL,
    title: 'Work 19',
    imageUrl: 'https://www.dropbox.com/scl/fi/of0bzu701qxxt2grv886m/ALBA019.jpg?rlkey=zpnn608ehev114l8vsb4db82v&raw=1'
  },
  {
    id: 'p20',
    category: PortfolioCategory.DIGITAL,
    title: 'Work 20',
    imageUrl: 'https://www.dropbox.com/scl/fi/35o4y1qy4y0dx7kilm12n/ALBA020.jpg?rlkey=iuqg1q2teqy30d8vdl1igzrqv&raw=1'
  },
  {
    id: 'p21',
    category: PortfolioCategory.VISUAL,
    title: 'Work 21',
    imageUrl: 'https://www.dropbox.com/scl/fi/yr8bzfa7n9db03uijioqj/ALBA021.jpg?rlkey=il4h2hw8qlkn2c31510jr78np&raw=1'
  },
  {
    id: 'p22',
    category: PortfolioCategory.VISUAL,
    title: 'Work 22',
    imageUrl: 'https://www.dropbox.com/scl/fi/nf3ex0bianrch8xs893mh/ALBA022.jpg?rlkey=4neaqflxbul31p3m5yzxvzflb&raw=1'
  },
  {
    id: 'p23',
    category: PortfolioCategory.PRODUCT,
    title: 'Work 23',
    imageUrl: 'https://www.dropbox.com/scl/fi/7zb7w57e4s5xqewt2xo6s/ALBA023.jpg?rlkey=b8jisuffu9m6p00v11x4b1pvu&raw=1'
  },
  {
    id: 'p24',
    category: PortfolioCategory.PRODUCT,
    title: 'Work 24',
    imageUrl: 'https://www.dropbox.com/scl/fi/c9r2q3l3cjye19qqwvhcj/ALBA024.jpg?rlkey=s9mmuzhltjvrie2zzb5x8q19g&raw=1'
  }
];
