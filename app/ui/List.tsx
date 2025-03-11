export default function List() {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer">
            <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-zinc-700 rounded"></div>
            <div>
                <h3 className="font-medium">Song Name</h3>
                <p className="text-sm text-gray-400">Artist Name</p>
            </div>
            </div>
            <div className="text-gray-400">3:45</div>
        </div>
    );
}