const coverColors = [
  "from-sky-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-orange-400 to-rose-500",
  "from-purple-500 to-pink-500",
  "from-amber-400 to-orange-600",
  "from-cyan-500 to-blue-600",
];

export const coverColor = (id: number) => coverColors[id % coverColors.length];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const readTime = (text: string) =>
  Math.max(1, Math.round(text.split(/\s+/).length / 200));
