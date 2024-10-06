import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to KnowledgeHub</h1>
        <p className="text-xl mb-6">Your centralized platform for creating and sharing knowledge</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/guides">Browse Guides</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/create">Create Guide</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Search Knowledge Base</h2>
        <div className="flex space-x-2">
          <Input placeholder="Search guides..." className="flex-grow" />
          <Button>Search</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Guide Title {i}</CardTitle>
                <CardDescription>Brief description of the guide</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Preview of the guide content...</p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href={`/guides/${i}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}