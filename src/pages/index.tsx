/**
 * App: Codex User Profile Next.js
 * Package: pages
 * File: index.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: default, getStaticProps
 * Description: Landing page rendered via static generation using the home service for content.
 */

import type { GetStaticProps } from 'next';

import { Layout } from '@/components/Layout';
import { HomePageView } from '@/components/HomePageView';
import { ThemeToggleContainer } from '@/containers/ThemeToggleContainer';
import type { HomeSummary } from '@/services/homeService';
import { getHomeSummary } from '@/services/homeService';

interface HomePageProps {
  readonly summary: HomeSummary;
}

export default function HomePage({ summary }: HomePageProps) {
  return (
    <Layout title="Next.js Scalable Starter">
      <div className="mb-6 flex justify-end">
        <ThemeToggleContainer />
      </div>
      <HomePageView summary={summary} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const summary = await getHomeSummary();
  return {
    props: {
      summary
    },
    revalidate: 900
  };
};
