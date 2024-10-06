import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GuidesPage() {
  const guides = [
    { id: 1, title: "Getting Started with React", description: "Learn the basics of React development" },
    { id: 2, title: "Advanced TypeScript Techniques", description: "Dive deep into TypeScript's advanced features" },
    { id: 3, title: "Next.js Best Practices", description: "Optimize your Next.js applications with these best practices" },
    { id: 4, title: "CSS-in-JS Strategies", description: "Explore different CSS-in-JS libraries and methodologies" },
    { id: 5, title: "State Management in React", description: "Compare different state management solutions for React" },
    { id: 6, title: "Building Accessible Web Apps", description: "Learn how to make your web applications more accessible" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Knowledge Guides</h1>
      
      <div className="flex space-x-2">
        <Input placeholder="Search guides..." className="flex-grow" />
        <Button>Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id}>
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link href={`/guides/${guide.id}`}>Read Guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}