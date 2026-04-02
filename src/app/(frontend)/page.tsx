import { getPublishedArticles } from '@/collections/Articles/fetchers'
import { ArticleCard } from './_components/article-card'
import { relationIsObject } from '@/lib/payload/helpers/relation-is-object'
import Link from 'next/link'

export default async function BlogIndexPage() {
  const articles = await getPublishedArticles()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end">
        <Link
          href="/admin/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Admin Login
        </Link>
      </div>

      {!articles.length ? (
        <p>No articles found</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-full">
          {articles.map(
            ({
              id,
              title,
              slug,
              contentSummary,
              coverImage,
              readTimeInMins,
              publishedAt,
              author,
            }) => {
              if (!relationIsObject(coverImage)) return null
              if (!relationIsObject(author) || !relationIsObject(author.avatar)) return null

              return (
                <ArticleCard
                  key={id}
                  title={title}
                  href={`/${slug}`}
                  summary={contentSummary}
                  readTimeMins={readTimeInMins ?? 0}
                  publishedAt={new Date(publishedAt ?? new Date())}
                  coverImage={coverImage}
                  author={{
                    avatar: author.avatar,
                    name: author.name,
                    role: author.role,
                  }}
                />
              )
            },
          )}
        </div>
      )}
    </div>
  )
}
