import { blogPosts, type BlogPost } from "@/data/blog";

function unique(posts: BlogPost[], seen: Set<string>, currentSlug: string): BlogPost[] {
  const out: BlogPost[] = [];
  for (const post of posts) {
    if (!post || post.slug === currentSlug || seen.has(post.slug)) continue;
    seen.add(post.slug);
    out.push(post);
  }
  return out;
}

/**
 * Related reading for a post.
 * A ring through the catalog guarantees every article links to, and is linked from, other posts.
 * Tag and category overlap fills the in-article set with closer topics.
 */
export function linkedPosts(post: BlogPost): {
  article: BlogPost[];
  sidebar: BlogPost[];
  more: BlogPost[];
} {
  const n = blogPosts.length;
  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const ring: BlogPost[] = [];
  if (idx >= 0) {
    for (let step = 1; step < n && ring.length < 12; step++) {
      ring.push(blogPosts[(idx + step) % n]);
    }
  }

  const tags = new Set(post.tags.map((tag) => tag.toLowerCase()));
  const scored = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      let score = candidate.category === post.category ? 2 : 0;
      for (const tag of candidate.tags) {
        if (tags.has(tag.toLowerCase())) score += 3;
      }
      return { candidate, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.id - b.candidate.id)
    .map((row) => row.candidate);

  const seen = new Set<string>();
  const article = unique([...scored.slice(0, 3), ...ring.slice(0, 2)], seen, post.slug).slice(0, 4);
  const sidebar = unique(ring.slice(0, 8), seen, post.slug).slice(0, 3);
  const more = unique(ring, seen, post.slug).slice(0, 4);

  return { article, sidebar, more };
}
