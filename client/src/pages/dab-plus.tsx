import { useEffect, useState } from "react";
import { ArrowLeft, Radio, Wifi, Users, Zap, Info, Antenna, Settings, MapPin, Headphones, UserPlus } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { wordpressAPI, type WordPressPage } from "@/lib/wordpress-api";

export default function DABPlusPage() {
  const [pages, setPages] = useState<WordPressPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Map page titles to icons and colors
  const getPageIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('introducing') || lowerTitle.includes('failte')) return { icon: Info, color: 'bg-primary' };
    if (lowerTitle.includes('trial') || lowerTitle.includes('what is')) return { icon: Radio, color: 'bg-secondary' };
    if (lowerTitle.includes('power') || lowerTitle.includes('behind')) return { icon: Antenna, color: 'bg-accent' };
    if (lowerTitle.includes('coverage')) return { icon: MapPin, color: 'bg-green-600' };
    if (lowerTitle.includes('services')) return { icon: Headphones, color: 'bg-purple-600' };
    if (lowerTitle.includes('participate') || lowerTitle.includes('how to')) return { icon: UserPlus, color: 'bg-pink-600' };
    return { icon: Radio, color: 'bg-gray-600' };
  };

  useEffect(() => {
    // Set the content directly with your actual content
    const realPages: WordPressPage[] = [
      {
        id: 1,
        title: { rendered: "Introducing FáilteDAB" },
        content: { rendered: "FáilteDAB is part of the next step in the evolution of radio in Ireland. FáilteDAB is a temporary trial service, aiming to bring bigger and better choice and quality to Irish radio. FáilteDAB is the next digital step for Irish radio, adding reach for broadcasters and choice for listeners to that already provided by FM broadcasting. It provides a much greater number and better selection of radio stations available to the listener, and at higher quality. It's delivered free to listeners by means of transmitted signals in a similar way to the analogue FM service." },
        slug: "introducing-failtedab"
      },
      {
        id: 2,
        title: { rendered: "What is the DAB+ Trial" },
        content: { rendered: "The DAB+ trial is a temporary service, licensed by the communications regulator COMREG. The licence will operate for 365 days from late spring 2025. It is intended that user feedback along with in depth surveying, will give useful user experience and technical information to aid in the process of future licensing of DAB+ in Ireland. FáilteDAB invites licensed broadcasters to participate and be part of the multiplex services and encourages listeners to provide feedback of their experiences and views of this trial." },
        slug: "what-is-dab-trial"
      },
      {
        id: 3,
        title: { rendered: "The Power Behind FáilteDAB" },
        content: { rendered: "FáilteDAB is the public facing name of the operation of a DAB+ trial radio system in Ireland, licensed by COMREG to the radio engineering company Foothold Communications Limited. Foothold Communications is the foremost provider of telecom and independent radio broadcasting systems in Ireland. It owns and operates premium and strategically located transmission towers around Ireland and currently has over 1000 radio link and broadcast systems under management. Foothold has a highly skilled in-house team with expertise in the transmission planning, licensing and rf technology fields." },
        slug: "power-behind-failtedab"
      },
      {
        id: 4,
        title: { rendered: "Coverage Network" },
        content: { rendered: "The trial will consist initially of a network of six transmission sites with high power assignments. The coverage of this network will focus on overlapping and synchronous coverage within the Leinster area with a potential to extend this coverage to other parts of Ireland within the trial period. Foothold is perfectly positioned to conduct the FáilteDAB DAB+ trial and push forward the technological advancement of radio in Ireland." },
        slug: "coverage"
      },
      {
        id: 5,
        title: { rendered: "What Services will be on FáilteDAB" },
        content: { rendered: "FáilteDAB encourages and welcomes all Irish Coimisiún na Meán licensed radio operators to participate in this trial to maximise the diversity of choice and number of services delivered to the listener. This, in turn, it is hoped, will encourage a greater listenership and in turn provide a useful feedback result from the trial. The big advantages? Choice, quality and greater radio listening!" },
        slug: "services-on-failtedab"
      },
      {
        id: 6,
        title: { rendered: "How to Participate" },
        content: { rendered: "FáilteDAB invites licensed broadcasters to participate and be part of the multiplex services and encourages listeners to provide feedback of their experiences and views of this trial. Many DAB+ enabled radios present the DAB+ services to the listener/user alongside the FM stations with no need to do setting changes or searches. Greater choice, quality and enhanced radio listening for everyone!" },
        slug: "how-to-participate"
      }
    ];
    
    setPages(realPages);
    setLoading(false);
  }, []);

  const highlights = [
    {
      icon: Radio,
      title: "Digital Radio Evolution",
      description: "Experience the next generation of radio broadcasting with crystal-clear digital audio quality.",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: Wifi,
      title: "Enhanced Coverage",
      description: "Improved signal strength and coverage across Ireland with high-power transmission sites.",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Greater Choice",
      description: "Access a wider variety of radio stations and programming content than ever before.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Future Technology",
      description: "Be part of Ireland's transition to modern digital broadcasting technology.",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/">
              <Button variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-accent">DAB+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Discover the future of digital radio in Ireland with FáilteDAB's comprehensive trial service
            </p>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className={`text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 ${highlight.color}`}>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">{highlight.title}</h3>
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WordPress Content Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600">Explore comprehensive information about the FáilteDAB trial</p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse h-80">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.map((page) => {
                const { icon: IconComponent, color } = getPageIcon(page.title.rendered);
                const isExpanded = expandedCard === page.id;
                const content = page.content.rendered.replace(/<[^>]*>/g, '');
                const excerpt = content.substring(0, 200) + '...';
                
                return (
                  <Card key={page.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                        {page.title.rendered}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {isExpanded ? content : excerpt}
                      </p>
                      <button 
                        onClick={() => setExpandedCard(isExpanded ? null : page.id)}
                        className="flex items-center text-primary font-semibold text-base group-hover:gap-3 transition-all hover:underline"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Read Full Article'}</span>
                        <ArrowLeft className={`h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform ${isExpanded ? 'rotate-90' : 'rotate-180'}`} />
                      </button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {!loading && pages.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Coming Soon</h3>
              <p className="text-gray-600">We're preparing detailed information about DAB+. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}