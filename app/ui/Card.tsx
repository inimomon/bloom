
export default function Card() {
  return (
    <div
      className="bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
    >
      <div className="aspect-square bg-zinc-700 rounded-md mb-4"></div>
      <h3 className="font-medium">Album Name</h3>
      <p className="text-sm text-gray-400">Artist Name</p>
    </div>
  );
}
