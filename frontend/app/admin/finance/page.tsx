import { bikesData, formatPrice } from "@/lib/data/bikes";

export default function AdminFinancePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Finance Options</h1>
      <p className="mt-1 text-gray-text">EMI plans per bike model</p>

      <div className="mt-8 grid gap-4">
        {bikesData.map((bike) => {
          const finance = bike.financeOptions?.[0];
          if (!finance) return null;
          return (
            <div
              key={bike.id}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-semibold text-white">{bike.name}</p>
                <p className="text-sm text-gray-text">{bike.category}</p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <p className="text-gray-text">Down</p>
                  <p className="font-medium text-white">{formatPrice(finance.downPayment)}</p>
                </div>
                <div>
                  <p className="text-gray-text">Monthly</p>
                  <p className="font-medium text-white">{formatPrice(finance.monthlyPayment)}</p>
                </div>
                <div>
                  <p className="text-gray-text">Tenure</p>
                  <p className="font-medium text-white">{finance.durationMonths} mo</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
