import { WINDOWS, MACOS, GITHUB } from "./en";

export default {
	title: "Fallen Flame",
	tagline: "用 Java 写成的多平台桌面端游戏。",
	date: "2020 年 1 月 - 2020 年 5 月",
	pdfName: "游戏说明",
	content: `
作为康奈尔大学游戏设计项目 (Game Design Initiative at Cornell University, GDIAC) 课程的重要组成部分，我参与了八人团队，开发了跨平台桌面游戏 Fallen Flame。团队分为两个专业子团队：编程和美术。作为编程团队成员，我负责创建核心游戏控制器、实现各种游戏内模型，以及管理声音和输入子系统。

游戏使用 Java 开发，基于 LibGDX 框架。与使用 Unity 等现成商业引擎不同，我们手工实现了项目的多个方面，包括输入处理系统、声音系统和粒子系统。该项目让我在游戏开发的关键组件上积累了宝贵经验。

除了技术实现，我和同事们从零开始设计了整个游戏框架，特别注重游戏性。这表明项目不仅是技术项目，也是设计项目。通过这个过程，我们在如何制作优化玩家体验的游戏方面获得了大量见解，最终产品体现了这些成果。

最终，我们创造了一个体现团队奉献和努力的产品。最终版本可在 [Windows](${WINDOWS}) 和 [macOS](${MACOS}) 上使用，代码库在 [GitHub](//github.com/${GITHUB}) 公开。该项目是我游戏设计辅修学位的一部分。
`,
};
