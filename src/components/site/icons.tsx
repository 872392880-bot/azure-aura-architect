import {
  Activity,
  BadgeCheck,
  Blocks,
  CloudCog,
  Cpu,
  Headset,
  ShieldCheck,
  Tag,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  cloud: CloudCog,
  shield: ShieldCheck,
  cpu: Cpu,
  activity: Activity,
  tag: Tag,
  badge: BadgeCheck,
  headset: Headset,
  blocks: Blocks,
};
