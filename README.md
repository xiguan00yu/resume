## 🧾 Resume Generator

在线简历生成器。无须 fork 仓库，即可在线预览、编辑和下载 PDF 简历。✨ [在线编辑](https://xiguan00yu.github.io/resume)

内置 3 套模板，支持**自定义主题颜色**、**自定义模块标题**、**国际化(中/英)** 等.

|默认模板| 简易模板| 简易模板2（适用于多页）|
| -------------------------------- | --------------------------------------------------|----------------------- |
| <img src="https://user-images.githubusercontent.com/15646325/147406773-d1583d83-b4ed-496a-9b7c-2fca8a5fc624.png" height="280" />|<img src="https://user-images.githubusercontent.com/15646325/147406862-19ac2b2a-6dcf-466f-a0dd-53fd1a6abccd.png" height="280" />| <img src="https://user-images.githubusercontent.com/15646325/147406903-19529fe9-9ef8-4877-8165-b2fad0e3b48a.png" height="280" />|
|[Live Demo](https://xiguan00yu.github.io/resume?user=xiguan00yu)  |[Live Demo](https://xiguan00yu.github.io/resume?user=xiguan00yu&template=template2)|[Live Demo](https://xiguan00yu.github.io/resume?user=xiguan00yu&template=template3) |

## 如何使用（How to use）

**方式 1:**

在线编辑 -> 导出配置 -> 存储“简历信息”在个人 github special 仓库下（例如: [linker/linker](https://github.com/xiguan00yu/xiguan00yu/blob/main/resume.json)）

**方式 2:**

直接创建一个 `resume.json` 文件在自己的 special 仓库下 (内容参考: [linker/linker](https://github.com/xiguan00yu/xiguan00yu/blob/main/resume.json)).

**最后**

访问 https://xiguan00yu.github.io/resume?user={user}&branch={branch}

参数说明:

| 参数   | 描述          | 默认值       |
| ------ | ------------- | ------------ |
| user   | github 用户名 | 必选         |
| template | 模板        | 默认: template1 |
| branch | 分支名        | 默认: main |
| mode | 模式        | 备注: 默认为‘只读’模式，设置为: `mode=edit` 即可进入编辑模式 |
| lang | 语言        | 默认: zh_CN |

## 本地开发（Local develop）

```bash
# pnpm required, to see: https://pnpm.io/installation
# Install dependencies
pnpm install
# Then, start
npm start
```

## ✨ Recommendation

- [resumemaker](https://www.resumemaker.online/es.php)
- [Geek Resume - Pure Markdown, an online resume editor for developer.](https://www.jijian.press/)
