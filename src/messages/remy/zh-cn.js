export default {
	title: "Remy 餐饮/酒店平台",
	tagline: "由人工智能驱动，一款为餐饮业和酒店业带来互动体验的平台。",
	date: "2023 年 10 月至今",
	content: `
我在 Circolo 工资期间，我开发了一个将互动菜单和促销展示带入餐饮业的集成体验系统。该项目由我领导，代号为“Remy”，涉及多个部分，包括前端、后端和 AI 集成。

我使用 React 和 Next.js 构建了一个前端管理系统，使客户能够轻松控制他们在平台上的数据。添加、删除、编辑菜单项、更改菜单项的图片或更改菜单设计等操作变得轻而易举。该网站还利用渐进式网络应用（PWA）技术，让用户在手机和便携设备上享受无缝体验。

对于首次将菜单导入平台的用户，我制作了一个 AI 工具，帮助自动化这一过程。用户可以扫描或拍照他们现有的纸质菜单。输入内容通过计算机视觉和人工智能进行分析，几乎无需人工干预，他们的菜单就可以数字化并在我们的平台上使用。

最后，Remy 引入了一个离线渲染系统，用于客户端管理门户和我们内部的互动展示架上的预览。这个系统确保客户在编辑时看到的内容与实际设备上的显示内容一致。实现这个系统的一个主要难点是如何确保在没有互联网连接的情况下完全正常运行，因为展示架在实际生产中可能没有互联网连接。但我通过构建自定义缓存解决方案，确保所有依赖的图片、字体和脚本可以一次性被设备下载，成功解决了这些挑战。
`,
};
