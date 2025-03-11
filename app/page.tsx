// Components
import Sidebar from "./ui/Sidebar";
import Card from "./ui/Card";
import List from "./ui/List";
import PlayerBar from "./ui/PlayerBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-64 p-8 w-full">
          {/* Recently Played */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Played</h2>
            <div className="grid grid-cols-6 gap-4">
              {[1,2,3,4,5,6].map((item) => (
                <Card key={item} />
              ))}
            </div>
          </section>

          {/* Popular Albums */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular Albums</h2>
            <div className="grid grid-cols-6 gap-4">
              {[1,2,3,4,5,6].map((item) => (
                <Card key={item} />
              ))}
            </div>
          </section>

          {/* Songs List */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Top Songs</h2>
            <div className="space-y-2">
              {[1,2,3,4,5].map((item) => (
                <List key={item} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Player Bar */}
      <PlayerBar />

    </main>
  );
}
