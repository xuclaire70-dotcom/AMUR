export default function TracePage({ params }: { params: { id: string } }) {
  const nodeId = params.id;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center p-10">
      <div className="text-sm opacity-50 mb-4">
        AMUR · Memory Trace Node
      </div>

      <h1 className="text-3xl font-light tracking-widest">
        {nodeId}
      </h1>

      <p className="mt-6 text-center max-w-md opacity-70 leading-relaxed">
        The space does not remember everyone, but it remembers your stay.
      </p>

      <div className="mt-10 text-xs opacity-40">
        TRACE ACTIVE
      </div>
    </div>
  );
}