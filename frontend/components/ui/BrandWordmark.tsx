interface BrandWordmarkProps {
  className?: string;
}

/** Display brand as RIDER (white) + MO (red) */
export default function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <span className={`uppercase ${className}`}>
      <span className="text-white">RIDER</span>
      <span className="text-tvs-red"> MO</span>
    </span>
  );
}
