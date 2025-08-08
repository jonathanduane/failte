import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { wordpressAPI, type WordPressPost } from "@/lib/wordpress-api";

export default function NewsSection() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['/api/posts'],
    queryFn: async () => {
      try {
        return await wordpressAPI.getPosts({ per_page: 3 });
      } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
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

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in Ireland's DAB+ trial
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 icon-gradient-pink rounded-2xl mb-8 icon-pulse shadow-xl">
            <Newspaper className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Latest News</h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments in Ireland's DAB+ trial
          </p>
        </div>

        {error ? (
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">News Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're setting up our news feed to keep you informed about the DAB+ trial progress, technical updates, and community feedback.
              </p>
              <Link href="/news">
                <Button>
                  Visit News Page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              {posts?.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                  <div className="p-8">
                    <div className="flex items-center text-base text-gray-500 mb-4">
                      <Calendar className="w-5 h-5 mr-3" />
                      {formatDate(post.date)}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {stripHtml(post.title.rendered)}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <a href={`https://failtedab.ie/${post.slug}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="text-lg">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/news">
                <Button size="lg">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}