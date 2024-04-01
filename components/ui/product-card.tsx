"use client"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import PreviewModal from "@/components/preview-modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter();
    const previewModal = usePreviewModal()
    const cart = useCart();

    const handleClick = () => { 
        router.push(`/product/${data?.id}`)
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data)
        
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data)


    }

  return (
    <div
        onClick={handleClick} 
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="aspect-square bg-neutral-100 rounded-xl relative">
            <Image 
                src={data?.images?.[0]?.url}
                alt="image url"
                fill
                className="aspect-square object-cover rounded-md"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5 ">
                <div className="flex gap-x-6 justify-center">
                    <IconButton 
                        onClick={onPreview}
                        icon={<Expand size={20} className="text-gray-200"/>}
                    />
                    <IconButton 
                        onClick={onAddToCart}
                        icon={<ShoppingCart size={20} className="text-gray-200"/>}
                    />
                </div>
            </div>
        </div>
        {/* description */}
        <div>
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p>
                {data.category?.name}
            </p>
        </div>
         {/* currency */}
        <div className="flex items-center justify-between">
            <Currency
                value= {data?.price}
            />
        </div>
    </div>
  )
}

export default ProductCard