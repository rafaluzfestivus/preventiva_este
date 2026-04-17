import { Star } from "lucide-react";

export function TrustBar() {
    return (
        <section className="bg-white border-b border-gray-100 py-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-700">
                        <Star className="fill-yellow-400 text-yellow-400" /> TrustPilot
                    </div>
                    <div className="font-bold text-xl text-gray-700 flex flex-col items-center leading-none">
                        Google <span className="text-xs font-normal">Reviews 4.9/5</span>
                    </div>
                    <div className="font-bold text-xl text-gray-700">
                        CE Certificado
                    </div>
                    <div className="font-bold text-xl text-gray-700">
                        Garantía<span className="text-yellow-500">Total</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
