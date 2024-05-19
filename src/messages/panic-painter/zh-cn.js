import { WINDOWS, ANDROID, MACOS, GITHUB } from "./en";

export default {
	title: "Panic Painter",
	tagline: "用 C++ 写成的多平台手机游戏。",
	date: "2021 年 1 月 - 2021 年 5 月",
	content: `
作为康奈尔大学游戏设计项目 (Game Design Initiative at Cornell University, GDIAC) 高级课程的一个重要组成部分，我与一个八人团队合作，设计了一款跨平台的手机游戏 Panic Painter。我们的团队分为两个子团队：编程和艺术。作为编程部门的负责人，我的角色包括为每个成员分配任务，监督代码库结构的管理，并确保所有团队成员认真履行各自的职责。

该游戏的构建依赖于 C++ 语言，使用 GDIAC 自制的游戏引擎，该引擎基于 Simple DirectMedia Layer (SDL) 库。相应的代码库在 Xcode 和 Android Studio 中编译，以生成 iOS 和安卓版本。与使用 Unity 等现有商业游戏引擎不同，我们手工制作了项目的许多方面。这包括输入处理机制、声音系统和粒子系统。我们甚至设计了一个自定义的 OpenGL 着色器来实现我们所需的特定绘画效果。

新冠疫情的到来给我们的团队带来了巨大的挑战。整个大学被迫停课三周，需要迅速适应完全虚拟的工作流程。进一步复杂化的是，包括我在内的几位团队成员不得不返回我们的祖国，面临着巨大的时区差异。这种情况对有效的合作和团队整体士气构成了重大挑战。为了解决这个问题，我与团队进行了集体和个别对话，以了解和适应他们各自的困难。

最终，我们交付了一个我们真正感到自豪的产品。最终产品（可在[安卓](${ANDROID})、[Windows](${WINDOWS})、和 [macOS](${MACOS}) 上使用）及相应的代码库可在 [GitHub](//github.com/${GITHUB}) 上访问。由于 Apple 对侧载的限制，iOS 版本目前不可用。这个项目是我游戏设计辅修学位的一部分。
`,
};
