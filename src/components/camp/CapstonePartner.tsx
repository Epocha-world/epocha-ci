import type { CampCapstone } from "@/lib/camp-capstones";
import qualitax from "@/assets/logos/qualitax.svg";
import seagull from "@/assets/the-seagull-films-logo.png";
import candon from "@/assets/logos/candon-youth.jpg";
const logos = { qualitax, seagull, candon };
export function CapstonePartner({ item }: { item: CampCapstone }) {
  return (
    <div className="mt-4 flex items-center gap-3">
      {item.logo && (
        <img
          src={logos[item.logo]}
          alt=""
          className="h-10 w-16 rounded bg-white p-1 object-contain"
        />
      )}
      <p className="font-semibold">{item.partner}</p>
    </div>
  );
}
