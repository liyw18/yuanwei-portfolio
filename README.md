# 李元伟个人作品集

AI Visual Designer / AIGC Content Creator 个人作品集，展示视觉设计、AIGC内容制作、视频创作与品牌设计。

## 主要功能

- 首页：个人定位、精选设计与视频、自动轮播及合作联系。
- 设计作品：真实作品分类、作品档案、详情及高清预览。
- 视频作品：真实项目分类、多集视频、原生播放器及制作资产。
- 关于我：职业经历、能力、联系方式与可配置的PDF简历下载。
- 响应式布局、键盘交互及减少动态效果设置。

## 技术栈

Next.js App Router、React、TypeScript、Three.js、原生CSS。当前使用静态导出，不依赖数据库、登录后台或API密钥。

## 本地运行

需要 Node.js 20.9或更高版本。工程包含 pnpm-lock.yaml，优先使用pnpm保持依赖版本一致：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

也可使用 `npm install`、`npm run dev`。本地地址为 http://127.0.0.1:3000，此地址仅用于开发，不是生产素材地址。

## 检查和生产构建

```sh
npm run check
npm run typecheck
npm run build
```

`check`检查内容路径、媒体SHA256、尺寸和自动化测试。未配置ESLint，不提供不存在的lint命令。构建产物位于 `out/`，不提交至源码仓库。

## 项目目录

```text
src/app/             页面、路由和全局样式
src/components/      共用导航、作品展示、播放器及资产组件
src/data/            设计、视频、个人资料及素材清单
src/lib/             媒体和项目数据辅助逻辑
public/works/design/ 设计作品资源
public/works/video/  视频、封面及制作资产
public/assets/about/个人头像
public/resume/       简历PDF（按实际提供情况配置）
assets/video/        视频制作包绑定配置
scripts/             导入、元数据读取和内容检查
tests/              自动化检查
```

详细添加规则见《作品添加说明.md》和《内容管理指南.md》。没有提供的事实或素材不应自行补充。

## 媒体资源管理

网页通过 `/works/...` 等站点相对路径引用媒体，不使用本地磁盘路径。原始作品不得擅自压缩、裁切、替换或删除。

当前正式资源含32张设计图片、14个视频项目和18段视频；部分视频超过GitHub普通Git单文件限制。已确认使用Git LFS管理视频，.gitattributes跟踪MP4、MOV、M4V和WebM，原始文件及网页引用路径保持不变。克隆前需安装Git LFS，克隆后执行 `git lfs pull` 并运行内容检查；仅下载源码ZIP或跳过LFS下载不保证视频完整。LFS会消耗仓库账号的存储及下载配额。后续独立媒体存储需要另外确认。

`素材待添加/`、`素材原件/`为本地原始素材与重复备份，`reports/`为本地验收记录，不提交。网站实际使用的图片、封面和制作资产位于public，不因这些排除规则丢失。

## 后续部署

本轮仅准备GitHub私有托管，不自动部署。媒体同步完整后，运行正式构建并将 `out/` 交给支持静态网站的托管平台。需验证静态详情路由、404、视频范围请求和媒体大小限制；GitHub仓库或LFS不能直接代替视频CDN。

正式域名、媒体方案及搜索引擎索引配置在下一阶段另行确认。不要提交环境密钥、令牌或密码。
