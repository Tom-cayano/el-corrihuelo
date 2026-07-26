import { notFound } from "next/navigation";
import { Metadata } from "next";
import { INSTALLATIONS_DATA } from "@/lib/installations";
import InstallationPageClient from "./InstallationClient";

/* ── Static params for build ── */
export function generateStaticParams() {
  return INSTALLATIONS_DATA.map((item) => ({ slug: item.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = INSTALLATIONS_DATA.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | El Corrihuelo`,
    description: item.fullDescription.slice(0, 155),
    openGraph: {
      title: `${item.title} | El Corrihuelo`,
      description: item.fullDescription.slice(0, 155),
      images: [{ url: item.heroImage }],
    },
  };
}

export default async function InstallationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = INSTALLATIONS_DATA.find((i) => i.slug === slug);
  if (!item) notFound();

  return <InstallationPageClient item={item} />;
}
