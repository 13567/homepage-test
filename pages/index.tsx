import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Roadmap from 'views/HomePage/Roadmap';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          
          <BasicSection imageUrl="/homepage/products.jpeg" title="全产品矩阵协同构建" overTitle="产品特性展示">
            <ul>
              <li>程序语言、编译器、构建系统、IDE 整体协同设计保证了系统的完整性，减少组件摩擦，提升整体效率</li>
              <li>目标代码体积相比于市面主流语言降低一到两个数量级</li>
              <li>目标代码性能大幅提升</li>
              <li>目标代码健壮性提升</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/homepage/language.jpeg" title="程序语言" overTitle="产品特性展示" reversed>
            <ul>
              <li>专为WebAssembly和JavaScript而设计，提供Native等多后端支持</li>
              <li>抛开历史包袱，从工业角度出发，结合学术界近20年沉淀与当下市场需求，为下一代软件开发设计</li>
              <li>低学习成本，初学者也能快速上手</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/homepage/system.png" title="编译器、构建系统" overTitle="产品特性展示">
            <ul>
              <li>有别于传统的分离式编译，从架构设计上选择了全局优化方案</li>
              <li>支持增量化、并行化编译，轻松面对超大规模编程场景</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/homepage/ide.jpeg" title="IDE " overTitle="产品特性展示" reversed>
            <ul>
              <li>半结构化编辑器设计</li>
              <li>在云端提供本地开发体验</li>
              <li>AIGC 支持</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Roadmap />
          {/* <FeaturesGallery /> */}
          {/* <Features /> */}
          {/* <Testimonials /> */}
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
