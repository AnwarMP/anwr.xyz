import Link from "@/app/components/Link";
import { Blog } from ".contentlayer/generated";
import { formatDate } from "@/app/_utils/formatDate";

export default function PostCard({ post }: { post: Blog }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col space-y-3 rounded-lg border border-primary bg-secondary p-4 transition-all hover:bg-tertiary"
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="font-medium text-lg">{post.title}</h2>
        <time className="text-secondary shrink-0 ml-4">
          {formatDate(post.date)}
        </time>
      </div>
      
      <p className="text-secondary line-clamp-2">{post.summary}</p>
      
      {post.tags && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs rounded-full bg-primary px-3 py-1 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}