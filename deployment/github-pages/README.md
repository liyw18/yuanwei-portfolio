# GitHub Pages 发布

公开仓库：liyw18/yuanwei-portfolio。
目标网址：https://liyw18.github.io/yuanwei-portfolio/

当前使用预构建静态分支gh-pages发布，不依赖Actions工作流权限。更新源代码不会自动刷新Pages，需要重新构建并发布gh-pages分支。
构建专用环境变量NEXT_PUBLIC_BASE_PATH=/yuanwei-portfolio；NEXT_PUBLIC_VIDEO_RELEASE_BASE_URL指向同仓库portfolio-media-v1 Release。
不配置这两个变量时，Vercel与本地继续保持原有根路径、原生同源MP4路径。

GitHub Pages发布网页、图片、简历和制作档案；18段MP4使用同仓库Release资产。原public文件、路径、素材、数据与Git LFS跟踪保持不变。
Release资产名由public相对路径以--连接，避免多个video.mp4或episode-01.mp4重名。新增/替换视频时需更新Release，并核对SHA256。不要只提交LFS指针就认为线上视频已更新。

prepare-github-pages脚本仅在明确配置Pages环境并确认编译结果后删除out里的MP4副本，不删除public或Git LFS原件。普通构建不可执行此脚本。
源图片、封面、播放器控制、剧集与页面内容不变。GitHub免费入口也需要实测国内连接，不能承诺解决所有网络问题。
