import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import {
  Advantages,
  Capabilities,
  Contact,
  Faq,
  Footer,
  Hero,
  MobileCallBar,
  News,
  Process,
  Stats,
} from "@/components/site/Sections";

const title = "灿云卓牛云 | 阿里云官方授权合作伙伴 · 企业上云一站式服务";
const description =
  "安徽灿云信息技术有限公司：阿里云官方授权合作伙伴，提供上云咨询迁移、等保安全合规、AI 算力 GPU、云上运维托管，云产品低至3折，7×24 技术支持。";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <Process />
        <Advantages />
        <News />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
      <Toaster position="top-center" />
    </div>
  );
}
