import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Radio, Music, Mic, Heart, Volume2, Clock, MapPin, Users, Signal, Star, ExternalLink } from "lucide-react";
import dabLogo from "@assets/DAB_logo.svg_-e1750186890569_1754655587312.png";

interface Station {
  id: number;
  name: string;
  frequency?: string;
  logo: string;
  logoColor: string;
  category: 'music' | 'talk' | 'news' | 'local';
  isLive: boolean;
  description: string;
  longDescription: string;
  established: string;
  website: string;
  location: string;
  targetAudience: string;
  dailyListeners: string;
  popularShows: string[];
  features: string[];
}

const dabStations: Station[] = [
  // NOVA CLASSIC ROCK
  {
    id: 1,
    name: "NOVA",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Ireland's Rock Music Station",
    longDescription: "NOVA is Ireland's dedicated rock music station, broadcasting the best classic and contemporary rock music 24/7. From classic rock anthems to modern rock hits, NOVA delivers the soundtrack for rock music lovers across Ireland.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Rock Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Rock Morning", "Drive Time Rock", "Classic Rock Hour"],
    features: ["Classic Rock", "Modern Rock", "Irish Rock Artists", "Rock News"]
  },
  // RADIO COIS
  {
    id: 2,
    name: "RADIO COIS",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-slate-700",
    category: 'local',
    isLive: true,
    description: "Local Community Radio",
    longDescription: "Radio Cois serves local communities with a mix of music, talk, and community-focused programming. Broadcasting local news, events, and connecting communities across Ireland.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Local Community",
    dailyListeners: "Community-based",
    popularShows: ["Community Morning", "Local Talk", "Music Mix"],
    features: ["Local News", "Community Events", "Local Music", "Talk Shows"]
  },
  // FREEDOM FM
  {
    id: 3,
    name: "FREEDOM FM",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-red-600",
    category: 'music',
    isLive: true,
    description: "Freedom in Music",
    longDescription: "Freedom FM offers diverse music programming with the freedom to play what listeners want to hear. A mix of genres and eras, giving listeners musical freedom.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Music Lovers",
    dailyListeners: "Growing",
    popularShows: ["Freedom Morning", "Mix Drive", "Evening Freedom"],
    features: ["Diverse Music", "Listener Requests", "Music Discovery", "Free Format"]
  },
  // LOUTH HIT HITS
  {
    id: 4,
    name: "LOUTH HIT HITS",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'local',
    isLive: true,
    description: "Local Hits for Louth",
    longDescription: "Louth Hit Hits serves County Louth with the biggest hits and local programming. Combining chart music with local news and community content.",
    established: "2024",
    website: "#",
    location: "County Louth",
    targetAudience: "Louth Residents",
    dailyListeners: "Local Community",
    popularShows: ["Louth Morning", "Hit Drive", "Local Evening"],
    features: ["Chart Hits", "Local News", "Community Focus", "Louth Events"]
  },
  // TODAY FM
  {
    id: 5,
    name: "TODAY FM",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Today's Best Music",
    longDescription: "Today FM brings you today's best music with contemporary hits, entertainment, and personality-driven programming for modern Ireland.",
    established: "1997",
    website: "https://www.todayfm.com",
    location: "Ireland",
    targetAudience: "Adults 25-44",
    dailyListeners: "320,000+",
    popularShows: ["Morning Show", "Drive Time", "Evening Mix"],
    features: ["Current Hits", "Entertainment", "Talk Shows", "Music Discovery"]
  },
  // 95.8
  {
    id: 6,
    name: "95.8",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Contemporary Music Station",
    longDescription: "95.8 delivers contemporary music with a focus on current hits and popular tracks. Broadcasting on DAB+ for crystal clear audio quality.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Morning Mix", "Drive Time", "Evening Hits"],
    features: ["Current Hits", "Popular Music", "DAB+ Quality", "Music Mix"]
  },
  // Q102
  {
    id: 7,
    name: "Q102",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Dublin's Music Station",
    longDescription: "Q102 serves Dublin with the best music mix, combining current hits with classic favorites for Dublin listeners.",
    established: "2024",
    website: "#",
    location: "Dublin",
    targetAudience: "Dublin Residents",
    dailyListeners: "Local Community",
    popularShows: ["Dublin Morning", "Music Drive", "Dublin Evening"],
    features: ["Dublin Focus", "Music Mix", "Local Content", "City Updates"]
  },
  // CLASSIC HITS 80S
  {
    id: 8,
    name: "CLASSIC HITS 80S",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Classic Hits from the 80s",
    longDescription: "Classic Hits 80s plays the greatest hits from the 1980s, bringing you the iconic songs that defined the decade.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Classic Music Fans",
    dailyListeners: "Growing",
    popularShows: ["80s Morning", "Decade Hour", "Retro Drive"],
    features: ["80s Hits", "New Wave", "Synthpop", "80s Rock"]
  },
  // ONIC IRELAND
  {
    id: 9,
    name: "ONIC IRELAND",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Contemporary Irish Music",
    longDescription: "OKC Ireland focuses on contemporary Irish music and culture, showcasing the best of modern Irish artists and music.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Irish Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Irish Morning", "Celtic Drive", "Modern Ireland"],
    features: ["Irish Artists", "Contemporary Music", "Cultural Programming", "Music Discovery"]
  },
  // RADIO COIS (alternative)
  {
    id: 10,
    name: "ONIC ALTERNATIVE",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Alternative Music Station",
    longDescription: "ONIC Alternative brings you the best in alternative music, indie rock, and underground sounds from Ireland and beyond.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Alternative Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Alt Morning", "Indie Drive", "Underground Hour"],
    features: ["Alternative Rock", "Indie Music", "Underground Artists", "Music Discovery"]
  },
  // ONIC ROCK
  {
    id: 11,
    name: "ONIC ROCK",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Rock Music Station",
    longDescription: "ONIC Rock delivers the best rock music from classic rock to modern rock, serving rock fans across Ireland.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Rock Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Rock Morning", "Classic Rock Hour", "Modern Rock Drive"],
    features: ["Classic Rock", "Modern Rock", "Rock History", "Rock News"]
  },
  // RADIO MARIA IRELAND
  {
    id: 12,
    name: "RADIO MARIA IRELAND",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'talk',
    isLive: true,
    description: "Catholic Radio",
    longDescription: "Radio Maria Ireland provides Catholic programming, spiritual content, and religious music for the Catholic community in Ireland.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Catholic Community",
    dailyListeners: "Community-based",
    popularShows: ["Morning Prayer", "Catholic Hour", "Spiritual Talk"],
    features: ["Catholic Programming", "Spiritual Content", "Religious Music", "Prayer Services"]
  },
  // ONIC COUNTRY
  {
    id: 13,
    name: "ONIC COUNTRY",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Country Music Station",
    longDescription: "ONIC Country brings you the best in country music from classic country to modern country hits.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Country Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Country Morning", "Classic Country", "New Country Drive"],
    features: ["Classic Country", "Modern Country", "Country News", "Artist Features"]
  },
  // SPIN 1038
  {
    id: 14,
    name: "SPIN 1038",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Alternative and Indie Music",
    longDescription: "SPIN 1038 focuses on alternative, indie, and emerging artists, bringing you the freshest sounds in alternative music.",
    established: "2002",
    website: "https://www.spin1038.com",
    location: "Dublin",
    targetAudience: "Alternative Music Fans",
    dailyListeners: "65,000+",
    popularShows: ["Spin Breakfast", "Alternative Drive", "Indie Hour"],
    features: ["Alternative Music", "Indie Artists", "Emerging Artists", "Music Discovery"]
  },
  // NEWSTALK
  {
    id: 15,
    name: "NEWSTALK",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'talk',
    isLive: true,
    description: "Talk Radio and News",
    longDescription: "Newstalk provides comprehensive talk radio with news, current affairs, and discussion programming.",
    established: "2002",
    website: "https://www.newstalk.com",
    location: "Ireland",
    targetAudience: "Adults 35-54",
    dailyListeners: "200,000+",
    popularShows: ["Pat Kenny Show", "Lunchtime Live", "Hard Shoulder"],
    features: ["News Analysis", "Current Affairs", "Talk Shows", "Discussion"]
  },
  // ONIC HITS
  {
    id: 16,
    name: "ONIC HITS",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Contemporary Hit Music",
    longDescription: "ONIC Hits plays the latest chart hits and popular music from around the world.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Hit Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Hit Morning", "Chart Drive", "Top 40"],
    features: ["Current Hits", "Chart Music", "Popular Songs", "Music Charts"]
  },
  // EIREWAVE RADIO (100.3 FM)
  {
    id: 17,
    name: "EIREWAVE RADIO",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-white",
    category: 'music',
    isLive: true,
    description: "Contemporary Irish Radio",
    longDescription: "Eirewave Radio combines contemporary music with Irish culture and programming.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "General Audience",
    dailyListeners: "Growing",
    popularShows: ["Irish Wave Morning", "Contemporary Drive", "Culture Hour"],
    features: ["Contemporary Music", "Irish Culture", "Music Mix", "Cultural Programming"]
  },
  // SPIRIT RADIO
  {
    id: 18,
    name: "SPIRIT RADIO",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'talk',
    isLive: true,
    description: "Christian Radio",
    longDescription: "Spirit Radio provides Christian programming, inspirational content, and contemporary Christian music.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Christian Community",
    dailyListeners: "Community-based",
    popularShows: ["Spirit Morning", "Christian Hour", "Inspirational Talk"],
    features: ["Christian Programming", "Inspirational Content", "Christian Music", "Faith-based Talk"]
  },
  // ONIC MOVIES
  {
    id: 19,
    name: "ONIC MOVIES",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'talk',
    isLive: true,
    description: "Movie and Entertainment",
    longDescription: "ONIC Movies focuses on film, television, and entertainment content with movie soundtracks and reviews.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Movie Fans",
    dailyListeners: "Growing",
    popularShows: ["Movie Morning", "Soundtrack Hour", "Film Reviews"],
    features: ["Movie Soundtracks", "Film Reviews", "Entertainment News", "TV Content"]
  },
  // ONIC FM
  {
    id: 20,
    name: "ONIC FM",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "General Music Station",
    longDescription: "ONIC FM provides a general music mix with various genres and popular programming.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "General Audience",
    dailyListeners: "Growing",
    popularShows: ["ONIC Morning", "Music Mix Drive", "Evening Playlist"],
    features: ["Music Mix", "Various Genres", "Popular Programming", "General Entertainment"]
  },
  // VIBE 105.2
  {
    id: 21,
    name: "VIBE 105.2",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Urban and Contemporary Music",
    longDescription: "Vibe 105.2 focuses on urban music, R&B, hip-hop, and contemporary sounds.",
    established: "2024",
    website: "#",
    location: "Ireland",
    targetAudience: "Urban Music Fans",
    dailyListeners: "Growing",
    popularShows: ["Vibe Morning", "Urban Drive", "R&B Hour"],
    features: ["Urban Music", "R&B", "Hip-Hop", "Contemporary Sounds"]
  },
  // ONIC DUB
  {
    id: 22,
    name: "ONIC DUB",
    frequency: "DAB+",
    logo: dabLogo,
    logoColor: "bg-teal-600",
    category: 'music',
    isLive: true,
    description: "Dublin-focused Music",
    longDescription: "ONIC Dub provides Dublin-focused programming with local music and city-specific content.",
    established: "2024",
    website: "#",
    location: "Dublin",
    targetAudience: "Dublin Residents",
    dailyListeners: "Local Community",
    popularShows: ["Dublin Morning", "City Sounds", "Local Drive"],
    features: ["Dublin Focus", "Local Music", "City News", "Local Events"]
  }
];

