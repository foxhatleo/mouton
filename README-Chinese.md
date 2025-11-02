# Mouton 🐑

一个使用 Next.js 和 React 构建的现代化双语个人作品集网站。具有交互式头像、流畅动画和响应式设计，支持多个项目和多种语言。

[English](README.md) | [简体中文](README-Chinese.md)

## ✨ 功能特性

- **🌐 国际化** - 完整的双语支持（英语和中文），带区域感知路由
- **⚡ 性能优化** - 使用 Next.js 15 和 Turbopack 实现极速构建
- **🎨 现代 UI** - 自定义动画、交互式头像和响应式设计
- **📱 响应式** - 针对所有设备尺寸优化
- **♿ 无障碍** - 符合 WCAG 标准，具有适当的 ARIA 标签和语义化 HTML
- **🔍 SEO 优化** - Open Graph 标签、Twitter 卡片和全面的元数据
- **✅ 类型安全** - 完整的 TypeScript 覆盖，严格类型检查
- **🧪 测试完善** - Vitest 和 React Testing Library 配置
- **🔧 自动化** - GitHub Actions CI/CD 用于版本管理和代码格式化

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **UI**: React 19
- **样式**: Styled JSX
- **国际化**: next-intl
- **动画**: GSAP
- **代码检查/格式化**: Biome
- **测试**: Vitest + React Testing Library
- **包管理器**: Yarn 4 (Berry)
- **部署**: Vercel

## 🚀 快速开始

### 前置要求

- Node.js 22.x
- Yarn 4.10.3 或更高版本

### 安装

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。当你修改文件时，页面会自动重新加载。

### 可用脚本

```bash
yarn dev          # 使用 Turbopack 启动开发服务器
yarn build        # 构建生产版本
yarn start        # 启动生产服务器
yarn lint         # 运行 Biome 代码检查
yarn test         # 运行测试
yarn test:watch   # 以监听模式运行测试
yarn test:coverage # 运行测试并生成覆盖率报告
```

## 📁 项目结构

```
mouton/
├── src/
│   ├── app/              # Next.js App Router 页面
│   ├── components/       # React 组件
│   ├── constants/        # 常量和配置
│   ├── hooks/            # 自定义 React Hooks
│   ├── i18n/             # 国际化配置
│   ├── messages/         # 翻译文件
│   ├── types/            # TypeScript 类型定义
│   └── utils/            # 工具函数
├── public/               # 静态资源
├── i18n/                 # 根级别 i18n 配置
└── .github/workflows/    # GitHub Actions 工作流
```

## 🎯 主要功能说明

### 交互式头像
首页特色交互式头像组件，响应用户交互，提供动画和视频播放功能。

### 项目展示
每个项目都有独立的页面，包含：
- 带滑动导航的图片轮播
- 多语言详细描述
- 演示、代码仓库和文档链接

### 自动化工作流
仓库包含 GitHub Actions 工作流，可以：
- 自动使用提交时间戳更新包版本
- 运行 Biome 格式化并检查代码
- 处理并发提交的竞态条件

## 🔧 开发

### 代码风格
本项目使用 [Biome](https://biomejs.dev/) 进行代码检查和格式化。配置强制执行：
- 无障碍（a11y）最佳实践
- 安全规则
- 一致的代码格式化

### 测试
测试使用 Vitest 和 React Testing Library 设置。为工具函数提供了示例测试。

### 类型安全
项目使用严格的 TypeScript 配置，包括：
- 现代 ES2022 目标
- 严格类型检查
- 路径别名以便更清晰的导入

## 📝 许可证

本项目采用 Apache License, version 2.0 许可证。

## 📖 关于项目名称

"Mouton"（法语中的"羊"）这个名字来源于安托万·德·圣埃克苏佩里的经典之作《小王子》。正如小王子画的那只装在盒子里的羊，邀请我们发挥想象力一样，这个项目旨在创造一些简单而有意义的东西——一个在网络上反映创造力和美好的个人空间。

## 🙏 致谢

使用现代 Web 技术和最佳实践构建。代码库优先考虑可维护性、性能和用户体验。

---

**注**：这是一个开源个人项目。欢迎贡献、反馈和建议！

