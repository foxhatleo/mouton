/* eslint-disable max-len,no-eval */

"use client";

export default function useConsole() {
    if (typeof window === "undefined" || (window as any).__mouton_console_printed) {
        return;
    }
    (window as any).__mouton_console_printed = true;
    // console.log("\\n\\n%c𝐇𝐢 𝐭𝐡𝐞𝐫𝐞! 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐯𝐢𝐬𝐢𝐭𝐢𝐧𝐠 𝐥𝐞𝐨𝐥𝐢𝐚𝐧𝐠.𝐜𝐨𝐦.\\n%c\\nThe source code of this project is available at: https://github.com/foxhatleo/mouton\\nIt is licensed under Apache License, version 2.0.\\n\\n\\n", 'color:black;font-size:20px','color:black;font-family:"SF Pro",Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;')
    const message = "63|6f|6e|73|6f|6c|65|2e|6c|6f|67|28|22|5c|6e|5c|6e|25|63|1d407|1d422|20|1d42d|1d421|1d41e|1d42b|1d41e|21|20|1d413|1d421|1d41a|1d427|1d424|20|1d432|1d428|1d42e|20|1d41f|1d428|1d42b|20|1d42f|1d422|1d42c|1d422|1d42d|1d422|1d427|1d420|20|1d425|1d41e|1d428|1d425|1d422|1d41a|1d427|1d420|2e|1d41c|1d428|1d426|2e|5c|6e|25|63|5c|6e|54|68|65|20|73|6f|75|72|63|65|20|63|6f|64|65|20|6f|66|20|74|68|69|73|20|70|72|6f|6a|65|63|74|20|69|73|20|61|76|61|69|6c|61|62|6c|65|20|61|74|3a|20|68|74|74|70|73|3a|2f|2f|67|69|74|68|75|62|2e|63|6f|6d|2f|66|6f|78|68|61|74|6c|65|6f|2f|6d|6f|75|74|6f|6e|5c|6e|49|74|20|69|73|20|6c|69|63|65|6e|73|65|64|20|75|6e|64|65|72|20|41|70|61|63|68|65|20|4c|69|63|65|6e|73|65|2c|20|76|65|72|73|69|6f|6e|20|32|2e|30|2e|5c|6e|5c|6e|5c|6e|22|2c|27|63|6f|6c|6f|72|3a|62|6c|61|63|6b|3b|66|6f|6e|74|2d|73|69|7a|65|3a|32|30|70|78|27|2c|27|63|6f|6c|6f|72|3a|62|6c|61|63|6b|3b|66|6f|6e|74|2d|66|61|6d|69|6c|79|3a|22|53|46|20|50|72|6f|22|2c|48|65|6c|76|65|74|69|63|61|2c|41|72|69|61|6c|2c|73|61|6e|73|2d|73|65|72|69|66|3b|66|6f|6e|74|2d|73|69|7a|65|3a|31|35|70|78|3b|6c|69|6e|65|2d|68|65|69|67|68|74|3a|31|2e|35|3b|27|29";
    const code = message.split("|").map((ele) => String.fromCodePoint(parseInt(ele, 16))).join("");
    eval(code);
}
