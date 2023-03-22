import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Moonbit',
    items: [   

      { title: '版权信息', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Team',
    items: [
      { title: '关于我们', href: 'https://www.idea.edu.cn/research/dii.html' },
      { title: '招贤纳士', href: 'https://mp.weixin.qq.com/s?__biz=MzkxMzQyMDM1OA==&mid=2247484071&idx=1&sn=66d80ea06770fceaac09c9d82e1871b0&chksm=c17cbb8ef60b3298135c84d71418c415fc8fe7d93f9253fe8e509c7dc980e35b0b173cc0bc09&token=961602424&lang=zh_CN#rd' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Moonbitlang', href: '/something-else' },
      { title: 'IDE', href: '/and-something-else' },
    ],
  },
  {
    title: 'Something',
    items: [
      { title: '微信公众号', href: 'https://mp.weixin.qq.com/s?__biz=MzkxMzQyMDM1OA==&mid=2247483666&idx=1&sn=87407757cbd7585bafd2e8f931938788&chksm=c17cb83bf60b312d682edeaba1deb794a84afcf71b5e6746cd2658757f115cc6dc4de765dd6f&token=961602424&lang=zh_CN#rd' },
      { title: 'Bilibili', href: 'https://space.bilibili.com/1453436642' },
      { title: '知乎', href: 'https://www.zhihu.com/people/rescript' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2023 MoonBit&nbsp;&nbsp;粤ICP备2020119212号-9</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
