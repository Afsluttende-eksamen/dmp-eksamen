'use client';

export default function NewsList({ posts }) {
  return (
    <div className="p-8">
      <h1 className="text-6xl mb-12">NYHEDER</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i}>
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                
                />
              )}
            <div className="mt-4">
              <div className="text-sm opacity-60">{post.category}</div>
              <h3 className="text-2xl mt-2">{post.title}</h3>
              <p className="text-xl"> {post.content}</p>
              <p className="text-xl"> {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
