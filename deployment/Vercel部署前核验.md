# Vercel正式上线前核验

核验日期：2026-10-13（北京时间）。本轮未创建Vercel项目、未部署、未迁移媒体、未购买套餐或域名、未修改GitHub私有状态。

## 结论

代码层面兼容静态部署，66个构建页面已生成并完成本地核验。推荐方案B：Vercel托管页面、图片和封面，18段视频独立对象存储并直接由浏览器读取。当前仍需确认媒体与付费方案、完成Vercel登录及GitHub仓库授权、提供真实PDF简历。不能把本地构建成功当作Vercel线上验收成功。

## 工程与配置

- 工程：桌面/个人设计网站/personal-portfolio；私有仓库liyw18/yuanwei-portfolio，main；核验基线55fd94b。
- 锁定依赖：Next.js 16.4.0、React 19.3.0、TypeScript 5.9系列、Three.js 0.180.0；原生CSS，未配置Tailwind或ESLint。
- 本地Node.js：24.19.0；Vercel当前支持24.x和22.x，建议项目设置24.x。
- next.config.ts：output:export、trailingSlash:true、images.unoptimized:true。保持原图，无图片优化服务依赖。
- 动态详情路由通过generateStaticParams预生成；没有依赖运行时SSR或数据库。真实详情及旧兼容路由均保留。
- 安装：pnpm install --frozen-lockfile；构建：pnpm run build；产物：out。
- 推荐门禁：pnpm run check && pnpm run typecheck && pnpm run build。内容门禁会校验真实MP4的SHA256，防止误部署LFS指针。
- 当前源码不需要环境变量，未发现生产资源引用localhost、127.0.0.1或Windows绝对路径。
- 部署配置草案为同目录vercel.static-export.example.json，尚未作为根目录vercel.json启用。Next.js预置也可自动识别当前静态导出；最终参数需在受保护的Vercel构建中确认。

## 18段视频与容量

完整逐文件路径、宽高和大小见18段视频清单.csv。

| 指标 | 实际结果 |
|---|---:|
| 视频项目 | 14 |
| 实际MP4 | 18 |
| 视频总字节 | 2,397,134,674 |
| 视频十进制GB | 2.3971 |
| 视频GiB | 2.2325 |
| 最大视频 | 长念缚卿第03集，281,935,241字节，约281.935MB |
| 超100MiB视频 | 11（GitHub普通Git门槛；已由LFS解决） |
| 超100MB视频 | 12（十进制；不能与100MiB混用） |
| public总字节 | 3,014,783,744 |
| out总字节 | 3,019,140,510 |
| out文件数 | 971 |

构建日志为66个静态页面；out有67个HTML文件，包含导出404的重复路径文件，并非新增作品。若仅将18个MP4从发布包分离，页面和其余资源约0.622GB；建议媒体空间至少预留5GB，若同时存放全部图片与资产建议10GB以上。原文件与Git LFS备份不删除。

## 官方限制：必须区分部署方式

1. Vercel支持Git LFS。在项目Settings的Git设置启用；启用后必须重新部署，才能拉取真实媒体。
2. 官方limits文档的100MB（Hobby）/1GB（Pro）是CLI上传源文件总量限制。当前含视频发布目录约3.019GB，超过这两档，不能直接走普通全量CLI上传。这不是Git部署单个静态视频的100MB禁令。
3. Git集成在远端克隆、拉取LFS并构建，与CLI源码上传不同。本轮未从官方文档确认Git集成静态资源的单文件100MB硬限制，因此不能断言11段视频会因该阈值必然失败，也不能未经线上构建保证全量视频可发布。
4. 66个页面低于官方路由限额2048。静态网站不应把视频打入Function；Function的250MB限制不能用于判断public静态媒体。
5. Git方式仍有下载时间、构建磁盘、部署保留空间与媒体流量成本风险。每次保留一个约3GB产物会占用相应部署存储，不是Git LFS直接向招聘方提供视频。
6. Vercel Blob单文件上限5TB，512MB缓存门槛；当前最大约282MB均在缓存门槛内。超100MB建议multipart上传。该建议不要求压缩原视频。

## 两种方案

| 方案 | 实现 | 优点 | 风险与当前判断 |
|---|---|---|---|
| A 全部静态部署 | Git导入私有仓库，启用LFS，真实视频保留public相对路径 | 基本无需更改播放代码 | 每次部署要拉取约2.4GB视频、out约3GB；CLI路径超总量限制；版本保留与流量较重，需账号和受保护构建实测。可评估，非推荐长期方案 |
| B 页面与视频分离 | Vercel网页，视频经确认复制至Blob或其他媒体存储，浏览器直接读HTTPS媒体URL | 发布包减小，视频更新与代码解耦 | 必须适配远程资源校验与列表完整性逻辑，并排除发布产物的视频副本；还需Range、Content-Type、CORS和费用核验。推荐 |

Git LFS保留源码媒体备份，不应使用GitHub私有LFS下载URL作为网页视频CDN。独立存储应提供稳定HTTPS地址、video/mp4、字节范围请求（206）及合理缓存；采用浏览器直连，不通过VercelFunction代理整个视频。

## 成本估算（不是开通或报价承诺）

