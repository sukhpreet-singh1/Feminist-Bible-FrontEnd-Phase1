import React from 'react';

import { CommunityArticle } from '../Feed/articleComponent';

import styles from './article.module.scss';

const Article = () => {
  return (
    <div className={styles.container}>
      <div style={{ height: '50px', marginBottom: '1.5rem' }}>
        <button id={styles.search} type="button">
          <img src="/icons/search2.png" alt="" />
          <span>
            <input
              style={{ border: 'none' }}
              type="text"
              placeholder="SEARCH"
            />
          </span>
        </button>
      </div>
      <div className={styles.article}>
        <div className={styles.leftCard}>
          <div>
            <p>WRITTEN BY</p>
            <p style={{ margin: '0.5rem auto' }}>
              <strong>Triffany Grant</strong>
            </p>
            <p style={{ margin: '1rem auto' }}>
              A writer living in a New York City. <br />
              She/Her
            </p>
            <button className={styles.followBtn} type="button">
              FOLLOW
            </button>
            <hr style={{ margin: '2rem auto' }} />
            <ul>
              <li>
                <button type="button">
                  <img src="/icons/likeIcon.png" alt="" />
                  <span>2k</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <img src="/icons/commentIcon.png" alt="" />
                  <span>178</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <img src="/icons/bookmark-icon.png" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.mainCard}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem'
            }}>
            <h3>#1 on Featured</h3>
            <ul>
              <li>
                <button type="button">
                  <img src="/icons/share-icon.png" alt="" />
                </button>
              </li>
              <li>
                <button type="button">
                  <img src="/icons/bookmark-icon.png" alt="" />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h1 style={{ marginTop: '10rem', fontSize: '48px' }}>
              Exploring the depths on the internet.
            </h1>
            <p style={{ margin: '2rem auto', fontSize: '21px' }}>
              Lorem ipsum sig mundus creatus est.
            </p>
            <div style={{ display: 'flex', fontSize: '21px' }}>
              <img
                height="57px"
                width="57px"
                src="/icons/profile-icon.png"
                alt=""
                style={{ marginTop: '5px' }}
              />
              <ol>
                <li>Triffany Grant</li>
                <li>Aug 2, 2020</li>
              </ol>
            </div>
            <img
              style={{ width: '761px', height: '579px', marginTop: '4rem' }}
              src="/images/desktop-feature-img-1.png"
              alt=""
            />
            <p
              style={{
                fontSize: '21px',
                textAlign: 'center',
                paddingRight: '8rem'
              }}>
              Lorem ipsum sig mundus creatus est.
            </p>
            <div>
              <p style={{ fontSize: '21px', padding: '4rem 8rem 6rem 3rem' }}>
                <span style={{ lineHeight: '30px', fontSize: '82px' }}>I</span>
                Iived through the end of a civil war — I moved back to Sri Lanka
                in my twenties, just as the ceasefire fell apart. Do you know
                what it was like for me? Quite normal. I went to work, I went
                out, I dated. This is what Americans don’t understand. They’re
                waiting to get personally punched in the face while ash falls
                from the sky. That’s not how it happens. This is how it happens.
                Precisely what you’re feeling now. The numbing litany of bad
                news. The ever rising outrages.
                <p
                  style={{
                    margin: '3rem auto',
                    color: 'grey',
                    fontSize: '36px'
                  }}>
                  People suffering, dying, and protesting all around you, while
                  you think about dinner.
                </p>
                I was looking through some old photos for this article and the
                mix is shocking to me now. Almost offensive. There’s a burnt
                body in front of my office. Then I’m playing Scrabble with
                friends. There’s bomb smoke rising in front of the mall. Then
                I’m at a concert. There’s a long line for gas. Then I’m at a
                nightclub. This is all within two weeks. <br />
                <br />
                Today I’m like, “Did we live like this?” But we did. I mean, I
                did. Was I a rich Colombo good-for-nathan while poorer people
                died, especially minorities? Well, yes. I wrote about it, but
                who cares.
              </p>
            </div>
          </div>
          <div className={styles.articleFooter}>
            <ul>
              <li>
                <button type="button">
                  <img src="/icons/likeIcon.png" alt="" />
                  <span>2k</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <img src="/icons/commentIcon.png" alt="" />
                  <span>178</span>
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.tags}>
            <br />
            <ul>
              <li style={{ background: '#ED8D8D' }}>Self-help</li>
              <li style={{ background: '#A9EFE7' }}>Peace</li>
              <li style={{ background: '#C88DED' }}>productivity</li>
              <li style={{ background: '#B1ED8D' }}>Nature</li>
            </ul>
            <div className={styles.actions}>
              <ul>
                <li>
                  <button type="button">
                    <img src="/icons/share-icon.png" alt="" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src="/icons/bookmark-icon.png" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '0px 2rem' }}>
        <h1 style={{ margin: '2rem auto' }}>
          <strong style={{ color: '#4A2343' }}>More From Productivity</strong>
        </h1>
        <CommunityArticle />
        <CommunityArticle />
        <CommunityArticle />
      </div>
    </div>
  );
};

export default Article;
