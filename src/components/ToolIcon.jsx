// Maps a tool's icon name to a Lucide line icon. Named imports tree-shake, so
// only the icons we actually use end up in the bundle.
import {
  Flame,
  Shirt,
  CloudDrizzle,
  Mountain,
  Sunrise,
  Coffee,
  Wallet,
  CookingPot,
  CalendarDays,
  Car,
  Beer,
  Quote,
  BookOpen,
  Hop,
  ScrollText,
  Baby,
  MapPin,
  Castle,
  MessageSquare,
  HeartHandshake,
  Flag,
  Clover,
  Phone,
  Banknote,
  Sparkles,
  Plane,
} from 'lucide-react'

const ICONS = {
  Flame,
  Shirt,
  CloudDrizzle,
  Mountain,
  Sunrise,
  Coffee,
  Wallet,
  CookingPot,
  CalendarDays,
  Car,
  Beer,
  Quote,
  BookOpen,
  Hop,
  ScrollText,
  Baby,
  MapPin,
  Castle,
  MessageSquare,
  HeartHandshake,
  Flag,
  Clover,
  Phone,
  Banknote,
  Sparkles,
  Plane,
}

export default function ToolIcon({ name, size = 22, ...rest }) {
  const Cmp = ICONS[name] || Sparkles
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" {...rest} />
}
