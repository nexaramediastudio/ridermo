export default function AdminInquiriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Inquiries</h1>
      <p className="mt-1 text-gray-text">Customer messages from the contact form</p>

      <div className="mt-8 rounded-2xl border border-dashed border-white/[0.12] p-12 text-center">
        <p className="text-gray-text">
          Inquiries will appear here once the backend API and PostgreSQL database are connected.
        </p>
        <p className="mt-2 text-sm text-gray-text">
          Endpoint: <code className="text-tvs-red">GET /api/inquiries</code>
        </p>
      </div>
    </div>
  );
}
