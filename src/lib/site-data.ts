import newsCover1 from "@/assets/news-1.jpg";
import newsCover2 from "@/assets/news-2.jpg";

export const settings = {
  brand: "灿云 · 卓牛云",
  company: "安徽灿云信息技术有限公司",
  badge: "阿里云官方授权合作伙伴",
  heroKicker: "上云迁移 · 云基础设施 · AI 算力",
  heroTitle: "上云首选灿云",
  heroSubtitle:
    "面向各行业企业提供一站式上云解决方案，涵盖云资源选型、架构规划、部署迁移、云上运维、等保安全合规、软件开发及 MaaS 大模型落地，助力企业数字化转型升级。",
  heroChips: ["官方授权", "7×24 服务", "专属折扣"],
  icp: "皖ICP备2023000000号-1",
};

export const nav = [
  { label: "首页", href: "#home" },
  { label: "核心能力", href: "#services" },
  { label: "核心优势", href: "#advantages" },
  { label: "企业动态", href: "#news" },
  { label: "联系我们", href: "#contact" },
];

export const stats = [
  { value: "低至 3折", label: "云专属折扣" },
  { value: "10年+", label: "云计算行业" },
  { value: "500家+", label: "企业客户" },
  { value: "7×24小时", label: "技术支持" },
];

export const capabilities = [
  {
    icon: "cloud",
    title: "云咨询与集成",
    desc: "从现状评估到目标架构设计，制定分阶段迁移路径并完成平滑割接上线。",
    tags: ["上云咨询", "异云搬迁"],
  },
  {
    icon: "shield",
    title: "等保咨询",
    desc: "覆盖等保测评辅导、安全基线加固与边缘防护，帮助业务稳定通过合规审计。",
    tags: ["等保合规", "安全审计", "WAF防护", "协助等保落地"],
  },
  {
    icon: "cpu",
    title: "软件开发咨询",
    desc: "构建数据平台与大模型应用链路，把企业知识沉淀为可用的智能业务能力。",
    tags: ["大模型", "数据平台", "AI应用"],
  },
  {
    icon: "activity",
    title: "云上运维服务",
    desc: "专业团队值守，提供全天候监控告警、故障响应与成本优化的托管运维。",
    tags: ["7×24技术支持及运维"],
  },
] as const;

export const advantages = [
  { icon: "tag", title: "专属折扣", desc: "代理商渠道价格，云产品长期享受专属优惠。" },
  { icon: "badge", title: "官方授权", desc: "阿里云官方授权合作伙伴，资质可查可信。" },
  { icon: "headset", title: "技术支持", desc: "认证架构师团队 7×24 小时在线响应处理。" },
  { icon: "blocks", title: "定制方案", desc: "按业务场景量身设计架构与选型，不做通用堆料。" },
];

export const news = [
  {
    cover: newsCover1,
    category: "客户案例",
    date: "2026-03-18",
    title: "跨境零售平台重构云架构，平稳承接大促洪峰",
    excerpt:
      "将单体电商系统迁移至容器服务，结合 PolarDB 与 OSS 分层存储，在全球大促期间稳定支撑 40 倍流量峰值，核心接口时延下降 62%。",
  },
  {
    cover: newsCover2,
    category: "行业动态",
    date: "2026-01-09",
    title: "传媒集团基于专属 GPU 上线 AI 内容生产线",
    excerpt:
      "搭建专属 GPU 资源池与大模型剧本链路，帮助客户从概念验证走到 120 集内容上线，制作成本降低 55%，交付周期压缩至 9 天。",
  },
];

export const contact = {
  title: "从一次免费的架构诊断开始",
  desc: "告诉我们您的业务与系统现状，我们将回复迁移路径、参考架构与交付排期。",
  address: "安徽省合肥市高新区创新大道2800号创新产业园二期J1楼A座1205-3室",
  phone: "150 5544 6954",
  email: "36054546@qq.com",
  qr: "https://ahcanyun.com/assets/img/qr.png",
  qrNote: "添加解决方案团队，即时解答迁移方案、配额与 GPU 资源问题。",
};