- 当前视频2.397GB，超过Hobby Blob的1GB免费存储。Hobby Blob免费传输10GB/月，不能承诺当前全量视频免费使用；超额服务可能暂停。
- Vercel Pro当前基础价20美元/月，含20美元用量额度。Blob基础存储单价0.023美元/GB月，仅视频存储理论约0.055美元/月（抵扣、区域价、税和其他项目用量另计）。基础订阅通常比这项存储费大得多。
- 当前官方Pro有Flat Rate CDN，但需要启用、选档并满足适用规则；大量视频占主要带宽的场景可能不适用，不能按“无限免费视频流量”承诺成本。按量模式Blob传输基础价0.05美元/GB，区域和源站/请求费用另计。
- 举例：100次完整读取全部18段视频约239.7GB；1000次约2397GB。按0.05美元/GB简单估算分别约12美元/120美元，是未扣额度、未加其他费用的流量示例，不等于网站100/1000次访问的真实账单；只观看部分视频则明显更少。
- Hobby仅限个人非商业用途；仅求职个人展示可评估，若承担商业合作业务展示，应先核对使用范围并考虑Pro。没有自动升级或启动试用。
- 其他对象存储可再比价，但未创建账号、上传媒体或做免费额度承诺。

## 方案B需要的代码调整（本轮未执行）

- src/data/videos.ts：配置每段主视频与剧集的稳定远程URL，同时保留原始路径和SHA清单，不能随意改项目内容。
- src/lib/complete-videos.ts目前只接受public本地文件；仅替换URL会把真实项目隐藏。需要同时支持已核验的远程媒体和现有本地文件。
- scripts/check-content.mjs：当前按本地文件进行SHA、MP4元数据检查，需要增加远程资源清单/核验流程；不可直接取消完整性门禁。
- 视频播放器已经支持src传入HTTPS地址，一般无需重构；测试seek、原生全屏、横竖屏和剧集切换。
- 在独立发布副本中排除MP4输出，保留原始public文件和Git LFS对象不动。仅改远程URL但继续把public视频复制进out，不会降低部署体积。
- Blob读写Token只用于受保护的管理/导入过程，不嵌入前端，不使用NEXT_PUBLIC前缀；公开作品用稳定public媒体URL。未经确认不创建公开Blob存储。

## 实际验证与未验证

已运行TypeScript、内容检查、13项自动测试和正式构建。18段public视频SHA256/尺寸/时长通过，out的18段视频SHA256也与清单一致，导出HTML中本地src/href均存在；611条发布路径逐层核对大小写，未发现Linux路径大小写不一致。

本地生产产物（127.0.0.1临时服务）实际浏览：首页、Design、Video、About、横/竖视频详情和设计详情。1440桌面、390手机主要路由无横向溢出；个人头像成功加载。首页自动轮播、手动箭头、IP分类筛选（10项）、设计详情跳转通过。列表显示32张设计、14个视频项目。

灵脉重启第01/02集真实媒体加载并正确切换，竖屏变装保持692×1230与contain显示；原生播放控制测试。真实剧本展开、完整制作档案、资产灯箱、TVC原片音轨加载（85.008秒）通过。

PDF简历未配置（profile.resume为空），按钮禁用并显示待提供，不能报告PDF下载通过。需提供真实PDF放public/resume/后配置。

未验证：所有18段全程观看、真实手机硬件与所有浏览器、Vercel远程构建/生产视频Range与跨域、招聘方外网访问、最终域名下SEO/分享。Vercel打开的是登录页，本机未找到可用CLI或项目关联，账号套餐/项目权限尚未确认。

## 下一步安全命令（不创建公开部署）

```powershell
Set-Location 'C:\Users\PC\Desktop\个人设计网站\personal-portfolio'
git lfs pull
pnpm install --frozen-lockfile
pnpm run check
pnpm run typecheck
pnpm run build
pnpm dlx vercel@latest login
pnpm dlx vercel@latest whoami
pnpm dlx vercel@latest project ls
```

上面只下载/构建本地工程和检查登录与项目，不包含deploy或--prod。当前电脑依赖已存在并已经检查，无需立即重复下载视频。

确认正式上线方案后，再在Vercel授权GitHub私有仓库liyw18/yuanwei-portfolio，选择套餐及媒体存储，先完成受保护环境验收，再取得你的发布确认。导入仓库流程本身可能触发部署，因此本轮没有点击Import/Deploy，也没有推送部署配置。

## 官方依据

- Git LFS：https://vercel.com/docs/project-configuration/git-settings
- CLI与路由限制：https://vercel.com/docs/limits
- Node.js版本：https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- Blob现行价格与限制：https://vercel.com/docs/vercel-blob/usage-and-pricing
- 部署保留空间：https://vercel.com/docs/deployment-storage
- Pro基础价格：https://vercel.com/pricing
- Flat Rate CDN规则：https://vercel.com/docs/pricing/flat-rate-cdn
- Hobby使用范围：https://vercel.com/docs/plans/hobby

本轮新增deployment目录中的说明、视频清单和配置草案；reports/vercel-preflight保存本地核验数据与桌面辅助截图。未修改网页、作品数据或原始媒体；未提交或推送这些准备文件。
