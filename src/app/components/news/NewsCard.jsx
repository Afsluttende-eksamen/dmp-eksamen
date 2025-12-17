import Image from "next/image";

export default function NewsCard({ post }) {

  return (
    <div className="relative aspect-square">
      <div className="relative w-full h-full overflow-hidden rounded-3xl ">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
      </div>

      <div className="absolute bottom-8 left-8 right-8 text-white">
        <label className="opacity-80 uppercase mb-2">{post.category}</label >
        <h4 className="mb-3 hover:underline">{post.title}</h4>
        <p className="opacity-80">{post.content}</p>
      </div>
    </div>
  );
}
