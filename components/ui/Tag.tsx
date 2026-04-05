type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-white/75 backdrop-blur-sm">
      {label}
    </span>
  );
}