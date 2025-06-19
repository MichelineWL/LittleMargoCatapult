export function MaterialsSection() {
  return (
    <div className="container mx-auto px-4 text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold inline-flex items-center gap-2">
          <span className="text-[#BC1E2C]">Thoughtfully</span> sourced,{" "}
          <span className="text-[#1C74BC]">Sustainably</span> made.
        </h2>
        <p className="text-gray-600">We carefully picked our materials history</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Recycled skateboard deck",
          "Repurposed water gallon cap",
          "Sustainably sourced wood",
          "Upcycled fabric",
        ].map((material) => (
          <div
            key={material}
            className="relative flex items-center gap-2 bg-gradient-to-r from-[#BC1E2C] to-[#a01824] text-white rounded-full py-2 px-4"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full"></div>
            <span className="text-sm">{material}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
