export default function Loading() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-72 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  )
}