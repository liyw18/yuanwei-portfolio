export const videoCategories=['TVC广告','漫剧','AI短剧','游戏内容','创意短视频'] as const;
export const videoAssetTypes=['characters','scenes','props','keyframes','storyboards','audio','script'] as const;
export type VideoAssetType=typeof videoAssetTypes[number];
export const videoAssetLabels:Record<VideoAssetType,string>={characters:'角色设计',scenes:'场景设计',props:'道具设计',keyframes:'关键帧',storyboards:'分镜',audio:'声音设计',script:'剧本与镜头记录'};
export interface ArchiveFile {id:string;title:string;src:string}
export interface VideoAssetGroup {id:string;type:VideoAssetType;title:string;description:string;images:string[];order:number;audio?:ArchiveFile[];documents?:ArchiveFile[]}
export type VideoOrientation='landscape'|'portrait'|'square';
export interface VideoEpisode {id:string;title:string;episode:number|string;video:string;videoUrl:string;cover:string;coverType:'auto'|'custom';duration:string;durationSeconds:number|null;width:number|null;height:number|null;aspectRatio:number|null;orientation:VideoOrientation|null;metadataSource?:'file'|'manual'}
export interface ProductionFile extends ArchiveFile {kind:"image"|"document"|"audio";episode?:number|string}
export const productionTypes=["script","characters","environments","props","storyboards","keyframes","audio"] as const;
export type ProductionType=typeof productionTypes[number];
export type VideoProduction=Record<ProductionType,ProductionFile[]>;
export function emptyProduction():VideoProduction{return {script:[],characters:[],environments:[],props:[],storyboards:[],keyframes:[],audio:[]};}
export interface VideoCaseStudy {overview:string;roles:string[];process:{title:string;description:string}[];outcome:string}
export interface VideoProject extends VideoEpisode {tags:string[];caseStudy?:VideoCaseStudy;production:VideoProduction;slug:string;category:typeof videoCategories[number];series:string;region:string;description:string;year:string;preview:string;videoType:'mp4'|'bilibili';role:string;tools:string[];featured:boolean;order:number;placeholder?:boolean;assets:VideoAssetGroup[];episodes?:VideoEpisode[]}
export const featuredVideoSlugs=["tvc-ad","lingmai-restart"] as const;
export const videos:VideoProject[]=[
  {
    "id": "tvc-ad",
    "title": "TVC广告",
    "episode": "",
    "video": "/works/video/tvc-ad/video.mp4",
    "videoUrl": "/works/video/tvc-ad/video.mp4",
    "cover": "/works/video/tvc-ad/cover.jpg",
    "coverType": "auto",
    "duration": "1:25",
    "durationSeconds": 85.009,
    "width": 2176,
    "height": 1228,
    "aspectRatio": 1.771986970684039,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "tvc-ad",
    "category": "TVC广告",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": true,
    "order": 1,
    "placeholder": false,
    "tags": [
      "AI",
      "TVC",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "以通勤、童年记忆与产品视觉组织影像叙事。当前案例展示已提供的成片、视觉资产及制作文本。",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_剧本",
          "src": "/works/video/tvc-ad/assets/script/TVC广告国内_制作包/01_剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_成年女主_三视图",
          "src": "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C01_成年女主_三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_童年女孩_红裙_三视图",
          "src": "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C02_童年女孩_红裙_三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_父亲_三视图",
          "src": "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C03_父亲_三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_童年女孩_合影服装_三视图",
          "src": "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C04_童年女孩_合影服装_三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_机器工作环境",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S01_机器工作环境.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_饮品制作台",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S02_饮品制作台.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_日间地铁车厢",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S03_日间地铁车厢.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_城市夜景窗边",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S04_城市夜景窗边.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S05_蓝莓枝叶采摘局部",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S05_蓝莓枝叶采摘局部.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-6",
          "title": "S06_童年家中餐厅",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S06_童年家中餐厅.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-7",
          "title": "S07_现代家中夜间书桌",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S07_现代家中夜间书桌.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-8",
          "title": "S08_家居产品展示台",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S08_家居产品展示台.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-9",
          "title": "S09_住宅深色木门",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S09_住宅深色木门.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-10",
          "title": "S10_社区步道_平视",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S10_社区步道_平视.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-11",
          "title": "S10B_社区步道_俯视",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S10B_社区步道_俯视.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-12",
          "title": "S11A_乳白酸奶微距空间",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11A_乳白酸奶微距空间.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-13",
          "title": "S11B_酸奶纵深旋涡空间",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11B_酸奶纵深旋涡空间.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-14",
          "title": "S11C_纯白产品空间",
          "src": "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11C_纯白产品空间.svg",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "D01_出纸机器与纸片",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D01_出纸机器与纸片.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "D02_饮品制作及通勤饮品道具",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D02_饮品制作及通勤饮品道具.png",
          "kind": "image"
        },
        {
          "id": "props-image-3",
          "title": "D03_蓝莓与童年餐桌道具",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D03_蓝莓与童年餐桌道具.png",
          "kind": "image"
        },
        {
          "id": "props-image-4",
          "title": "D04_父女合影与木相框",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D04_父女合影与木相框.png",
          "kind": "image"
        },
        {
          "id": "props-image-5",
          "title": "D05_夜间书桌陈设",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D05_夜间书桌陈设.png",
          "kind": "image"
        },
        {
          "id": "props-image-6",
          "title": "D06_金色装饰与白盆绿植",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D06_金色装饰与白盆绿植.png",
          "kind": "image"
        },
        {
          "id": "props-image-7",
          "title": "D07_安慕希整颗蓝莓产品瓶_开合盖",
          "src": "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D07_安慕希整颗蓝莓产品瓶_开合盖.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/tvc-ad/assets/storyboards/TVC广告国内_制作包/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": [
        {
          "id": "audio-1",
          "title": "原片完整音轨",
          "src": "/works/video/tvc-ad/assets/audio/TVC广告国内_制作包/声音参考/原片完整音轨.m4a",
          "kind": "audio"
        }
      ]
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C01_成年女主_三视图.png",
          "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C02_童年女孩_红裙_三视图.png",
          "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C03_父亲_三视图.png",
          "/works/video/tvc-ad/assets/characters/TVC广告国内_制作包/人物三视图/C04_童年女孩_合影服装_三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S01_机器工作环境.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S02_饮品制作台.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S03_日间地铁车厢.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S04_城市夜景窗边.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S05_蓝莓枝叶采摘局部.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S06_童年家中餐厅.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S07_现代家中夜间书桌.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S08_家居产品展示台.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S09_住宅深色木门.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S10_社区步道_平视.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S10B_社区步道_俯视.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11A_乳白酸奶微距空间.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11B_酸奶纵深旋涡空间.png",
          "/works/video/tvc-ad/assets/scenes/TVC广告国内_制作包/场景资产/S11C_纯白产品空间.svg"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D01_出纸机器与纸片.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D02_饮品制作及通勤饮品道具.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D03_蓝莓与童年餐桌道具.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D04_父女合影与木相框.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D05_夜间书桌陈设.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D06_金色装饰与白盆绿植.png",
          "/works/video/tvc-ad/assets/props/TVC广告国内_制作包/道具资产/D07_安慕希整颗蓝莓产品瓶_开合盖.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/tvc-ad/assets/storyboards/TVC广告国内_制作包/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-1",
            "title": "原片完整音轨",
            "src": "/works/video/tvc-ad/assets/audio/TVC广告国内_制作包/声音参考/原片完整音轨.m4a"
          }
        ],
        "documents": [],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_剧本",
            "src": "/works/video/tvc-ad/assets/script/TVC广告国内_制作包/01_剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "probiotic-ad",
    "title": "益生菌胶囊广告视频",
    "episode": "",
    "video": "/works/video/probiotic-ad/video.mp4",
    "videoUrl": "/works/video/probiotic-ad/video.mp4",
    "cover": "/works/video/probiotic-ad/cover.jpg",
    "coverType": "auto",
    "duration": "0:29",
    "durationSeconds": 28.817,
    "width": 740,
    "height": 1196,
    "aspectRatio": 0.6187290969899666,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "probiotic-ad",
    "category": "TVC广告",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 2,
    "placeholder": false,
    "tags": [
      "AI",
      "TVC",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "剧本",
          "src": "/works/video/probiotic-ad/assets/script/国外种草视频_剧本分镜固定资产/剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_半透明人体示意模型_三视图",
          "src": "/works/video/probiotic-ad/assets/characters/国外种草视频_剧本分镜固定资产/固定资产/人物三视图/C01_半透明人体示意模型_三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_日光厨房_黑色大理石台面",
          "src": "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/S01_日光厨房_黑色大理石台面.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S05_冰蓝产品棚景_反光台面",
          "src": "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/S05_冰蓝产品棚景_反光台面.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "SB01_微观通道_合并场景板",
          "src": "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/SB01_微观通道_合并场景板.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "P01_BIOBALANCE产品瓶_多角度",
          "src": "/works/video/probiotic-ad/assets/props/国外种草视频_剧本分镜固定资产/固定资产/产品/P01_BIOBALANCE产品瓶_多角度.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "P02_蓝白胶囊_实体与放大示意",
          "src": "/works/video/probiotic-ad/assets/props/国外种草视频_剧本分镜固定资产/固定资产/产品/P02_蓝白胶囊_实体与放大示意.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/probiotic-ad/assets/storyboards/国外种草视频_剧本分镜固定资产/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "P03_微观元素_合并素材板",
          "src": "/works/video/probiotic-ad/assets/keyframes/国外种草视频_剧本分镜固定资产/固定资产/微观元素/P03_微观元素_合并素材板.png",
          "kind": "image"
        }
      ],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/probiotic-ad/assets/characters/国外种草视频_剧本分镜固定资产/固定资产/人物三视图/C01_半透明人体示意模型_三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/S01_日光厨房_黑色大理石台面.png",
          "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/S05_冰蓝产品棚景_反光台面.png",
          "/works/video/probiotic-ad/assets/scenes/国外种草视频_剧本分镜固定资产/固定资产/场景/SB01_微观通道_合并场景板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/probiotic-ad/assets/props/国外种草视频_剧本分镜固定资产/固定资产/产品/P01_BIOBALANCE产品瓶_多角度.png",
          "/works/video/probiotic-ad/assets/props/国外种草视频_剧本分镜固定资产/固定资产/产品/P02_蓝白胶囊_实体与放大示意.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/probiotic-ad/assets/keyframes/国外种草视频_剧本分镜固定资产/固定资产/微观元素/P03_微观元素_合并素材板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/probiotic-ad/assets/storyboards/国外种草视频_剧本分镜固定资产/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "剧本",
            "src": "/works/video/probiotic-ad/assets/script/国外种草视频_剧本分镜固定资产/剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "lingmai-restart",
    "title": "灵脉重启",
    "episode": 1,
    "video": "/works/video/lingmai-restart/episodes/episode-01.mp4",
    "videoUrl": "/works/video/lingmai-restart/episodes/episode-01.mp4",
    "cover": "/works/video/lingmai-restart/cover.jpg",
    "coverType": "auto",
    "duration": "1:42",
    "durationSeconds": 102.122,
    "width": 2180,
    "height": 1228,
    "aspectRatio": 1.775244299674267,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "lingmai-restart",
    "category": "漫剧",
    "series": "灵脉重启",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": true,
    "order": 3,
    "placeholder": false,
    "tags": [
      "AI",
      "Animation",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "灵脉重启系列案例，当前包含Episode 01、Episode 02，配有角色、场景与分镜记录。",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-2",
          "title": "第一集_剧本",
          "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/剧本/第一集_剧本.txt",
          "kind": "document"
        },
        {
          "id": "script-3",
          "title": "第二集_剧本",
          "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/剧本/第二集_剧本.txt",
          "kind": "document"
        },
        {
          "id": "script-1",
          "title": "README",
          "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/README.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_秦澈",
          "src": "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C01_秦澈.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_秦昊",
          "src": "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C02_秦昊.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_黑袍蒙面人",
          "src": "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C03_黑袍蒙面人.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_黑衣押解守卫",
          "src": "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C04_黑衣押解守卫.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_灰蓝族人",
          "src": "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C05_灰蓝族人.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_测灵殿",
          "src": "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S01_测灵殿.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_深渊崖顶",
          "src": "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S02_深渊崖顶.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_深渊谷底",
          "src": "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S03_深渊谷底.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_星海修炼意境",
          "src": "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S04_星海修炼意境.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "D01_黑甲獠牙凶兽",
          "src": "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D01_黑甲獠牙凶兽.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "D02_赤眼狼兽",
          "src": "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D02_赤眼狼兽.png",
          "kind": "image"
        },
        {
          "id": "props-image-3",
          "title": "D03_怨灵",
          "src": "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D03_怨灵.png",
          "kind": "image"
        },
        {
          "id": "props-image-4",
          "title": "P01_传承玉佩",
          "src": "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/P01_传承玉佩.png",
          "kind": "image"
        },
        {
          "id": "props-image-5",
          "title": "P02_短刃_灵剑_锁链",
          "src": "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/P02_短刃_灵剑_锁链.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "第一集分镜提示词",
          "src": "/works/video/lingmai-restart/assets/storyboards/灵脉重启_第一二集_剧本分镜固定资产/剧本/第一集分镜提示词.md",
          "kind": "document"
        },
        {
          "id": "storyboards-2",
          "title": "第二集分镜提示词",
          "src": "/works/video/lingmai-restart/assets/storyboards/灵脉重启_第一二集_剧本分镜固定资产/剧本/第二集分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "C01_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C01_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "C01_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C01_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "C02_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C02_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "C02_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C02_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "C03_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C03_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "C03_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C03_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "C04_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C04_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "C05_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C05_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "D01_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D01_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "D01_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D01_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "D02_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D02_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "D03_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D03_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "P01_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P01_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "P01_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P01_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "P02_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-16",
          "title": "P02_2",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_2.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-17",
          "title": "P02_3",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_3.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-18",
          "title": "S01_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S01_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-19",
          "title": "S02_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S02_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-20",
          "title": "S03_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S03_1.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-21",
          "title": "S04_1",
          "src": "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S04_1.jpg",
          "kind": "image"
        }
      ],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C01_秦澈.png",
          "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C02_秦昊.png",
          "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C03_黑袍蒙面人.png",
          "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C04_黑衣押解守卫.png",
          "/works/video/lingmai-restart/assets/characters/灵脉重启_第一二集_剧本分镜固定资产/固定资产/人物三视图/C05_灰蓝族人.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S01_测灵殿.png",
          "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S02_深渊崖顶.png",
          "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S03_深渊谷底.png",
          "/works/video/lingmai-restart/assets/scenes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/场景/S04_星海修炼意境.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D01_黑甲獠牙凶兽.png",
          "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D02_赤眼狼兽.png",
          "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/D03_怨灵.png",
          "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/P01_传承玉佩.png",
          "/works/video/lingmai-restart/assets/props/灵脉重启_第一二集_剧本分镜固定资产/固定资产/道具与生物/P02_短刃_灵剑_锁链.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C01_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C01_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C02_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C02_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C03_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C03_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C04_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/C05_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D01_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D01_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D02_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/D03_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P01_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P01_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_2.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/P02_3.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S01_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S02_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S03_1.jpg",
          "/works/video/lingmai-restart/assets/keyframes/灵脉重启_第一二集_剧本分镜固定资产/固定资产/画面依据/S04_1.jpg"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "第一集分镜提示词",
            "src": "/works/video/lingmai-restart/assets/storyboards/灵脉重启_第一二集_剧本分镜固定资产/剧本/第一集分镜提示词.md"
          },
          {
            "id": "storyboards-2",
            "title": "第二集分镜提示词",
            "src": "/works/video/lingmai-restart/assets/storyboards/灵脉重启_第一二集_剧本分镜固定资产/剧本/第二集分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-2",
            "title": "第一集_剧本",
            "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/剧本/第一集_剧本.txt"
          },
          {
            "id": "script-3",
            "title": "第二集_剧本",
            "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/剧本/第二集_剧本.txt"
          },
          {
            "id": "script-1",
            "title": "README",
            "src": "/works/video/lingmai-restart/assets/script/灵脉重启_第一二集_剧本分镜固定资产/README.md"
          }
        ],
        "order": 7
      }
    ],
    "episodes": [
      {
        "id": "lingmai-restart-episode-1",
        "title": "灵脉重启第一集",
        "episode": 1,
        "video": "/works/video/lingmai-restart/episodes/episode-01.mp4",
        "videoUrl": "/works/video/lingmai-restart/episodes/episode-01.mp4",
        "cover": "/works/video/lingmai-restart/cover.jpg",
        "coverType": "auto",
        "duration": "1:42",
        "durationSeconds": 102.122,
        "width": 2180,
        "height": 1228,
        "aspectRatio": 1.775244299674267,
        "orientation": "landscape",
        "metadataSource": "file"
      },
      {
        "id": "lingmai-restart-episode-2",
        "title": "灵脉重启第二集",
        "episode": 2,
        "video": "/works/video/lingmai-restart/episodes/episode-02.mp4",
        "videoUrl": "/works/video/lingmai-restart/episodes/episode-02.mp4",
        "cover": "/works/video/lingmai-restart/episodes/episode-02-cover.jpg",
        "coverType": "auto",
        "duration": "0:59",
        "durationSeconds": 59.235,
        "width": 2180,
        "height": 1226,
        "aspectRatio": 1.7781402936378468,
        "orientation": "landscape",
        "metadataSource": "file"
      }
    ]
  },
  {
    "id": "deal-with-devil",
    "title": "和魔鬼的交易",
    "episode": 3,
    "video": "/works/video/deal-with-devil/episodes/episode-03.mp4",
    "videoUrl": "/works/video/deal-with-devil/episodes/episode-03.mp4",
    "cover": "/works/video/deal-with-devil/cover.jpg",
    "coverType": "auto",
    "duration": "0:56",
    "durationSeconds": 55.612,
    "width": 686,
    "height": 1222,
    "aspectRatio": 0.5613747954173486,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "deal-with-devil",
    "category": "漫剧",
    "series": "和魔鬼的交易",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 4,
    "placeholder": false,
    "tags": [
      "AI",
      "Animation",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "剧本",
          "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第三集_制作包/剧本.md",
          "kind": "document"
        },
        {
          "id": "script-2",
          "title": "剧本",
          "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第四集_剧本分镜新增资产/剧本.md",
          "kind": "document"
        },
        {
          "id": "script-3",
          "title": "新增资产与复用说明",
          "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第四集_剧本分镜新增资产/新增资产与复用说明.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_女子_白大褂造型",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C01_女子_白大褂造型.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_女子_棕色背心造型",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C02_女子_棕色背心造型.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_男子_绷带造型",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C03_男子_绷带造型.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_女子_白色睡衣",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C04_女子_白色睡衣.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_女子_红色连衣裙",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C05_女子_红色连衣裙.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C06_Marco_黑衬衫",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C06_Marco_黑衬衫.png",
          "kind": "image"
        },
        {
          "id": "characters-image-7",
          "title": "C07_手下甲_黑衬衫",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C07_手下甲_黑衬衫.png",
          "kind": "image"
        },
        {
          "id": "characters-image-8",
          "title": "C08_手下乙_黑西装",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C08_手下乙_黑西装.png",
          "kind": "image"
        },
        {
          "id": "characters-image-9",
          "title": "C09_男子_灰色西装",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C09_男子_灰色西装.png",
          "kind": "image"
        },
        {
          "id": "characters-image-10",
          "title": "C10_金发保镖_黑西装",
          "src": "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C10_金发保镖_黑西装.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_庄园卧室",
          "src": "/works/video/deal-with-devil/assets/scenes/魔鬼的交易_第三集_制作包/固定资产/场景/S01_庄园卧室.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_庄园大厅_白天",
          "src": "/works/video/deal-with-devil/assets/scenes/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/场景/S02_庄园大厅_白天.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "PB01_手枪与白手帕",
          "src": "/works/video/deal-with-devil/assets/props/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/道具/PB01_手枪与白手帕.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/deal-with-devil/assets/storyboards/魔鬼的交易_第三集_制作包/分镜提示词.md",
          "kind": "document"
        },
        {
          "id": "storyboards-2",
          "title": "魔鬼的交易_第四集分镜提示词",
          "src": "/works/video/deal-with-devil/assets/storyboards/魔鬼的交易_第四集_剧本分镜新增资产/魔鬼的交易_第四集分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C01_女子_白大褂造型.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C02_女子_棕色背心造型.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第三集_制作包/固定资产/人物三视图/C03_男子_绷带造型.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C04_女子_白色睡衣.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C05_女子_红色连衣裙.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C06_Marco_黑衬衫.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C07_手下甲_黑衬衫.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C08_手下乙_黑西装.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C09_男子_灰色西装.png",
          "/works/video/deal-with-devil/assets/characters/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/人物三视图/C10_金发保镖_黑西装.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/deal-with-devil/assets/scenes/魔鬼的交易_第三集_制作包/固定资产/场景/S01_庄园卧室.png",
          "/works/video/deal-with-devil/assets/scenes/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/场景/S02_庄园大厅_白天.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/deal-with-devil/assets/props/魔鬼的交易_第四集_剧本分镜新增资产/新增资产/道具/PB01_手枪与白手帕.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/deal-with-devil/assets/storyboards/魔鬼的交易_第三集_制作包/分镜提示词.md"
          },
          {
            "id": "storyboards-2",
            "title": "魔鬼的交易_第四集分镜提示词",
            "src": "/works/video/deal-with-devil/assets/storyboards/魔鬼的交易_第四集_剧本分镜新增资产/魔鬼的交易_第四集分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "剧本",
            "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第三集_制作包/剧本.md"
          },
          {
            "id": "script-2",
            "title": "剧本",
            "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第四集_剧本分镜新增资产/剧本.md"
          },
          {
            "id": "script-3",
            "title": "新增资产与复用说明",
            "src": "/works/video/deal-with-devil/assets/script/魔鬼的交易_第四集_剧本分镜新增资产/新增资产与复用说明.md"
          }
        ],
        "order": 7
      }
    ],
    "episodes": [
      {
        "id": "deal-with-devil-episode-3",
        "title": "和魔鬼的交易第三集",
        "episode": 3,
        "video": "/works/video/deal-with-devil/episodes/episode-03.mp4",
        "videoUrl": "/works/video/deal-with-devil/episodes/episode-03.mp4",
        "cover": "/works/video/deal-with-devil/cover.jpg",
        "coverType": "auto",
        "duration": "0:56",
        "durationSeconds": 55.612,
        "width": 686,
        "height": 1222,
        "aspectRatio": 0.5613747954173486,
        "orientation": "portrait",
        "metadataSource": "file"
      },
      {
        "id": "deal-with-devil-episode-4",
        "title": "和魔鬼的交易第四集",
        "episode": 4,
        "video": "/works/video/deal-with-devil/episodes/episode-04.mp4",
        "videoUrl": "/works/video/deal-with-devil/episodes/episode-04.mp4",
        "cover": "/works/video/deal-with-devil/episodes/episode-04-cover.jpg",
        "coverType": "auto",
        "duration": "2:03",
        "durationSeconds": 122.834,
        "width": 684,
        "height": 1224,
        "aspectRatio": 0.5588235294117647,
        "orientation": "portrait",
        "metadataSource": "file"
      }
    ]
  },
  {
    "id": "she-from-east",
    "title": "她来自东方",
    "episode": 3,
    "video": "/works/video/she-from-east/episodes/episode-03.mp4",
    "videoUrl": "/works/video/she-from-east/episodes/episode-03.mp4",
    "cover": "/works/video/she-from-east/cover.jpg",
    "coverType": "auto",
    "duration": "1:37",
    "durationSeconds": 96.805,
    "width": 2152,
    "height": 1230,
    "aspectRatio": 1.7495934959349593,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "she-from-east",
    "category": "漫剧",
    "series": "她来自东方",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 5,
    "placeholder": false,
    "tags": [
      "AI",
      "Animation",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "剧本",
          "src": "/works/video/she-from-east/assets/script/她来自东方_第三四集_剧本分镜固定资产/第三集/剧本.md",
          "kind": "document"
        },
        {
          "id": "script-2",
          "title": "剧本",
          "src": "/works/video/she-from-east/assets/script/她来自东方_第三四集_剧本分镜固定资产/第四集/剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "G01_宴会宾客",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/群演参考/G01_宴会宾客.jpg",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C01_晚棠_灰蓝纱裙",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C01_晚棠_灰蓝纱裙.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C02_公爵_酒红礼服",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C02_公爵_酒红礼服.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C03_黑衣贵族_深蓝长外套",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C03_黑衣贵族_深蓝长外套.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C04_黑军礼服军官",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C04_黑军礼服军官.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C05_贵妇_酒红礼裙",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C05_贵妇_酒红礼裙.png",
          "kind": "image"
        },
        {
          "id": "characters-image-7",
          "title": "C06_王室青年_蓝绶带军礼服",
          "src": "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C06_王室青年_蓝绶带军礼服.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_船上宴会厅_夜景",
          "src": "/works/video/she-from-east/assets/scenes/她来自东方_第三四集_剧本分镜固定资产/固定资产/场景/S01_船上宴会厅_夜景.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "PB01_玉佩与手杖_合并道具板",
          "src": "/works/video/she-from-east/assets/props/她来自东方_第三四集_剧本分镜固定资产/固定资产/道具/PB01_玉佩与手杖_合并道具板.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/she-from-east/assets/storyboards/她来自东方_第三四集_剧本分镜固定资产/第三集/分镜提示词.md",
          "kind": "document"
        },
        {
          "id": "storyboards-2",
          "title": "分镜提示词",
          "src": "/works/video/she-from-east/assets/storyboards/她来自东方_第三四集_剧本分镜固定资产/第四集/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/群演参考/G01_宴会宾客.jpg",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C01_晚棠_灰蓝纱裙.png",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C02_公爵_酒红礼服.png",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C03_黑衣贵族_深蓝长外套.png",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C04_黑军礼服军官.png",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C05_贵妇_酒红礼裙.png",
          "/works/video/she-from-east/assets/characters/她来自东方_第三四集_剧本分镜固定资产/固定资产/人物三视图/C06_王室青年_蓝绶带军礼服.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/she-from-east/assets/scenes/她来自东方_第三四集_剧本分镜固定资产/固定资产/场景/S01_船上宴会厅_夜景.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/she-from-east/assets/props/她来自东方_第三四集_剧本分镜固定资产/固定资产/道具/PB01_玉佩与手杖_合并道具板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/she-from-east/assets/storyboards/她来自东方_第三四集_剧本分镜固定资产/第三集/分镜提示词.md"
          },
          {
            "id": "storyboards-2",
            "title": "分镜提示词",
            "src": "/works/video/she-from-east/assets/storyboards/她来自东方_第三四集_剧本分镜固定资产/第四集/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "剧本",
            "src": "/works/video/she-from-east/assets/script/她来自东方_第三四集_剧本分镜固定资产/第三集/剧本.md"
          },
          {
            "id": "script-2",
            "title": "剧本",
            "src": "/works/video/she-from-east/assets/script/她来自东方_第三四集_剧本分镜固定资产/第四集/剧本.md"
          }
        ],
        "order": 7
      }
    ],
    "episodes": [
      {
        "id": "she-from-east-episode-3",
        "title": "她来自东方第三集",
        "episode": 3,
        "video": "/works/video/she-from-east/episodes/episode-03.mp4",
        "videoUrl": "/works/video/she-from-east/episodes/episode-03.mp4",
        "cover": "/works/video/she-from-east/cover.jpg",
        "coverType": "auto",
        "duration": "1:37",
        "durationSeconds": 96.805,
        "width": 2152,
        "height": 1230,
        "aspectRatio": 1.7495934959349593,
        "orientation": "landscape",
        "metadataSource": "file"
      },
      {
        "id": "she-from-east-episode-4",
        "title": "她来自东方第四集",
        "episode": 4,
        "video": "/works/video/she-from-east/episodes/episode-04.mp4",
        "videoUrl": "/works/video/she-from-east/episodes/episode-04.mp4",
        "cover": "/works/video/she-from-east/episodes/episode-04-cover.jpg",
        "coverType": "auto",
        "duration": "1:19",
        "durationSeconds": 78.902,
        "width": 2152,
        "height": 1230,
        "aspectRatio": 1.7495934959349593,
        "orientation": "landscape",
        "metadataSource": "file"
      }
    ]
  },
  {
    "id": "changnian-fuqing",
    "title": "长念缚卿",
    "episode": 2,
    "video": "/works/video/changnian-fuqing/episodes/episode-02.mp4",
    "videoUrl": "/works/video/changnian-fuqing/episodes/episode-02.mp4",
    "cover": "/works/video/changnian-fuqing/cover.jpg",
    "coverType": "auto",
    "duration": "2:05",
    "durationSeconds": 124.947,
    "width": 2164,
    "height": 1232,
    "aspectRatio": 1.7564935064935066,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "changnian-fuqing",
    "category": "漫剧",
    "series": "长念缚卿",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 6,
    "placeholder": false,
    "tags": [
      "AI",
      "Animation",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "02_人物与场景提示词",
          "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/02_人物与场景提示词.md",
          "kind": "document"
        },
        {
          "id": "script-2",
          "title": "01_剧本",
          "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/01_剧本.md",
          "kind": "document"
        },
        {
          "id": "script-3",
          "title": "01_剧本",
          "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/01_剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_时卿_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C01_时卿_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_纪恒之_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C02_纪恒之_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_宝林_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C03_宝林_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_母亲_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C04_母亲_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_沈临学_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C05_沈临学_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C06_持扇公子_上半身与三视图",
          "src": "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C06_持扇公子_上半身与三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_女子卧房_空场景",
          "src": "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S01_女子卧房_空场景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_家宴厅_空场景",
          "src": "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S02_家宴厅_空场景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_芍药阁_空场景",
          "src": "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S03_芍药阁_空场景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_牡丹阁_空场景",
          "src": "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S04_牡丹阁_空场景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S05_海棠阁_空场景",
          "src": "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S05_海棠阁_空场景.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "PD01_共用道具总图",
          "src": "/works/video/changnian-fuqing/assets/props/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/道具设定图/PD01_共用道具总图.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/changnian-fuqing/assets/storyboards/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/分镜提示词.md",
          "kind": "document"
        },
        {
          "id": "storyboards-2",
          "title": "分镜提示词",
          "src": "/works/video/changnian-fuqing/assets/storyboards/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": [
        {
          "id": "audio-1",
          "title": "完整音轨",
          "src": "/works/video/changnian-fuqing/assets/audio/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/完整音轨.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-2",
          "title": "完整音轨",
          "src": "/works/video/changnian-fuqing/assets/audio/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/完整音轨.m4a",
          "kind": "audio"
        }
      ]
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C01_时卿_上半身与三视图.png",
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C02_纪恒之_上半身与三视图.png",
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C03_宝林_上半身与三视图.png",
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C04_母亲_上半身与三视图.png",
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C05_沈临学_上半身与三视图.png",
          "/works/video/changnian-fuqing/assets/characters/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/人物设定图/C06_持扇公子_上半身与三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S01_女子卧房_空场景.png",
          "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S02_家宴厅_空场景.png",
          "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S03_芍药阁_空场景.png",
          "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S04_牡丹阁_空场景.png",
          "/works/video/changnian-fuqing/assets/scenes/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/场景设定图/S05_海棠阁_空场景.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/changnian-fuqing/assets/props/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/道具设定图/PD01_共用道具总图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/changnian-fuqing/assets/storyboards/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/分镜提示词.md"
          },
          {
            "id": "storyboards-2",
            "title": "分镜提示词",
            "src": "/works/video/changnian-fuqing/assets/storyboards/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-1",
            "title": "完整音轨",
            "src": "/works/video/changnian-fuqing/assets/audio/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/完整音轨.m4a"
          },
          {
            "id": "audio-2",
            "title": "完整音轨",
            "src": "/works/video/changnian-fuqing/assets/audio/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/完整音轨.m4a"
          }
        ],
        "documents": [],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "02_人物与场景提示词",
            "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/共享资产/02_人物与场景提示词.md"
          },
          {
            "id": "script-2",
            "title": "01_剧本",
            "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第二集/01_剧本.md"
          },
          {
            "id": "script-3",
            "title": "01_剧本",
            "src": "/works/video/changnian-fuqing/assets/script/长念缚卿_第二三集_剧本分镜共享资产包/长念缚卿_第二三集_制作包/第三集/01_剧本.md"
          }
        ],
        "order": 7
      }
    ],
    "episodes": [
      {
        "id": "changnian-fuqing-episode-2",
        "title": "长念缚卿第二集",
        "episode": 2,
        "video": "/works/video/changnian-fuqing/episodes/episode-02.mp4",
        "videoUrl": "/works/video/changnian-fuqing/episodes/episode-02.mp4",
        "cover": "/works/video/changnian-fuqing/cover.jpg",
        "coverType": "auto",
        "duration": "2:05",
        "durationSeconds": 124.947,
        "width": 2164,
        "height": 1232,
        "aspectRatio": 1.7564935064935066,
        "orientation": "landscape",
        "metadataSource": "file"
      },
      {
        "id": "changnian-fuqing-episode-3",
        "title": "长念缚卿第三集",
        "episode": 3,
        "video": "/works/video/changnian-fuqing/episodes/episode-03.mp4",
        "videoUrl": "/works/video/changnian-fuqing/episodes/episode-03.mp4",
        "cover": "/works/video/changnian-fuqing/episodes/episode-03-cover.jpg",
        "coverType": "auto",
        "duration": "2:36",
        "durationSeconds": 156.318,
        "width": 2166,
        "height": 1228,
        "aspectRatio": 1.763843648208469,
        "orientation": "landscape",
        "metadataSource": "file"
      }
    ]
  },
  {
    "id": "wolf-awakening",
    "title": "狼族血脉：王者觉醒",
    "episode": "",
    "video": "/works/video/wolf-awakening/video.mp4",
    "videoUrl": "/works/video/wolf-awakening/video.mp4",
    "cover": "/works/video/wolf-awakening/cover.jpg",
    "coverType": "auto",
    "duration": "3:01",
    "durationSeconds": 180.977,
    "width": 1040,
    "height": 1194,
    "aspectRatio": 0.8710217755443886,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "wolf-awakening",
    "category": "AI短剧",
    "series": "",
    "region": "海外",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 7,
    "placeholder": false,
    "tags": [
      "AI",
      "Short Film",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_中文剧本",
          "src": "/works/video/wolf-awakening/assets/script/出海AI短片1_制作包/01_中文剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_Sierra_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C01_Sierra_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_Wayne_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C02_Wayne_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_Roman_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C03_Roman_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_兄长_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C04_兄长_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_Jessica_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C05_Jessica_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C06_Darian_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C06_Darian_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-7",
          "title": "C07_老狼王_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C07_老狼王_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-8",
          "title": "C08_司仪_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C08_司仪_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-9",
          "title": "C09_编辫贵族_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C09_编辫贵族_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-10",
          "title": "C10_毛领贵族_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C10_毛领贵族_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-11",
          "title": "C11_骑队护卫_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C11_骑队护卫_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-12",
          "title": "C12_白胡须长者_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C12_白胡须长者_特写与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-13",
          "title": "C13_黑金贵族_特写与三视图",
          "src": "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C13_黑金贵族_特写与三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_月神湖_血月夜景",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S01_月神湖_血月夜景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_湖中水下_救援空间",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S02_湖中水下_救援空间.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_村落石墙庭院",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S03_村落石墙庭院.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_村落石板街道",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S04_村落石板街道.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S05_城堡夜色石桥",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S05_城堡夜色石桥.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-6",
          "title": "S06_城堡拱门门厅",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S06_城堡拱门门厅.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-7",
          "title": "S07_狼王宴会大厅",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S07_狼王宴会大厅.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-8",
          "title": "S08_狼王王座台阶区",
          "src": "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S08_狼王王座台阶区.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "AN01_AN02_白马棕马与皇家马具",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/AN01_AN02_白马棕马与皇家马具.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "D01_王族头饰与司仪短杖",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D01_王族头饰与司仪短杖.png",
          "kind": "image"
        },
        {
          "id": "props-image-3",
          "title": "D02_狼族纹章与珠宝饰品",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D02_狼族纹章与珠宝饰品.png",
          "kind": "image"
        },
        {
          "id": "props-image-4",
          "title": "D03_村居桌凳与杂物",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D03_村居桌凳与杂物.png",
          "kind": "image"
        },
        {
          "id": "props-image-5",
          "title": "D04_宴会餐具与火焰灯具",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D04_宴会餐具与火焰灯具.png",
          "kind": "image"
        },
        {
          "id": "props-image-6",
          "title": "D05_宴会家具与狼族旗帜",
          "src": "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D05_宴会家具与狼族旗帜.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/wolf-awakening/assets/storyboards/出海AI短片1_制作包/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C01_Sierra_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C02_Wayne_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C03_Roman_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C04_兄长_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C05_Jessica_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C06_Darian_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C07_老狼王_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C08_司仪_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C09_编辫贵族_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C10_毛领贵族_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C11_骑队护卫_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C12_白胡须长者_特写与三视图.png",
          "/works/video/wolf-awakening/assets/characters/出海AI短片1_制作包/人物设定图/C13_黑金贵族_特写与三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S01_月神湖_血月夜景.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S02_湖中水下_救援空间.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S03_村落石墙庭院.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S04_村落石板街道.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S05_城堡夜色石桥.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S06_城堡拱门门厅.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S07_狼王宴会大厅.png",
          "/works/video/wolf-awakening/assets/scenes/出海AI短片1_制作包/场景资产/S08_狼王王座台阶区.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/AN01_AN02_白马棕马与皇家马具.png",
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D01_王族头饰与司仪短杖.png",
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D02_狼族纹章与珠宝饰品.png",
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D03_村居桌凳与杂物.png",
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D04_宴会餐具与火焰灯具.png",
          "/works/video/wolf-awakening/assets/props/出海AI短片1_制作包/道具资产/D05_宴会家具与狼族旗帜.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/wolf-awakening/assets/storyboards/出海AI短片1_制作包/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_中文剧本",
            "src": "/works/video/wolf-awakening/assets/script/出海AI短片1_制作包/01_中文剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "mysterious-pendant",
    "title": "神秘吊坠",
    "episode": "",
    "video": "/works/video/mysterious-pendant/video.mp4",
    "videoUrl": "/works/video/mysterious-pendant/video.mp4",
    "cover": "/works/video/mysterious-pendant/cover.jpg",
    "coverType": "auto",
    "duration": "2:48",
    "durationSeconds": 168.253,
    "width": 744,
    "height": 1192,
    "aspectRatio": 0.6241610738255033,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "mysterious-pendant",
    "category": "AI短剧",
    "series": "",
    "region": "海外",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 8,
    "placeholder": false,
    "tags": [
      "AI",
      "Short Film",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_中文剧本",
          "src": "/works/video/mysterious-pendant/assets/script/出海AI短片2_制作包/01_中文剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_Liam_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C01_Liam_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_年轻女子_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C02_年轻女子_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_老渔民_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C03_老渔民_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_Shaw先生_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C04_Shaw先生_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_西装随从_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C05_西装随从_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C06_年长妇人_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C06_年长妇人_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-7",
          "title": "C07_格衫青年_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C07_格衫青年_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-8",
          "title": "C08_绿衣船员_上半身与三视图",
          "src": "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C08_绿衣船员_上半身与三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_晴日岩礁海滩",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S01_晴日岩礁海滩.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_近岸浅海海底",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S02_近岸浅海海底.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_停船海湾岸边",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S03_停船海湾岸边.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_开阔海面_晴日",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S04_开阔海面_晴日.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S04B_开阔海面_阴云",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S04B_开阔海面_阴云.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-6",
          "title": "S05_魔鬼海域_风暴",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S05_魔鬼海域_风暴.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-7",
          "title": "S06_追击渔船作业甲板",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S06_追击渔船作业甲板.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-8",
          "title": "S07_主角小船驾驶位",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S07_主角小船驾驶位.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-9",
          "title": "S08_主角小船捕鱼甲板",
          "src": "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S08_主角小船捕鱼甲板.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "B01_岸边开放式木质小船",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B01_岸边开放式木质小船.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "B02_主角海上动力小船",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B02_主角海上动力小船.png",
          "kind": "image"
        },
        {
          "id": "props-image-3",
          "title": "B03_对手追击旧渔船",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B03_对手追击旧渔船.png",
          "kind": "image"
        },
        {
          "id": "props-image-4",
          "title": "D01_方形金属蟹笼_空满两态",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D01_方形金属蟹笼_空满两态.png",
          "kind": "image"
        },
        {
          "id": "props-image-5",
          "title": "D02_圆柱金属蟹笼_空满两态",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D02_圆柱金属蟹笼_空满两态.png",
          "kind": "image"
        },
        {
          "id": "props-image-6",
          "title": "D03_盘绳提笼索及捕鱼网",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D03_盘绳提笼索及捕鱼网.png",
          "kind": "image"
        },
        {
          "id": "props-image-7",
          "title": "D04_绿色吊坠船钥匙及饵料瓶",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D04_绿色吊坠船钥匙及饵料瓶.png",
          "kind": "image"
        },
        {
          "id": "props-image-8",
          "title": "D05_肩包及人物配饰",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D05_肩包及人物配饰.png",
          "kind": "image"
        },
        {
          "id": "props-image-9",
          "title": "D06_作业手套扣具及装备包",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D06_作业手套扣具及装备包.png",
          "kind": "image"
        },
        {
          "id": "props-image-10",
          "title": "AN01_金色蟹与蟹群",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/鱼获资产/AN01_金色蟹与蟹群.png",
          "kind": "image"
        },
        {
          "id": "props-image-11",
          "title": "AN02_银金色鱼获",
          "src": "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/鱼获资产/AN02_银金色鱼获.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/mysterious-pendant/assets/storyboards/出海AI短片2_制作包/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C01_Liam_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C02_年轻女子_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C03_老渔民_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C04_Shaw先生_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C05_西装随从_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C06_年长妇人_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C07_格衫青年_上半身与三视图.png",
          "/works/video/mysterious-pendant/assets/characters/出海AI短片2_制作包/人物设定图/C08_绿衣船员_上半身与三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S01_晴日岩礁海滩.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S02_近岸浅海海底.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S03_停船海湾岸边.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S04_开阔海面_晴日.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S04B_开阔海面_阴云.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S05_魔鬼海域_风暴.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S06_追击渔船作业甲板.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S07_主角小船驾驶位.png",
          "/works/video/mysterious-pendant/assets/scenes/出海AI短片2_制作包/场景资产/S08_主角小船捕鱼甲板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B01_岸边开放式木质小船.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B02_主角海上动力小船.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/船只资产/B03_对手追击旧渔船.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D01_方形金属蟹笼_空满两态.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D02_圆柱金属蟹笼_空满两态.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D03_盘绳提笼索及捕鱼网.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D04_绿色吊坠船钥匙及饵料瓶.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D05_肩包及人物配饰.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/道具资产/D06_作业手套扣具及装备包.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/鱼获资产/AN01_金色蟹与蟹群.png",
          "/works/video/mysterious-pendant/assets/props/出海AI短片2_制作包/鱼获资产/AN02_银金色鱼获.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/mysterious-pendant/assets/storyboards/出海AI短片2_制作包/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_中文剧本",
            "src": "/works/video/mysterious-pendant/assets/script/出海AI短片2_制作包/01_中文剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "seven-pei",
    "title": "七声呸",
    "episode": "",
    "video": "/works/video/seven-pei/video.mp4",
    "videoUrl": "/works/video/seven-pei/video.mp4",
    "cover": "/works/video/seven-pei/cover.jpg",
    "coverType": "auto",
    "duration": "1:00",
    "durationSeconds": 60.28,
    "width": 1656,
    "height": 938,
    "aspectRatio": 1.7654584221748402,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "seven-pei",
    "category": "AI短剧",
    "series": "",
    "region": "国内",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 9,
    "placeholder": false,
    "tags": [
      "AI",
      "Short Film",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "七声呸_文学剧本",
          "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/剧本/七声呸_文学剧本.md",
          "kind": "document"
        },
        {
          "id": "script-2",
          "title": "T01_字幕样式说明",
          "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/界面/T01_字幕样式说明.md",
          "kind": "document"
        },
        {
          "id": "script-3",
          "title": "资产清单",
          "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/资产清单.md",
          "kind": "document"
        },
        {
          "id": "script-4",
          "title": "资产提示词",
          "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/资产提示词.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_银发女孩_日常装",
          "src": "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C01_银发女孩_日常装.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_男子_日常装",
          "src": "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C02_男子_日常装.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_男子_战术装",
          "src": "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C03_男子_战术装.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_战术装友人",
          "src": "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C04_战术装友人.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_银发女孩_婚纱装",
          "src": "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C05_银发女孩_婚纱装.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_阴天湿街空景",
          "src": "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S01_阴天湿街空景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_临海露台_向海",
          "src": "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S02_临海露台_向海.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_临海露台_向宅邸",
          "src": "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S03_临海露台_向宅邸.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_月夜海湾",
          "src": "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S04_月夜海湾.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "P01_黑白双人电动车",
          "src": "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/P01_黑白双人电动车.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "P03_手机婚礼照片",
          "src": "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/P03_手机婚礼照片.png",
          "kind": "image"
        },
        {
          "id": "props-image-3",
          "title": "PB01_露台关键道具",
          "src": "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/PB01_露台关键道具.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "七声呸_分镜提示词",
          "src": "/works/video/seven-pei/assets/storyboards/国内短片_七声呸_制作包/剧本/七声呸_分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "电动车_背面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/电动车_背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "电动车_侧面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/电动车_侧面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "灰云天空",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/灰云天空.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "婚礼照片_手机",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/婚礼照片_手机.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "婚礼照片_桌面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/婚礼照片_桌面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "露台_全景",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "露台_宅邸",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_宅邸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "露台_座椅与桌",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_座椅与桌.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "男主_举杯",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男主_举杯.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "男子_日常背面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "男子_日常侧身",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常侧身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "男子_日常正脸",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "男子_战术正脸",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_战术正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "男子_战术坐姿",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_战术坐姿.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "女孩_背面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-16",
          "title": "女孩_日常全身局部",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_日常全身局部.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-17",
          "title": "女孩_正脸",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-18",
          "title": "啤酒杯与灯",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/啤酒杯与灯.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-19",
          "title": "手机自拍界面",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/手机自拍界面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-20",
          "title": "水珠后视镜",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/水珠后视镜.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-21",
          "title": "阴天街道",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/阴天街道.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-22",
          "title": "友人_正脸",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/友人_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-23",
          "title": "友人_坐姿",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/友人_坐姿.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-24",
          "title": "圆月云层",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/圆月云层.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-25",
          "title": "月夜海湾",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/月夜海湾.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-26",
          "title": "U01_相机叠层",
          "src": "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/界面/U01_相机叠层.svg",
          "kind": "image"
        }
      ],
      "audio": [
        {
          "id": "audio-2",
          "title": "视频声音参考",
          "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/视频声音参考.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-3",
          "title": "尾声核对_52秒起",
          "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/尾声核对_52秒起.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-1",
          "title": "声音设计",
          "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/声音设计.md",
          "kind": "document"
        }
      ]
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C01_银发女孩_日常装.png",
          "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C02_男子_日常装.png",
          "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C03_男子_战术装.png",
          "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C04_战术装友人.png",
          "/works/video/seven-pei/assets/characters/国内短片_七声呸_制作包/资产/人物三视图/C05_银发女孩_婚纱装.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S01_阴天湿街空景.png",
          "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S02_临海露台_向海.png",
          "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S03_临海露台_向宅邸.png",
          "/works/video/seven-pei/assets/scenes/国内短片_七声呸_制作包/资产/场景设定图/S04_月夜海湾.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/P01_黑白双人电动车.png",
          "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/P03_手机婚礼照片.png",
          "/works/video/seven-pei/assets/props/国内短片_七声呸_制作包/资产/道具设定图/PB01_露台关键道具.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/电动车_背面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/电动车_侧面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/灰云天空.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/婚礼照片_手机.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/婚礼照片_桌面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_全景.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_宅邸.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/露台_座椅与桌.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男主_举杯.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常背面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常侧身.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_日常正脸.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_战术正脸.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/男子_战术坐姿.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_背面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_日常全身局部.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/女孩_正脸.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/啤酒杯与灯.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/手机自拍界面.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/水珠后视镜.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/阴天街道.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/友人_正脸.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/友人_坐姿.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/圆月云层.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/参考图/月夜海湾.jpg",
          "/works/video/seven-pei/assets/keyframes/国内短片_七声呸_制作包/资产/界面/U01_相机叠层.svg"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "七声呸_分镜提示词",
            "src": "/works/video/seven-pei/assets/storyboards/国内短片_七声呸_制作包/剧本/七声呸_分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-2",
            "title": "视频声音参考",
            "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/视频声音参考.m4a"
          },
          {
            "id": "audio-3",
            "title": "尾声核对_52秒起",
            "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/尾声核对_52秒起.m4a"
          }
        ],
        "documents": [
          {
            "id": "audio-1",
            "title": "声音设计",
            "src": "/works/video/seven-pei/assets/audio/国内短片_七声呸_制作包/声音/声音设计.md"
          }
        ],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "七声呸_文学剧本",
            "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/剧本/七声呸_文学剧本.md"
          },
          {
            "id": "script-2",
            "title": "T01_字幕样式说明",
            "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/界面/T01_字幕样式说明.md"
          },
          {
            "id": "script-3",
            "title": "资产清单",
            "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/资产清单.md"
          },
          {
            "id": "script-4",
            "title": "资产提示词",
            "src": "/works/video/seven-pei/assets/script/国内短片_七声呸_制作包/资产/资产提示词.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "liuli-lamp",
    "title": "琉璃盏",
    "episode": "",
    "video": "/works/video/liuli-lamp/video.mp4",
    "videoUrl": "/works/video/liuli-lamp/video.mp4",
    "cover": "/works/video/liuli-lamp/cover.jpg",
    "coverType": "auto",
    "duration": "2:52",
    "durationSeconds": 171.573,
    "width": 1674,
    "height": 714,
    "aspectRatio": 2.3445378151260505,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "liuli-lamp",
    "category": "AI短剧",
    "series": "",
    "region": "国内",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 10,
    "placeholder": false,
    "tags": [
      "AI",
      "Short Film",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_剧本",
          "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/剧本/01_剧本.md",
          "kind": "document"
        },
        {
          "id": "script-2",
          "title": "01_资产清单",
          "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/01_资产清单.md",
          "kind": "document"
        },
        {
          "id": "script-3",
          "title": "02_资产提示词",
          "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/02_资产提示词.md",
          "kind": "document"
        },
        {
          "id": "script-4",
          "title": "03_连续性与复用",
          "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/03_连续性与复用.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "A01_黑白猫",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/动物设定图/A01_黑白猫.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C01_黑衣剑客_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C01_黑衣剑客_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C02_小女孩_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C02_小女孩_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C03_母亲_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C03_母亲_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C04_白面客_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C04_白面客_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C05_蓝面客_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C05_蓝面客_上半身与三视图.png",
          "kind": "image"
        },
        {
          "id": "characters-image-7",
          "title": "C06_红面客_上半身与三视图",
          "src": "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C06_红面客_上半身与三视图.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_雾山荒径",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S01_雾山荒径.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_雨镇街巷",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S02_雨镇街巷.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_古玩店内",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S03_古玩店内.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_寝居暖室",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S04_寝居暖室.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S05_室内山水异境",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S05_室内山水异境.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-6",
          "title": "S06_异境庭院",
          "src": "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S06_异境庭院.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "PD01_兵器与铜铃设定",
          "src": "/works/video/liuli-lamp/assets/props/国内短剧2_琉璃盏_制作包/资产/道具设定图/PD01_兵器与铜铃设定.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "PD02_灯具与炉火设定",
          "src": "/works/video/liuli-lamp/assets/props/国内短剧2_琉璃盏_制作包/资产/道具设定图/PD02_灯具与炉火设定.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "琉璃盏分镜提示词",
          "src": "/works/video/liuli-lamp/assets/storyboards/国内短剧2_琉璃盏_制作包/剧本/琉璃盏分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "白面客_背面",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "白面客_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "白面客_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "白面客黑烟",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客黑烟.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "窗边古剑",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/窗边古剑.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "古玩店_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/古玩店_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "黑白猫_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/黑白猫_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "黑白猫_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/黑白猫_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "红面客_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "红面客_室内",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_室内.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "红面客_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "剑客_背面",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "剑客_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "剑客_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "金光琉璃盏",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/金光琉璃盏.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-16",
          "title": "蓝面客_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-17",
          "title": "蓝面客_室内",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_室内.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-18",
          "title": "蓝面客_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-19",
          "title": "母亲_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/母亲_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-20",
          "title": "母亲_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/母亲_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-21",
          "title": "木桶与街摊",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/木桶与街摊.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-22",
          "title": "女孩_全身",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-23",
          "title": "女孩_睡眠",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_睡眠.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-24",
          "title": "女孩_正脸",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_正脸.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-25",
          "title": "暖室_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/暖室_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-26",
          "title": "佩剑与护手",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/佩剑与护手.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-27",
          "title": "片名",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/片名.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-28",
          "title": "浅色布靴",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/浅色布靴.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-29",
          "title": "三人倒地",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/三人倒地.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-30",
          "title": "山路_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/山路_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-31",
          "title": "兽首",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/兽首.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-32",
          "title": "水壶与炉",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/水壶与炉.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-33",
          "title": "铜铃",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/铜铃.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-34",
          "title": "卧房_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/卧房_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-35",
          "title": "屋顶_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/屋顶_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-36",
          "title": "檐下灯笼",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/檐下灯笼.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-37",
          "title": "异境_山峰",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/异境_山峰.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-38",
          "title": "异境_庭院",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/异境_庭院.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-39",
          "title": "雨巷_全景",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/雨巷_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-40",
          "title": "雨镇拱桥",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/雨镇拱桥.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-41",
          "title": "烛台",
          "src": "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/烛台.jpg",
          "kind": "image"
        }
      ],
      "audio": [
        {
          "id": "audio-2",
          "title": "剑客片尾片段",
          "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/剑客片尾片段.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-3",
          "title": "母女片尾片段",
          "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/母女片尾片段.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-4",
          "title": "完整音轨",
          "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/完整音轨.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-1",
          "title": "01_对白与独白核对表",
          "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/01_对白与独白核对表.md",
          "kind": "document"
        }
      ]
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/动物设定图/A01_黑白猫.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C01_黑衣剑客_上半身与三视图.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C02_小女孩_上半身与三视图.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C03_母亲_上半身与三视图.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C04_白面客_上半身与三视图.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C05_蓝面客_上半身与三视图.png",
          "/works/video/liuli-lamp/assets/characters/国内短剧2_琉璃盏_制作包/资产/人物三视图/C06_红面客_上半身与三视图.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S01_雾山荒径.png",
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S02_雨镇街巷.png",
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S03_古玩店内.png",
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S04_寝居暖室.png",
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S05_室内山水异境.png",
          "/works/video/liuli-lamp/assets/scenes/国内短剧2_琉璃盏_制作包/资产/场景设定图/S06_异境庭院.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/liuli-lamp/assets/props/国内短剧2_琉璃盏_制作包/资产/道具设定图/PD01_兵器与铜铃设定.png",
          "/works/video/liuli-lamp/assets/props/国内短剧2_琉璃盏_制作包/资产/道具设定图/PD02_灯具与炉火设定.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_背面.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/白面客黑烟.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/窗边古剑.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/古玩店_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/黑白猫_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/黑白猫_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_室内.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/红面客_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_背面.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/剑客_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/金光琉璃盏.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_室内.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/蓝面客_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/母亲_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/母亲_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/木桶与街摊.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_全身.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_睡眠.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/女孩_正脸.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/暖室_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/佩剑与护手.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/片名.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/浅色布靴.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/三人倒地.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/山路_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/兽首.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/水壶与炉.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/铜铃.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/卧房_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/屋顶_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/檐下灯笼.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/异境_山峰.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/异境_庭院.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/雨巷_全景.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/雨镇拱桥.jpg",
          "/works/video/liuli-lamp/assets/keyframes/国内短剧2_琉璃盏_制作包/资产/参考图/烛台.jpg"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "琉璃盏分镜提示词",
            "src": "/works/video/liuli-lamp/assets/storyboards/国内短剧2_琉璃盏_制作包/剧本/琉璃盏分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-2",
            "title": "剑客片尾片段",
            "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/剑客片尾片段.m4a"
          },
          {
            "id": "audio-3",
            "title": "母女片尾片段",
            "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/母女片尾片段.m4a"
          },
          {
            "id": "audio-4",
            "title": "完整音轨",
            "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/完整音轨.m4a"
          }
        ],
        "documents": [
          {
            "id": "audio-1",
            "title": "01_对白与独白核对表",
            "src": "/works/video/liuli-lamp/assets/audio/国内短剧2_琉璃盏_制作包/声音/01_对白与独白核对表.md"
          }
        ],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_剧本",
            "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/剧本/01_剧本.md"
          },
          {
            "id": "script-2",
            "title": "01_资产清单",
            "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/01_资产清单.md"
          },
          {
            "id": "script-3",
            "title": "02_资产提示词",
            "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/02_资产提示词.md"
          },
          {
            "id": "script-4",
            "title": "03_连续性与复用",
            "src": "/works/video/liuli-lamp/assets/script/国内短剧2_琉璃盏_制作包/资产/03_连续性与复用.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "eastern-swordsman",
    "title": "东方剑侠游戏角色短片",
    "episode": "",
    "video": "/works/video/eastern-swordsman/video.mp4",
    "videoUrl": "/works/video/eastern-swordsman/video.mp4",
    "cover": "/works/video/eastern-swordsman/cover.jpg",
    "coverType": "auto",
    "duration": "1:28",
    "durationSeconds": 87.517,
    "width": 1644,
    "height": 942,
    "aspectRatio": 1.7452229299363058,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "eastern-swordsman",
    "category": "游戏内容",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 11,
    "placeholder": false,
    "tags": [
      "AI",
      "Game",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "以东方剑侠角色为主的游戏内容短片，结合角色造型、兵器、场景与影像呈现展示视觉设定。",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_剧本",
          "src": "/works/video/eastern-swordsman/assets/script/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/剧本/01_剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_剑侠_雕花重甲",
          "src": "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C01_剑侠_雕花重甲.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_剑侠_长袍轻甲",
          "src": "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C02_剑侠_长袍轻甲.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_剑侠_冠饰礼袍",
          "src": "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C03_剑侠_冠饰礼袍.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_剑侠_冠饰战袍",
          "src": "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C04_剑侠_冠饰战袍.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_夜色宫阙展示背景",
          "src": "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S01_夜色宫阙展示背景.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_风雪山崖",
          "src": "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S02_风雪山崖.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S03_阴云裂石高台",
          "src": "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S03_阴云裂石高台.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S04_殿前圆形石坛",
          "src": "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S04_殿前圆形石坛.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S05_暮色亭台废墟",
          "src": "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S05_暮色亭台废墟.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "P01_蓝纹阔刃长剑",
          "src": "/works/video/eastern-swordsman/assets/props/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/兵器设定图/P01_蓝纹阔刃长剑.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "东方剑侠分镜提示词",
          "src": "/works/video/eastern-swordsman/assets/storyboards/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/剧本/东方剑侠分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "冠饰_半身",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/冠饰_半身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "冠饰_全身",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/冠饰_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "广场_全景",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/广场_全景.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "剑侠_面部",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_面部.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "剑侠_手部",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_手部.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "剑侠_眼神",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_眼神.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "金色阵圈",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/金色阵圈.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "蓝光_细节",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/蓝光_细节.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "暮色_废墟",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/暮色_废墟.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "轻甲_持剑",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_持剑.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "轻甲_挥斩",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_挥斩.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "轻甲_全身",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "雪崖_背影",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/雪崖_背影.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "长剑_全貌",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_全貌.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "长剑_握柄",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_握柄.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-16",
          "title": "长剑_蓄能",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_蓄能.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-17",
          "title": "重甲_背面",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_背面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-18",
          "title": "重甲_侧面",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_侧面.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-19",
          "title": "重甲_全身",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_全身.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-20",
          "title": "重甲_胸甲",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_胸甲.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-21",
          "title": "VB01_技能光效设定板",
          "src": "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/光效设定图/VB01_技能光效设定板.png",
          "kind": "image"
        }
      ],
      "audio": [
        {
          "id": "audio-2",
          "title": "人声核对片段_前26秒",
          "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/人声核对片段_前26秒.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-3",
          "title": "完整音轨",
          "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/完整音轨.m4a",
          "kind": "audio"
        },
        {
          "id": "audio-1",
          "title": "01_声音与人声说明",
          "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/01_声音与人声说明.md",
          "kind": "document"
        }
      ]
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C01_剑侠_雕花重甲.png",
          "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C02_剑侠_长袍轻甲.png",
          "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C03_剑侠_冠饰礼袍.png",
          "/works/video/eastern-swordsman/assets/characters/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/人物三视图/C04_剑侠_冠饰战袍.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S01_夜色宫阙展示背景.png",
          "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S02_风雪山崖.png",
          "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S03_阴云裂石高台.png",
          "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S04_殿前圆形石坛.png",
          "/works/video/eastern-swordsman/assets/scenes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/场景设定图/S05_暮色亭台废墟.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/eastern-swordsman/assets/props/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/兵器设定图/P01_蓝纹阔刃长剑.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/冠饰_半身.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/冠饰_全身.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/广场_全景.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_面部.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_手部.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/剑侠_眼神.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/金色阵圈.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/蓝光_细节.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/暮色_废墟.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_持剑.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_挥斩.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/轻甲_全身.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/雪崖_背影.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_全貌.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_握柄.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/长剑_蓄能.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_背面.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_侧面.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_全身.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/参考图/重甲_胸甲.jpg",
          "/works/video/eastern-swordsman/assets/keyframes/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/资产/光效设定图/VB01_技能光效设定板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "东方剑侠分镜提示词",
            "src": "/works/video/eastern-swordsman/assets/storyboards/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/剧本/东方剑侠分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-2",
            "title": "人声核对片段_前26秒",
            "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/人声核对片段_前26秒.m4a"
          },
          {
            "id": "audio-3",
            "title": "完整音轨",
            "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/完整音轨.m4a"
          }
        ],
        "documents": [
          {
            "id": "audio-1",
            "title": "01_声音与人声说明",
            "src": "/works/video/eastern-swordsman/assets/audio/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/声音/01_声音与人声说明.md"
          }
        ],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_剧本",
            "src": "/works/video/eastern-swordsman/assets/script/东方剑侠_剧本分镜资产包/东方剑侠_游戏角色短片_制作包/剧本/01_剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "eclipse-dream",
    "title": "月蚀梦域互动游戏视频",
    "episode": "",
    "video": "/works/video/eclipse-dream/video.mp4",
    "videoUrl": "/works/video/eclipse-dream/video.mp4",
    "cover": "/works/video/eclipse-dream/cover.jpg",
    "coverType": "auto",
    "duration": "1:05",
    "durationSeconds": 65.318,
    "width": 1662,
    "height": 936,
    "aspectRatio": 1.7756410256410255,
    "orientation": "landscape",
    "metadataSource": "file",
    "slug": "eclipse-dream",
    "category": "游戏内容",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 12,
    "placeholder": false,
    "tags": [
      "AI",
      "Game",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "剧本",
          "src": "/works/video/eclipse-dream/assets/script/月蚀梦域_互动游戏_剧本分镜固定资产/剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_短发爪形角色_基础形态",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C01_短发爪形角色_基础形态.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_短发爪形角色_Fera形态",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C02_短发爪形角色_Fera形态.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_黑发触须角色",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C03_黑发触须角色.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_白发蝶翼角色",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C04_白发蝶翼角色.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_黑发独角角色",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C05_黑发独角角色.png",
          "kind": "image"
        },
        {
          "id": "characters-image-6",
          "title": "C06_白发骑士",
          "src": "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C06_白发骑士.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "SB01_三种梦境_合并场景板",
          "src": "/works/video/eclipse-dream/assets/scenes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/场景/SB01_三种梦境_合并场景板.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "P01_白马与城堡构件_共用资产板",
          "src": "/works/video/eclipse-dream/assets/props/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/道具与生物/P01_白马与城堡构件_共用资产板.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "P02_梦境核心与光刃_共用资产板",
          "src": "/works/video/eclipse-dream/assets/props/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/道具与生物/P02_梦境核心与光刃_共用资产板.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/eclipse-dream/assets/storyboards/月蚀梦域_互动游戏_剧本分镜固定资产/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "U01_场景与形态菜单",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U01_场景与形态菜单.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "U02_战斗界面",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U02_战斗界面.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "U03_技能名称",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U03_技能名称.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "C01",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C01.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "C02",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C02.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "C03",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C03.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "C04",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C04.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "C05",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C05.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "C06",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C06.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "P01",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/P01.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "P02",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/P02.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "S01",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S01.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "S02",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S02.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "S03",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S03.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "UI",
          "src": "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/UI.jpg",
          "kind": "image"
        }
      ],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C01_短发爪形角色_基础形态.png",
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C02_短发爪形角色_Fera形态.png",
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C03_黑发触须角色.png",
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C04_白发蝶翼角色.png",
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C05_黑发独角角色.png",
          "/works/video/eclipse-dream/assets/characters/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/人物三视图/C06_白发骑士.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/eclipse-dream/assets/scenes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/场景/SB01_三种梦境_合并场景板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/eclipse-dream/assets/props/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/道具与生物/P01_白马与城堡构件_共用资产板.png",
          "/works/video/eclipse-dream/assets/props/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/道具与生物/P02_梦境核心与光刃_共用资产板.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U01_场景与形态菜单.svg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U02_战斗界面.svg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/界面/U03_技能名称.svg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C01.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C02.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C03.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C04.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C05.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/C06.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/P01.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/P02.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S01.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S02.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/S03.jpg",
          "/works/video/eclipse-dream/assets/keyframes/月蚀梦域_互动游戏_剧本分镜固定资产/固定资产/原生参考/UI.jpg"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/eclipse-dream/assets/storyboards/月蚀梦域_互动游戏_剧本分镜固定资产/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "剧本",
            "src": "/works/video/eclipse-dream/assets/script/月蚀梦域_互动游戏_剧本分镜固定资产/剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "poli-adventure",
    "title": "波利大冒险",
    "episode": "",
    "video": "/works/video/poli-adventure/video.mp4",
    "videoUrl": "/works/video/poli-adventure/video.mp4",
    "cover": "/works/video/poli-adventure/cover.jpg",
    "coverType": "auto",
    "duration": "0:54",
    "durationSeconds": 53.523,
    "width": 528,
    "height": 950,
    "aspectRatio": 0.5557894736842105,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "poli-adventure",
    "category": "游戏内容",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 13,
    "placeholder": false,
    "tags": [
      "AI",
      "Game",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "剧本",
          "src": "/works/video/poli-adventure/assets/script/波利大冒险_游戏推广_剧本分镜固定资产/剧本.md",
          "kind": "document"
        }
      ],
      "characters": [
        {
          "id": "characters-image-1",
          "title": "C01_森林探险家_波利",
          "src": "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C01_森林探险家_波利.png",
          "kind": "image"
        },
        {
          "id": "characters-image-2",
          "title": "C02_狐狸",
          "src": "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C02_狐狸.png",
          "kind": "image"
        },
        {
          "id": "characters-image-3",
          "title": "C03_拳击袋鼠",
          "src": "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C03_拳击袋鼠.png",
          "kind": "image"
        },
        {
          "id": "characters-image-4",
          "title": "C04_斑纹巨蛇",
          "src": "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C04_斑纹巨蛇.png",
          "kind": "image"
        },
        {
          "id": "characters-image-5",
          "title": "C05_鳄鱼首领_克罗科",
          "src": "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C05_鳄鱼首领_克罗科.png",
          "kind": "image"
        }
      ],
      "environments": [
        {
          "id": "scenes-image-1",
          "title": "S01_林间树洞小屋",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S01_林间树洞小屋.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-2",
          "title": "S02_紫光狐狸森林",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S02_紫光狐狸森林.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-3",
          "title": "S04_藤蔓遗迹丛林",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S04_藤蔓遗迹丛林.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-4",
          "title": "S05_熔岩首领大厅",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S05_熔岩首领大厅.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-5",
          "title": "S06_冒险地图底图",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S06_冒险地图底图.png",
          "kind": "image"
        },
        {
          "id": "scenes-image-6",
          "title": "SB03_袋鼠草原_拳击擂台",
          "src": "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/SB03_袋鼠草原_拳击擂台.png",
          "kind": "image"
        }
      ],
      "props": [
        {
          "id": "props-image-1",
          "title": "P01_探险与解谜道具",
          "src": "/works/video/poli-adventure/assets/props/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/道具/P01_探险与解谜道具.png",
          "kind": "image"
        },
        {
          "id": "props-image-2",
          "title": "P02_拳击与战斗道具",
          "src": "/works/video/poli-adventure/assets/props/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/道具/P02_拳击与战斗道具.png",
          "kind": "image"
        }
      ],
      "storyboards": [
        {
          "id": "storyboards-image-1",
          "title": "01",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/01.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-2",
          "title": "02",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/02.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-3",
          "title": "03",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/03.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-4",
          "title": "04",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/04.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-5",
          "title": "05",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/05.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-6",
          "title": "06",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/06.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-7",
          "title": "07",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/07.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-8",
          "title": "08",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/08.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-9",
          "title": "09",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/09.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-10",
          "title": "10",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/10.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-11",
          "title": "11",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/11.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-12",
          "title": "12",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/12.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-13",
          "title": "13",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/13.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-14",
          "title": "14",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/14.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-15",
          "title": "15",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/15.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-16",
          "title": "16",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/16.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-17",
          "title": "17",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/17.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-18",
          "title": "18",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/18.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-19",
          "title": "19",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/19.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-20",
          "title": "20",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/20.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-21",
          "title": "21",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/21.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-22",
          "title": "22",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/22.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-23",
          "title": "23",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/23.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-24",
          "title": "24",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/24.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-25",
          "title": "25",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/25.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-26",
          "title": "26",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/26.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-27",
          "title": "27",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/27.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-28",
          "title": "28",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/28.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-29",
          "title": "29",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/29.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-30",
          "title": "30",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/30.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-31",
          "title": "31",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/31.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-image-32",
          "title": "32",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/32.jpg",
          "kind": "image"
        },
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "U01_标题与下载",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U01_标题与下载.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "U02_冒险地图",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U02_冒险地图.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "U03_狐狸关卡结算",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U03_狐狸关卡结算.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "U04_袋鼠对话框",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U04_袋鼠对话框.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "U05_拳击战斗界面",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U05_拳击战斗界面.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "U06_蛇形解谜界面",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U06_蛇形解谜界面.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "U07_鳄鱼战斗界面",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U07_鳄鱼战斗界面.svg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "U08_鳄鱼最终结算",
          "src": "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U08_鳄鱼最终结算.svg",
          "kind": "image"
        }
      ],
      "audio": []
    },
    "assets": [
      {
        "id": "characters",
        "type": "characters",
        "title": "角色设计",
        "description": "",
        "images": [
          "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C01_森林探险家_波利.png",
          "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C02_狐狸.png",
          "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C03_拳击袋鼠.png",
          "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C04_斑纹巨蛇.png",
          "/works/video/poli-adventure/assets/characters/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/人物三视图/C05_鳄鱼首领_克罗科.png"
        ],
        "audio": [],
        "documents": [],
        "order": 1
      },
      {
        "id": "scenes",
        "type": "scenes",
        "title": "场景设计",
        "description": "",
        "images": [
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S01_林间树洞小屋.png",
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S02_紫光狐狸森林.png",
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S04_藤蔓遗迹丛林.png",
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S05_熔岩首领大厅.png",
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/S06_冒险地图底图.png",
          "/works/video/poli-adventure/assets/scenes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/场景/SB03_袋鼠草原_拳击擂台.png"
        ],
        "audio": [],
        "documents": [],
        "order": 2
      },
      {
        "id": "props",
        "type": "props",
        "title": "道具设计",
        "description": "",
        "images": [
          "/works/video/poli-adventure/assets/props/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/道具/P01_探险与解谜道具.png",
          "/works/video/poli-adventure/assets/props/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/道具/P02_拳击与战斗道具.png"
        ],
        "audio": [],
        "documents": [],
        "order": 3
      },
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U01_标题与下载.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U02_冒险地图.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U03_狐狸关卡结算.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U04_袋鼠对话框.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U05_拳击战斗界面.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U06_蛇形解谜界面.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U07_鳄鱼战斗界面.svg",
          "/works/video/poli-adventure/assets/keyframes/波利大冒险_游戏推广_剧本分镜固定资产/固定资产/界面/U08_鳄鱼最终结算.svg"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/01.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/02.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/03.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/04.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/05.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/06.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/07.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/08.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/09.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/10.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/11.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/12.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/13.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/14.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/15.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/16.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/17.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/18.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/19.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/20.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/21.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/22.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/23.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/24.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/25.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/26.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/27.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/28.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/29.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/30.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/31.jpg",
          "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜参考/32.jpg"
        ],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/poli-adventure/assets/storyboards/波利大冒险_游戏推广_剧本分镜固定资产/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "剧本",
            "src": "/works/video/poli-adventure/assets/script/波利大冒险_游戏推广_剧本分镜固定资产/剧本.md"
          }
        ],
        "order": 7
      }
    ]
  },
  {
    "id": "transformation",
    "title": "变装",
    "episode": "",
    "video": "/works/video/transformation/video.mp4",
    "videoUrl": "/works/video/transformation/video.mp4",
    "cover": "/works/video/transformation/cover.jpg",
    "coverType": "auto",
    "duration": "0:07",
    "durationSeconds": 6.572,
    "width": 692,
    "height": 1230,
    "aspectRatio": 0.5626016260162602,
    "orientation": "portrait",
    "metadataSource": "file",
    "slug": "transformation",
    "category": "创意短视频",
    "series": "",
    "region": "",
    "description": "",
    "year": "",
    "preview": "",
    "videoType": "mp4",
    "role": "",
    "tools": [],
    "featured": false,
    "order": 14,
    "placeholder": false,
    "tags": [
      "AI",
      "Motion",
      "Storyboard"
    ],
    "caseStudy": {
      "overview": "",
      "roles": [],
      "process": [],
      "outcome": ""
    },
    "production": {
      "script": [
        {
          "id": "script-1",
          "title": "01_剧本",
          "src": "/works/video/transformation/assets/script/变装_剧本分镜资产包/01_剧本.md",
          "kind": "document"
        }
      ],
      "characters": [],
      "environments": [],
      "props": [],
      "storyboards": [
        {
          "id": "storyboards-1",
          "title": "分镜提示词",
          "src": "/works/video/transformation/assets/storyboards/变装_剧本分镜资产包/分镜提示词.md",
          "kind": "document"
        }
      ],
      "keyframes": [
        {
          "id": "keyframes-image-1",
          "title": "T01_F008_F009",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T01_F008_F009.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-2",
          "title": "T02_F028_F029",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T02_F028_F029.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-3",
          "title": "T03_F043_F044",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T03_F043_F044.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-4",
          "title": "T04_F061_F062",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T04_F061_F062.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-5",
          "title": "T05_F072_F073",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T05_F072_F073.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-6",
          "title": "T06_F090_F091",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T06_F090_F091.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-7",
          "title": "T07_F098_F099",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T07_F098_F099.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-8",
          "title": "T08_F108_F109",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T08_F108_F109.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-9",
          "title": "T09_F115_F116",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T09_F115_F116.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-10",
          "title": "T10_F124_F125",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T10_F124_F125.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-11",
          "title": "T11_F148_F149",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T11_F148_F149.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-12",
          "title": "T12_F178_F179",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T12_F178_F179.jpg",
          "kind": "image"
        },
        {
          "id": "keyframes-image-13",
          "title": "F000_0.000s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F000_0.000s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-14",
          "title": "F004_0.133s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F004_0.133s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-15",
          "title": "F008_0.267s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F008_0.267s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-16",
          "title": "F009_0.300s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F009_0.300s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-17",
          "title": "F023_0.767s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F023_0.767s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-18",
          "title": "F028_0.933s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F028_0.933s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-19",
          "title": "F029_0.967s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F029_0.967s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-20",
          "title": "F039_1.300s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F039_1.300s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-21",
          "title": "F043_1.433s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F043_1.433s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-22",
          "title": "F044_1.467s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F044_1.467s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-23",
          "title": "F054_1.800s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F054_1.800s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-24",
          "title": "F061_2.033s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F061_2.033s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-25",
          "title": "F062_2.067s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F062_2.067s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-26",
          "title": "F067_2.233s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F067_2.233s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-27",
          "title": "F072_2.400s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F072_2.400s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-28",
          "title": "F073_2.433s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F073_2.433s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-29",
          "title": "F083_2.767s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F083_2.767s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-30",
          "title": "F090_3.000s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F090_3.000s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-31",
          "title": "F091_3.033s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F091_3.033s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-32",
          "title": "F096_3.200s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F096_3.200s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-33",
          "title": "F098_3.267s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F098_3.267s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-34",
          "title": "F099_3.300s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F099_3.300s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-35",
          "title": "F104_3.467s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F104_3.467s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-36",
          "title": "F108_3.600s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F108_3.600s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-37",
          "title": "F109_3.633s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F109_3.633s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-38",
          "title": "F112_3.733s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F112_3.733s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-39",
          "title": "F115_3.833s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F115_3.833s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-40",
          "title": "F116_3.867s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F116_3.867s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-41",
          "title": "F120_4.000s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F120_4.000s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-42",
          "title": "F124_4.133s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F124_4.133s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-43",
          "title": "F125_4.167s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F125_4.167s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-44",
          "title": "F141_4.700s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F141_4.700s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-45",
          "title": "F148_4.933s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F148_4.933s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-46",
          "title": "F149_4.967s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F149_4.967s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-47",
          "title": "F167_5.567s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F167_5.567s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-48",
          "title": "F178_5.933s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F178_5.933s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-49",
          "title": "F179_5.967s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F179_5.967s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-50",
          "title": "F190_6.333s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F190_6.333s.png",
          "kind": "image"
        },
        {
          "id": "keyframes-image-51",
          "title": "F196_6.533s",
          "src": "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F196_6.533s.png",
          "kind": "image"
        }
      ],
      "audio": [
        {
          "id": "audio-1",
          "title": "原片完整音轨",
          "src": "/works/video/transformation/assets/audio/变装_剧本分镜资产包/声音参考/原片完整音轨.m4a",
          "kind": "audio"
        }
      ]
    },
    "assets": [
      {
        "id": "keyframes",
        "type": "keyframes",
        "title": "关键帧",
        "description": "",
        "images": [
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T01_F008_F009.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T02_F028_F029.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T03_F043_F044.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T04_F061_F062.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T05_F072_F073.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T06_F090_F091.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T07_F098_F099.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T08_F108_F109.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T09_F115_F116.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T10_F124_F125.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T11_F148_F149.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/转场对照/T12_F178_F179.jpg",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F000_0.000s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F004_0.133s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F008_0.267s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F009_0.300s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F023_0.767s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F028_0.933s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F029_0.967s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F039_1.300s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F043_1.433s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F044_1.467s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F054_1.800s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F061_2.033s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F062_2.067s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F067_2.233s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F072_2.400s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F073_2.433s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F083_2.767s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F090_3.000s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F091_3.033s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F096_3.200s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F098_3.267s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F099_3.300s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F104_3.467s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F108_3.600s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F109_3.633s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F112_3.733s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F115_3.833s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F116_3.867s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F120_4.000s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F124_4.133s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F125_4.167s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F141_4.700s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F148_4.933s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F149_4.967s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F167_5.567s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F178_5.933s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F179_5.967s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F190_6.333s.png",
          "/works/video/transformation/assets/keyframes/变装_剧本分镜资产包/资产参考/F196_6.533s.png"
        ],
        "audio": [],
        "documents": [],
        "order": 4
      },
      {
        "id": "storyboards",
        "type": "storyboards",
        "title": "分镜",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "storyboards-1",
            "title": "分镜提示词",
            "src": "/works/video/transformation/assets/storyboards/变装_剧本分镜资产包/分镜提示词.md"
          }
        ],
        "order": 5
      },
      {
        "id": "audio",
        "type": "audio",
        "title": "声音设计",
        "description": "",
        "images": [],
        "audio": [
          {
            "id": "audio-1",
            "title": "原片完整音轨",
            "src": "/works/video/transformation/assets/audio/变装_剧本分镜资产包/声音参考/原片完整音轨.m4a"
          }
        ],
        "documents": [],
        "order": 6
      },
      {
        "id": "script",
        "type": "script",
        "title": "剧本与镜头记录",
        "description": "",
        "images": [],
        "audio": [],
        "documents": [
          {
            "id": "script-1",
            "title": "01_剧本",
            "src": "/works/video/transformation/assets/script/变装_剧本分镜资产包/01_剧本.md"
          }
        ],
        "order": 7
      }
    ]
  }
];
