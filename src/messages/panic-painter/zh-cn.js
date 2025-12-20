import { WINDOWS, ANDROID, MACOS, GITHUB } from "./en";

export default {
	title: "Panic Painter",
	tagline: "用 C++ 写成的多平台手机游戏。",
	date: "2021 年 1 月 - 2021 年 5 月",
	content: `
作为康奈尔大学游戏设计项目 (Game Design Initiative at Cornell University, GDIAC) 高级课程的重要组成部分，我与八人团队合作开发了跨平台手机游戏 Panic Painter。团队分为编程和美术两个子团队。作为编程团队负责人，我负责分配任务、管理代码库结构，并确保所有成员认真履行职责。

游戏使用 C++ 开发，基于 GDIAC 自研的游戏引擎，该引擎建立在 Simple DirectMedia Layer (SDL) 库之上。代码库在 Xcode 和 Android Studio 中编译，分别生成 iOS 和 Android 版本。与使用 Unity 等现成商业引擎不同，我们手工实现了项目的多个方面，包括输入处理、声音系统和粒子系统。我们还设计了自定义 OpenGL 着色器来实现所需的绘画效果。

新冠疫情的到来给团队带来巨大挑战。整个大学停课三周，需要迅速转向完全远程的工作流程。更复杂的是，包括我在内的几位成员不得不返回各自国家，面临巨大的时区差异。这对有效协作和团队士气构成重大挑战。为解决这个问题，我与团队进行了集体和个别沟通，了解并适应各自的困难。

最终，我们交付了一个真正引以为豪的产品。最终产品可在[安卓](${ANDROID})、[Windows](${WINDOWS}) 和 [macOS](${MACOS}) 上使用，代码库可在 [GitHub](//github.com/${GITHUB}) 访问。由于 Apple 对侧载的限制，iOS 版本目前不可用。该项目是我游戏设计辅修学位的一部分。
`,
};