export default function DABStations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredStations = dabStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         station.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || station.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'music': return <Music className="w-4 h-4" />;
      case 'talk': return <Mic className="w-4 h-4" />;
      case 'news': return <Radio className="w-4 h-4" />;
      case 'local': return <Heart className="w-4 h-4" />;
      default: return <Radio className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'music': return 'bg-green-500';
      case 'talk': return 'bg-blue-500';
      case 'news': return 'bg-red-500';
      case 'local': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DAB+ Stations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the radio stations that will be available on Ireland's DAB+ digital radio platform
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search stations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Stations
            </Button>
            <Button
              variant={selectedCategory === "music" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("music")}
            >
              <Music className="w-4 h-4 mr-2" />
              Music
            </Button>
            <Button
              variant={selectedCategory === "talk" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("talk")}
            >
              <Mic className="w-4 h-4 mr-2" />
              Talk
            </Button>
            <Button
              variant={selectedCategory === "local" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("local")}
            >
              <Heart className="w-4 h-4 mr-2" />
              Local
            </Button>
          </div>
        </div>

        {/* Station Count */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-primary">{filteredStations.length}</span> stations found
          </p>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStations.map((station) => (
            <Dialog key={station.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="p-6">
                    {/* Station Logo */}
                    <div className="mb-4">
                      <div className={`w-full h-24 rounded-lg flex items-center justify-center ${station.logoColor} relative overflow-hidden`}>
                        {typeof station.logo === 'string' && station.logo.startsWith('/') ? (
                          <img 
                            src={station.logo} 
                            alt={`${station.name} logo`}
                            className="h-16 w-auto object-contain"
                          />
                        ) : (
                          <img 
                            src={station.logo} 
                            alt="DAB+ logo"
                            className="h-16 w-auto object-contain"
                          />
                        )}
                        {station.isLive && (
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                              LIVE
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Station Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-lg line-clamp-1">
                        {station.name}
                      </h3>
                      
                      {station.frequency && (
                        <p className="text-sm text-gray-500 font-mono">
                          {station.frequency}
                        </p>
                      )}
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {station.description}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-1 rounded-full ${getCategoryColor(station.category)}`}>
                            {getCategoryIcon(station.category)}
                          </div>
                          <span className="text-xs text-gray-500 capitalize">
                            {station.category}
                          </span>
                        </div>
                        
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Volume2 className="w-4 h-4 mr-1" />
                          Listen
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg ${station.logoColor} flex items-center justify-center`}>
                      <div className="text-white font-bold text-center text-xs">
                        {station.name === "RTÉ Radio 1" && (
                          <div className="text-center">
                            <div className="text-sm">RTÉ</div>
                            <div className="text-xs">Radio 1</div>
                          </div>
                        )}
                        {station.name === "RTÉ 2FM" && (
                          <div className="text-center">
                            <div className="text-sm">RTÉ</div>
                            <div className="text-lg font-bold">2FM</div>
                          </div>
                        )}
                        {station.name === "RTÉ Lyric FM" && (
                          <div className="text-center">
                            <div className="text-sm">RTÉ</div>
                            <div className="text-xs">lyric fm</div>
                          </div>
                        )}
                        {station.name === "Today FM" && (
                          <div className="text-center text-black">
                            <div className="text-sm">Today</div>
                            <div className="text-sm">FM</div>
                          </div>
                        )}
                        {station.name === "Newstalk" && (
                          <div className="text-center">
                            <div className="text-sm">Newstalk</div>
                            <div className="text-xs text-green-400">106-108</div>
                          </div>
                        )}
                        {station.name === "98FM" && (
                          <div className="text-lg font-bold">98FM</div>
                        )}
                        {station.name === "FM104" && (
                          <div className="text-sm font-bold">FM104</div>
                        )}
                        {station.name === "SPIN 1038" && (
                          <div className="text-center">
                            <div className="text-sm">SPIN</div>
                            <div className="text-xs">1038</div>
                          </div>
                        )}
                        {station.name === "Classic Hits" && (
                          <div className="text-center">
                            <div className="text-xs">Classic</div>
                            <div className="text-sm">Hits</div>
                          </div>
                        )}
                        {station.name === "iRadio" && (
                          <div className="text-sm font-bold">iRadio</div>
                        )}
                        {station.name === "Beat 102-103" && (
                          <div className="text-center">
                            <div className="text-sm">Beat</div>
                            <div className="text-xs">102-103</div>
                          </div>
                        )}
                        {station.name === "Red FM" && (
                          <div className="text-center">
                            <div className="text-sm">Red</div>
                            <div className="text-sm">FM</div>
                          </div>
                        )}
                        {station.name === "WLR FM" && (
                          <div className="text-sm font-bold">WLR</div>
                        )}
                        {station.name === "Galway Bay FM" && (
                          <div className="text-center">
                            <div className="text-xs">Galway Bay</div>
                            <div className="text-sm">FM</div>
                          </div>
                        )}
                        {station.name === "Live 95" && (
                          <div className="text-center">
                            <div className="text-sm">Live</div>
                            <div className="text-sm">95</div>
                          </div>
                        )}
                        {station.name === "Ocean FM" && (
                          <div className="text-center">
                            <div className="text-sm">Ocean</div>
                            <div className="text-sm">FM</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{station.name}</h2>
                      <p className="text-sm text-gray-500 font-mono">{station.frequency}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Status and Category */}
                  <div className="flex items-center gap-4">
                    {station.isLive && (
                      <Badge className="bg-green-500 text-white">
                        <Signal className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    )}
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getCategoryIcon(station.category)}
                      {station.category}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-600 leading-relaxed">{station.longDescription}</p>
                  </div>

                  {/* Station Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Est. {station.established}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{station.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{station.targetAudience}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{station.dailyListeners} daily listeners</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                        <a href={station.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Popular Shows */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Popular Shows</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {station.popularShows.map((show, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm text-gray-600">{show}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {station.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Listen Live
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={station.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* No Results */}
        {filteredStations.length === 0 && (
          <div className="text-center py-12">
            <Radio className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No stations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience DAB+ Quality</h3>
            <p className="text-gray-600 mb-6">
              These stations and more will be available with crystal-clear digital audio quality when FáilteDAB launches.
            </p>
            <Button size="lg" className="mr-4">
              Get DAB+ Radio
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}