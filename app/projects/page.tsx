import { connectDB } from "@/lib/db"
import Project from "@/models/Project"
import ProjectCard from "@/components/ProjectCard"

type Props = {
  searchParams: Promise<{
    category?: string
    page?: string
  }>
}

const PAGE_SIZE = 6

export default async function ProjectsPage({ searchParams }: Props) {
  await connectDB()

  const params = await searchParams
  const category = params?.category
  const page = parseInt(params?.page || "1")

  const query = category ? { category } : {}

  const totalProjects = await Project.countDocuments(query)
  const totalPages = Math.ceil(totalProjects / PAGE_SIZE)

  const projects = await Project.find(query)
    .skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean()

  // 🔥 Get dynamic categories from DB
  const categories = await Project.distinct("category")

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold mb-12">Our Projects</h1>

        {/* 🔥 Dynamic Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <a
            href="/projects"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            All
          </a>

          {categories.map((cat: string) => (
            <a
              key={cat}
              href={`/projects?category=${cat}`}
              className="px-4 py-2 border rounded-lg capitalize"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project: any) => (
            <ProjectCard key={project._id.toString()} {...project} />
          ))}
        </div>

        {/* 🔥 Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <a
              key={i}
              href={`/projects?page=${i + 1}${category ? `&category=${category}` : ""}`}
              className={`px-4 py-2 border rounded-lg ${
                page === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}