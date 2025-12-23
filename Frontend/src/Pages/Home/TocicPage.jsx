import TocicDataTable from "./TocicDataTable";

export default function TocicPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        TOCIC Centers Overview
      </h1>

      <TocicDataTable />
    </div>
  );
}
