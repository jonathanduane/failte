import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft, Newspaper, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { wordpressAPI, type WordPressPost } from "@/lib/wordpress-api";

export default function NewsPage() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['/api/posts'],
    queryFn: async () => {
      return await wordpressAPI.getPosts({ per_page: 10 });
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the FáilteDAB trial progress, technical updates, and community developments
            </p>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center max-w-2xl mx-auto">
            <Card className="p-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">News Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We're currently setting up our news feed to keep you informed about the DAB+ trial progress. 
                Check back soon for updates on technical developments, coverage expansion, broadcaster participation, 
                and listener feedback from across Ireland.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">What to expect:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical updates and coverage improvements</li>
                  <li>• New broadcaster announcements</li>
                  <li>• Community feedback highlights</li>
                  <li>• Trial milestones and achievements</li>
                  <li>• Future DAB+ developments in Ireland</li>
                </ul>
              </div>
            </Card>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      3 min read
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {stripHtml(post.title.rendered)}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  <a href={`https://failtedab.ie/${post.slug}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Read Full Article
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}

        {posts && posts.length === 0 && (
          <div className="text-center">
            <Card className="p-12 max-w-2xl mx-auto">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No News Articles Yet</h2>
              <p className="text-gray-600">
                We're preparing exciting updates about the DAB+ trial. Check back soon for the latest news!
              </p>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}