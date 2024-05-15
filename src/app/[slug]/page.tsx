export type SlugPageProps = {
  params: Record<string, string | string[]>;
  searchParams: URLSearchParams;
};

export default function SlugPage({ params: { slug } }: SlugPageProps) {
  return <div>{slug}</div>;
}
