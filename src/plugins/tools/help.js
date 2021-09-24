const helpMessage = `🔘 绑定 <米游社通行证ID>
🔘 改绑 <米游社通行证ID>
🔘 米游社 [米游社通行证ID | @群友] 👉 查询并更新角色信息
🔘 uid [游戏内UID | @群友] 👉 查询并更新角色信息
🔘 深渊 [游戏内UID | @群友]
🔘 上期深渊 [游戏内UID | @群友]
🔘 我的 <角色名> 👉 查询我的角色
🔘 信息 <角色名 | 武器名> 👉 查询角色或武器的游戏数据
🔘 十连
🔘 卡池 <常驻 | 角色 | 武器> 👉 切换【十连】的卡池
🔘 定轨 <武器名> 👉 定轨武器卡池并清除命定值
🔘 查看定轨
🔘 取消定轨
🔘 圣遗物 [副本ID] 👉 掉落一个圣遗物
🔘 强化 👉 强化掉落的上一个圣遗物
🔘 评分 <背包中的圣遗物截图（黄白背景）> 👉 为截图中的圣遗物评分
🔘 副本 👉 查询所有副本ID
🔘 武器 👉 武器素材表
🔘 天赋 👉 天赋素材表
🔘 周本 👉 周本材料表
🔘 roll [1-100] 👉 掷骰子
🔘 点歌 <关键词...> 👉 点歌
🔘 音乐源 <QQ | 163> 👉 切换【点歌】的音乐源
🔘 今天吃什么
🔘 伟大的升华
🔘 带个话 <单行图文...> 👉 给主人带个话
🔘 管理 👉 查询管理命令
-------------------
📎 <> 表示必填，[] 表示可选，前面需加空格
📎 可选项不填通常约定查询自己，| 表示选其一
📎 手指（👉）后面是说明
📎 不要[CQ:at,qq=${bot.uin}]哦`;

async function help(id, type) {
  await bot.sendMessage(id, helpMessage, type);
}

export { help };
