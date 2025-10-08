import { Plus } from "lucide-react";

interface PromoCardProps {
  image: string;
  imageAlt: string;
  discount: string;
  offerTitle: string;
  offerSubtitle: string;
  onAddClick?: () => void;
}

const PromoCard: React.FC<PromoCardProps> = ({
  image,
  imageAlt,
  discount,
  offerTitle,
  offerSubtitle,
  onAddClick,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden border border-neutral-200 group">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-80 object-cover"
      />

      {/* Dark gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-lg border border-neutral-700">
        {discount}
      </div>

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-red-500 text-sm font-semibold mb-1 drop-shadow-lg">
          {offerTitle}
        </p>
        <h3 className="text-white text-2xl font-bold drop-shadow-2xl">
          {offerSubtitle}
        </h3>
      </div>

      {/* Add Button */}
      <button
        onClick={onAddClick}
        className="absolute bottom-4 right-4 bg-white hover:bg-primary text-neutral-900 hover:text-white p-2 rounded-full border border-neutral-200 hover:border-primary transition-all transform hover:scale-110"
        aria-label="Add offer"
      >
        <Plus size={20} className="stroke-current" strokeWidth={3} />
      </button>
    </div>
  );
};

export default PromoCard;
