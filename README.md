# Cloud Spark

# 项目背景

为一家阿里云官方授权合作伙伴"灿云/卓牛云"（安徽灿云信息技术有限公司）设计企业官网。

业务：企业上云、云基础设施、AI 算力 / GPU、等保安全合规、云计算咨询、云上运维托管。

现有官网：https://ahcanyun.com（域名备用可改为示例），需要完全重新设计，风格焕新，但保留现有业务与数据内容。

# 核心要求：双端界面

- 必须同时做好【桌面端（≥1280px）】和【移动端（320-767px）】两套体验，移动端优先设计。

- 移动端是本次重点：现有界面在手机上很难看，需要彻底改观。

  具体要求：

  1. 手机端单列布局为主，内容纵向堆叠，避免多项挤压在一行；

  2. 卡片、按钮、输入框在手机上要有足够大的点击区域（高度 ≥ 44px）；

  3. 文字在手机端不能被截断、溢出或挤在一起；行高、字号要舒适；

  4. 导航在手机上收进抽屉菜单（汉堡按钮），不要横向溢出；

  5. 图片自适应，表格/价格卡片在手机上自动重排或横向滚动优雅处理；

  6. 首屏（Hero）在手机上不能占满一整个屏幕后又紧贴第二屏，留好呼吸感；

  7. 横竖屏都要正常，固定元素（顶部栏、浮动按钮）不能遮挡内容；

  8. 双端共用一套设计令牌（颜色、间距、字号、圆角），用响应式断点切换布局，而不是单独做两套页面。

# 页面结构（单页，锚点导航）

1. 顶部导航：logo + 菜单（首页/核心能力/核心优势/企业动态/联系我们）+ 免费咨询按钮；移动端抽屉菜单。

2. Hero 首屏：品牌标语 + 副标题 + 双 CTA（免费咨询云架构师 / 浏览云产品）+ 信任徽标（阿里云官方授权伙伴），背景干净、有质感；可带轻量动效但不影响性能。

3. 统计条：3折最/低至、10年+、500家+、7×24小时 等数据展示。

4. 核心能力（服务卡片）：上云咨询、等保咨询、软件开发咨询、云上运维服务——桌面端 2×2 网格，移动端单列；每张卡片含图标、标题、描述、标签。

5. 核心优势：专属折扣 / 官方授权 / 技术支持 / 定制方案。

6. 企业动态 / 新闻列表：封面图 + 标题 + 摘要 + 日期，移动端纵向列表。

7. 联系区：电话、邮箱、地址、微信二维码、需求表单；表单在手机端单列全宽输入框。

8. 页脚：品牌简介、快捷链接、联系信息、备案号。

# 视觉风格

- 基调：现代、专业、可信赖的企业科技感；可参考顶级云厂商官网（阿里云/AWS/Azure）的质感。

- 主色：科技蓝/深蓝系 + 品牌强调色（可带一点"灿云"的暖金或电光橙做点缀，形成记忆点），白/浅灰背景，深色文字。

- 字体：中文用思源黑体/系统字体栈，数字/英文可用 Space Grotesk 或 DM Sans 等现代几何字体；标题粗、正文轻，层级清晰。

- 细节：圆角适中（卡片 12-16px），柔和阴影，渐变、光晕、网格底纹适度使用，避免花哨。

- 动效：滚动渐入、悬浮上浮、按钮反馈等克制使用；移动端禁用重交互（如 hover 依赖）。

# 技术要求

- 技术栈：React + Vite + TypeScript + Tailwind CSS（符合 Lovable 默认），可加 Radix/shadcn 风格组件。

- 响应式：移动优先，用断点 sm/md/lg/xl 渐进增强。

- 数据：页面文案、能力卡片、新闻、联系方式等应抽象为可配置数据（settings/capabilities/news/contact），方便后续接后端 API。

- 无障碍：语义化标签、对比度达标、可聚焦、按键可导航。

- 性能：图片懒加载，字体子集化，首屏轻量；移动端网络环境差也能快速打开。

# 交付标准

- 视觉必须让"懂设计的人"认可：留白、对齐、对比、层级都要专业；

- 每个板块在桌面和手机各截一张对比图自查，确保手机端不出现内容错位、挤压、溢出；

- 最终给出可直接部署的完整页面。   帮我优化一下排版https://ahcanyun.com/#contact这个是现在的网页前端，

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://azure-aura-architect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/891c4386-1b42-485f-93d1-37ab3d541dc3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
