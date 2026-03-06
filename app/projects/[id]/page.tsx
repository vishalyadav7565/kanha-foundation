import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Project from "@/models/Project"
import { connectDB } from "@/lib/db"

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  await connectDB()

  const project = await Project.findOne({ id: params.id })

  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image]
    }
  }
}

export default async function ProjectDetails({ params }: Props) {

  await connectDB()

  const project = await Project.findOne({ id: params.id })

  if (!project) return notFound()

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          {project.title}
        </h1>

        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-xl mb-8 object-cover"
        />

        <p className="text-lg text-gray-700 leading-relaxed">
          {project.content}
        </p>

      </div>
    </section>
  )
}