export type SlugPageProps = {
  params: Record<string, string | string[]>;
  searchParams: URLSearchParams;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ["foo", "bar", "baz", "qux"].map((slug) => ({ slug }));
}

export default function SlugPage({ params: { slug } }: SlugPageProps) {
  return <div>{slug}</div>;
}
